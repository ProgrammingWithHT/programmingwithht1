const amqp = require("amqplib");

const EXCHANGE = 'direct_logs';

const run = async () => {
    const conn = await amqp.connect('amqp://localhost:5672');
    const ch = await conn.createChannel();

    await ch.assertExchange(EXCHANGE, 'direct', { durable: false });

    // Declare three queues
    await ch.assertQueue('info_logs');
    await ch.assertQueue('warn_logs');
    await ch.assertQueue('error_logs');

    // Bind each queue with matching routing keys
    await ch.bindQueue('info_logs', EXCHANGE, 'info');
    await ch.bindQueue('warn_logs', EXCHANGE, 'warn');
    await ch.bindQueue('error_logs', EXCHANGE, 'error');

    console.log("Waiting for direct log messages ... ");

    // Consumers for each queue
    ch.consume('info_logs', msg => {
        console.log(`[INFO] ${msg.content.toString()}`);
        ch.ack(msg);
    });

    ch.consume('warn_logs', msg => {
        console.log(`[WARN]${msg.content.toString()}`);
        ch.ack(msg);
    });

    ch.consume('error_logs', msg => {
        console.log(`[ERROR] ${msg.content.toString()}`);
        ch.ack(msg);
    });

}
run();