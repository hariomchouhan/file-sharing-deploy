import express from "express";
import 'dotenv/config';
import router from "./src/Routes/Routes.js";
import cors from 'cors';
import ConfigureDb from "./src/Config/db.js";
import path from "path";

const __dirname = path.resolve();
const app = express();

app.use(cors());
app.use('/', router);


app.use(express.static(path.join(__dirname, "./client/build")));
app.get('*', function (_, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"), function (err) {
        res.status(500).send(err);
    })
})

const PORT = process.env.SERVER_PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    ConfigureDb();
});