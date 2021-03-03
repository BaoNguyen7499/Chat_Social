import express from "express";
import ConnectDB from "./config/connectDB";
import ContactModel from "./model/contact.model";

let app = express();

// connect to mongodb
ConnectDB();

let port = 3300;
let hostname = 'localhost';

app.get('/database', async(req, res) => {
    try {
        let item = {
            userId: "123123",
            contactId: "123133311",
        };
        let contact = await ContactModel.createNew(item);
        res.send(contact);
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, hostname, () => {
    console.log(`Example app listening at ${hostname}:${port}/`)
});