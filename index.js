require("dotenv").config(); 

const db = require("./db");

const port = process.env.PORT;

const express = require('express');

const app = express();

app.use(express.json())

app.post('/client', async (req, res) => {

    await db.insertCustomer(req.body);

    res.sendStatus(201);
    });

app.listen(port);
// app.post("/client", async(req, res) =>{ 
//     await db.insertCutomer(req.body)

//     res.sendStatus(201)
// })

// module

// console.log("Backend Rodando!")

