import express from 'express';
import controller from '../controller/productController'

const router = express.Router();

router.get('/getProduct', (req, res, next) => {
    controller.getProduct(req, res)
});

router.get('/getProductById/:id', (req, res, next) => {
    controller.getProduct(req, res)
});


export default router;