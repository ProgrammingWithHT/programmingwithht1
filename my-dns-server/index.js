const dgram = require('node:dgram');
const dnsPacket = require('dns-packet');
const host = process.env.DNS_HOST ?? '0.0.0.0';
// Windows often already uses UDP 53, so default to a high port for local development.
const port = Number.parseInt(process.env.DNS_PORT ?? '5300', 10);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(
    `Invalid DNS_PORT "${process.env.DNS_PORT}". Expected a number between 1 and 65535.`,
  );
}

const server = dgram.createSocket('udp4');

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(
      `Port ${host}:${port} is already in use. In PowerShell, try "$env:DNS_PORT='5300'; node index.js" or stop the process currently listening there.`,
    );
  } else {
    console.error(`server error:\n${err.stack}`);
  }
  server.close();
});

// const buf = dnsPacket.encode({
//   type: 'query',
//   id: 1,
//   flags: dnsPacket.RECURSION_DESIRED,
//   questions: [{
//     type: 'A',
//     name: 'google.com'
//   }]
// })

const db = {
    'piyushgarg.dev': {
        type: 'A',
        data: '1.2.3.4'
    },
    'blog.piyushgarg.dev': {
        type: 'CNAME',
        data: 'piyushgarg.dev'
    }
}

server.on('message', (msg, rinfo) => {
    const incomingReq = dnsPacket.decode(msg);
    const ipFromDb = db[incomingReq.questions[0].name];
    console.log('ipFromDb', ipFromDb);
    const response = dnsPacket.encode({
        type: 'response',
        id: incomingReq.id,
        flags: dnsPacket.RECURSION_DESIRED,
        questions: incomingReq.questions,
        answers: ipFromDb ? [{
            type: ipFromDb.type,
            class: 'IN',
            name: incomingReq.questions[0].name,
            ttl: 300,
            data: ipFromDb.data
        }] : []
    });
    server.send(response, rinfo.port, rinfo.address, (err) => {
        if (err) {
            console.error(`Error sending response to ${rinfo.address}:${rinfo.port} - ${err.message}`);
        } else {
            console.log(`Response sent to ${rinfo.address}:${rinfo.port}`);
        }
    });

//   console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
//   console.log(`server got ${msg.length} bytes from ${rinfo.address}:${rinfo.port}`,);
//   console.log(msg.toString('hex'));
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind({ port, address: host }, () => {
  console.log(`server bound to ${host}:${port}`);
});
