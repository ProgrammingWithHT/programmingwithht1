const amqp = require('amqplib');

const EXCHANGE = 'topic_logs';

const run = async () => {
    const conn = await amqp.connect('amqp://localhost');
    const ch = await conn.createChannel();

    await ch.assertExchange(EXCHANGE, 'topic', { durable: false });

    const q1 = await ch.assertQueue('order_events');
    const q2 = await ch.assertQueue('user_events');

    await ch.bindQueue(q1.queue, EXCHANGE, 'order.*');
    await ch.bindQueue(q2.queue, EXCHANGE, '*.signup');

    console.log("Waiting for topic logs ... ");

    ch.consume(q1.queue, msg => {
        console.log(`[Order] ${msg.fields.routingKey}: ${msg.content.toString()}`);
        ch.ack(msg);
    });

    ch.consume(q2.queue, msg => {
        console.log(`[User] ${msg.fields.routingKey}: ${msg.content.toString()}`);
        ch.ack(msg);
    });
};
run();

