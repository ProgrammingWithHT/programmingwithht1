const amqp = require("amqplib");

const sleep = (ms) => new Promise(res => setTimeout(res, ms));
const EXCHANGE = "broadcast_exchange";

const run = async () => {
    const conn = await amqp.connect("amqp://localhost:5672");
    const ch = await conn.createChannel();

    await ch.assertExchange(EXCHANGE, "fanout", { durable: false });

    const messages = [
        "New product launch!",
        "Big sale starting soon!",
        "New category added!"
    ];
    console.log("\nFanout Exchange Demo Started - sending every 10 seconds\n");

    for (const msg of messages) {
        await sleep(10000);
        ch.publish(EXCHANGE, "", Buffer.from(msg));
        console.log(`Broadcasted: ${msg}`);
    }

    console.log("\nAll messages sent. Closing connection.");
    setTimeout(() => conn.close(), 500);

};

run();