const amqp = require('amqplib');

const EXCHANGE = 'headers_exchange';

const run = async () => {
    const conn = await amqp.connect('amqp://localhost');
    const ch = await conn.createChannel();

    await ch.assertExchange(EXCHANGE, 'headers', { durable: false });

    await ch.assertQueue('indian_alerts');
    await ch.assertQueue('us_info');

    await ch.bindQueue('indian_alerts', EXCHANGE, '', {
        'x-match': 'all',
        'region': 'IN',
        'type': 'alert'
    });

    await ch.bindQueue('us_info', EXCHANGE, '', {
        'x-match': 'any',
        'region': 'US',
        'type': 'info'
    });
    console.log('Waiting for header-based messages ... ');

    ch.consume('indian_alerts', msg => {
        console.log(`[IN] ${msg.content.toString()}`);
        ch.ack(msg);
    });

    ch.consume('us_info', msg => {
        console.log(`[US] ${msg.content.toString()}`);
        ch.ack(msg);
    })

};
run();