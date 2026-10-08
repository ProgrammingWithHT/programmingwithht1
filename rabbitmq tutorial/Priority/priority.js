const  amqp = require("amqplib");

const run = async () => {
    const conn = await amqp.connect("amqp://localhost");
    const ch = await conn.createChannel();

    const queue = "priority_tasks";

    // Create a queue that supports priorities (max = 10)
    await ch.assertQueue(queue, {
        durable: true,
        arguments: { "x-max-priority": 10 }
    });

    const tasks = [
        { msg: "Task A (Low Priority)", priority: 1 },
        { msg: "Task B (High Priority)", priority: 9 },
        { msg: "Task C (Medium Priority)", priority: 5 },
        { msg: "Task D (Very High Priority)", priority: 10 },
        { msg: "Task E (Normal Priority)", priority: 3 },
    ];

    console.log("\nPriority Queue Demo - sending all messages immediately\n");

    for (const task of tasks){
        ch.sendToQueue(queue, Buffer.from(task.msg), {
            persistent: true,
            priority: task.priority,
        });
        console.log(`Sent: ${task.msg} (priority: ${task.priority})`)
    }
    console.log("\nAll messages sent. Closing connection ... ");
    setTimeout(()=> conn.close(), 1000);
};
run();