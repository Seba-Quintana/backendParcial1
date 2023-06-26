import express from 'express';
import controller from '../controller/productController'

const router = express.Router();

router.get('/getAllProducts', (req, res, next) => {
    controller.getAllProducts(req,res);
});

router.get('/getProductById', (req, res, next) => {
    controller.getProduct(req, res)
});


