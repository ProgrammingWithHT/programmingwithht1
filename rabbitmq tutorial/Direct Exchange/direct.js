const amqp = require("amqplib");

const sleep = (ms) => new Promise(res => setTimeout(res, ms));
const EXCHANGE = "direct_logs";

const run = async () => {
    const conn = await amqp.connect("amqp://localhost:5672");
    const ch = await conn.createChannel();

    await ch.assertExchange(EXCHANGE, "direct", { durable: false });

    const messages = [
        { key: "info", msg: "Info log message" },
        { key: "warn", msg: "Warning log message" },
        { key: "error", msg: "Error log message" }
    ];

    console.log("\n Direct Exchange Demo Started - sending every 10 seconds\n");

    for (const { key, msg } of messages) {
        await sleep(5000);// wait 5seconds before sending
        ch.publish(EXCHANGE, key, Buffer.from(msg));
        console.log(`Sent [${key.toUpperCase()}]: ${msg}`);
    }
}
run();