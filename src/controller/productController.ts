import { NextFunction, Request, Response } from "express";

import { IResponse } from "../interfaces/IResponse";
import { IProductDetails } from "../interfaces/IProductDetails";

const products: IProductDetails[] = [
  {
    id: 1,
    name: "Manzanas",
    price: 10,
    stock: 10,
    pictures: ["https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg", "https://elegifruta.com.ar/wp-content/uploads/2017/07/manzana_roja.jpg"],
  },
  {
    id: 2,
    name: "Peras",
    price: 5,
    stock: 200,
    pictures: ["https://static.wixstatic.com/media/a7dee3_4c558736f7b243329c59427d855d278c~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85/a7dee3_4c558736f7b243329c59427d855d278c~mv2.jpg", "https://www.herbazest.com/imgs/d/8/7/551784/pera.jpg"],
  },
  {
    id: 3,
    name: "Duraznos",
    price: 100,
    stock: 4,
    pictures: ["https://img.freepik.com/fotos-premium/hoja-durazno-fresco-aislado-blanco_299651-1556.jpg?w=2000", "https://cdn.bitlysdowssl-aws.com/wp-content/uploads/2018/01/durazno-tiene-multiples-propiedades-medicinales_221238.jpg"],
  }
];

// writeFile function with filename, content and callback function

const getProduct = async (req: Request, res: Response) => {
  const productID = parseInt(req.params.id);

  try {
    // Get the person with the specified ID
    if (productID) {
      const prods = products.filter((prod) => {
        const producto = prod.id == productID;
        if(producto){
          return products[productID-1]
        }
      });
      const response: IResponse<any[]> = {
        Result: {
          statuscode: "200",
          statustext: "OK",
        },
        data: prods,
      };

      res.status(200);
      res.json(response);
    } else {
      const response: IResponse<any[]> = {
        Result: {
          statuscode: "404",
          statustext: "NOT FOUND",
        },
        data: []
      };

      res.status(404);
      res.json(response);    }
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
};



const getAllProducts = async (req: Request, res: Response) => {

	try {
		const response: IResponse<any[]> = {
            Result: {
                statuscode: "",
                statustext: ""
            },
            data: products
        }
        if(products.length > 1) {
            response.Result.statuscode = "200";
            response.Result.statustext = "OK";
            res.status(200);
            res.json(response);
        }else{
            response.Result.statuscode = "404";
            response.Result.statustext = "Not found";
            res.status(404);
            res.json(response);
        }res.status(404);
		}catch(err){
			res.status(500);
			console.error(err.message);
		}
	}


export default {getProduct, getAllProducts };
