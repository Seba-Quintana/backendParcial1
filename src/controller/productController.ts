import { NextFunction, Request, Response } from "express";

import { IResponse } from "../interfaces/IResponse";
import { IProductDetails } from "../interfaces/IProductDetails";

const products: IProductDetails[] = [
  {
    id: 0,
    name: "Manzanas",
    price: 10,
    stock: 10,
    pictures: ["aaa", "aaaa", "aaaa"],
  },
  {
    id: 1,
    name: "Peras",
    price: 5,
    stock: 200,
    pictures: ["aaa", "aaaa", "aaaa"],
  },
  {
    id: 2,
    name: "Duraznos",
    price: 100,
    stock: 4,
    pictures: ["aaa", "aaaa", "aaaa"],
  },
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
          return products[productID]
        }
      });
      const response: IResponse<any[]> = {
        Result: {
          statuscode: "",
          statustext: "",
        },
        data: prods,
      };

      res.status(200);
      res.json(response);
    } else {
      res.status(404);
    }
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
};



export default { getProduct };
