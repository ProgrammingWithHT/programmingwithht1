const express = require("express");
// const fetch = require("node-fetch");
const { createClient } = require("redis");

const app = express();
const PORT = 3000;

// Redis client
const redis = createClient({ url: "redis://localhost:6379" });
redis.on("error", err => console.error("Redis Error:", err));

(async () => {
    await redis.connect();
})();;// connect once at the start

// API Endpoint

app.get("/posts/:id", async (req, res) =>{
    const {id }= req.params;
    const cachekey = `post:${id}`;

    try {
        //Check Redis Cache
        const cachedData = await redis.get(cachekey);

        if (cachedData) {
            console.log("Cache hit for post:", id);
            return res.json({
                source: "redis",
                data: JSON.parse(cachedData)
            });
        }

        // Fetch From External API
        console.log("Calling external API ... ");
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();

        // Save to Redis With TTL of 60 sec
        await redis.set(cachekey, JSON.stringify(data), {EX: 60});

        res.json({
            source: "external api",
            data
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});