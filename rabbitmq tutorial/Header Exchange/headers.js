const amqp = require('amqplib');

const EXCHANGE = 'headers_exchange';

const run = async () => {
    const conn = await amqp.connect('amqp://localhost');
    const ch = await conn.createChannel();
    await ch.assertExchange(EXCHANGE, 'headers', { durable: false });
    ch.publish(EXCHANGE, '', Buffer.from('India Alert!'), {
        headers: { region: 'IN', type: 'alert' }
    });
    ch.publish(EXCHANGE, '', Buffer.from('US Info!'), {
        headers: { region: 'US', type: 'info' }
    });
    console.log('Sent header-based messages.');
    setTimeout(()=> conn.close(), 500);
};

run();