import express, { Express, NextFunction } from "express";
import http from 'http';
import bodyParser from 'body-parser';

const app = express();

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/products', loginRoutes);
