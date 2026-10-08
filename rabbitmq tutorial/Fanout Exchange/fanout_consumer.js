const amqp = require("amqplib");

const EXCHANGE = "broadcast_exchange";

const run = async (name) => {
    const conn = await amqp.connect("amqp://localhost:5672");
    const ch = await conn.createChannel();
    await ch.assertExchange(EXCHANGE, "fanout", { durable: false });
    const q = await ch.assertQueue("", { exclusive: true });
    await ch.bindQueue(q.queue, EXCHANGE, "");

    console.log(`${name} waiting for broadcasts ... `);
    ch.consume(q.queue, msg => {
        console.log(`[${ name }]got: ${ msg.content.toString() }`);
    });
}

run("MobileApp");
run("EmailService");