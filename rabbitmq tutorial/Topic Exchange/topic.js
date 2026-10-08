const amqp = require('amqplib');

const EXCHANGE = 'topic_logs';

const run = async () => {
    const conn = await amqp.connect('amqp://localhost');
    const ch = await conn.createChannel();

    await ch.assertExchange(EXCHANGE, 'topic', { durable: false });

    const messages = [
        { key: 'order.created', msg: 'Order Created' },
        { key: 'order.cancelled', msg: 'Order Cancelled' },
        { key: 'user.signup', msg: ' User Signed Up' },
    ];

    messages.forEach(({ key, msg }) => {
        ch.publish(EXCHANGE, key, Buffer.from(msg));
        console.log(`Sent [${key}]: ${msg}`);
    });

    setTimeout(() => conn.close(), 500);
};
run();