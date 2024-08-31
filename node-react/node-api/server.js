const fs = require("fs/promises");
const express = require("express");
// const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");


const app = express();

app.use(express.json());

app.get("/outfit", (req, res) => {
    const tops = ["black", "white", "orange", "Navy"];
    const jeans = ["blue", "white", "black", "red"];
    const shoes = ["white", "gray", "green"];

    res.json({
        top: _.sample(tops),
        jeans: _.sample(jeans),
        shoes: _.sample(shoes)
    });
})

app.post("/comments", async (req, res) => {
    const id = uuid();
    const content = req.body.content;

    console.log(id, content);

    if (!content) {
        res.sendStatus(400);
    }

    await fs.mkdir("data/comments", { recursive: true });
    await fs.writeFile(`data/comments/${id}.text`, content);

    res.status(201).json({
        id
    })
})

app.get("/comments/:id", async (req, res) => {
    const id = req.params.id;

    let content;
    try {
        content = await fs.readFile(`data/comments/${id}.text`, "utf-8");
    } catch (error) {
       return res.sendStatus(404)
    }

    res.json({
        content:content
    });
})

app.listen(3000, () => console.log("API server is running..."));