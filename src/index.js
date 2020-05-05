import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import api from './routes';

const app = express();
const port = 3001;

app.use(cors({
    origin: 'http://localhost:3000'
  }));
app.use(bodyParser.json({}));

app.use("/", api());

app.use((err, req, res, next) => { console.error(err.stack); res.status(500).send('Ooops, server error !'); });
app.use((req, res) => { res.status(404).send("Ooops, you took a wrong turn !"); });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));