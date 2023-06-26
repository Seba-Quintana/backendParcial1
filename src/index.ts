import express, { Express, NextFunction } from "express";
import http from 'http';
import bodyParser from 'body-parser';
import productRoutes from "./routes/productRoutes";

const app = express();

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/products', productRoutes);

const httpServer = http.createServer(app);
httpServer.listen(3000);