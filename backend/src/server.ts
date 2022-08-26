import cors from 'cors';
import express from "express";
import { routes } from "./api/controllers/routesController";


const app = express();

app.use(cors({origin:'*'}));
app.use(express.json());
app.use(routes);



app.listen(4003, () => console.log("Server is running on http://localhost:4003"));