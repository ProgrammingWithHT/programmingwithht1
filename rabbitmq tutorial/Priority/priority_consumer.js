const amqp = require("amqplib");

const run = async () => {
    const conn = await amqp.connect("amqp://localhost");
    const ch = await conn.createChannel();

    const queue = "priority_tasks";

    await ch.assertQueue(queue, {
        durable: true,
        arguments: { "x-max-priority": 10 }
    });

    console.log(" Waiting for messages (delivered in priority order) ... ");

    ch.consume(queue, (msg) => {
        console.log(`Received: ${msg.content.toString()}`);
        ch.ack(msg);
    });

};

run();