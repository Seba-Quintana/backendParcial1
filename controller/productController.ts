import { NextFunction, Request, Response } from 'express';




// writeFile function with filename, content and callback function

const getProduct = async (req: Request, res: Response) => {

	try {
		// Get the person with the specified ID
		const personId = req.body.userId;
		console.log(`personId: ${personId}`);
		if (personId) {
		
			res.status(200).json("");
		} else {
			res.status(404);
		}
	} catch (err) {
		res.status(500).json({ error: err?.message });
	}
};


const getAllProducts = async (req: Request, res: Response) => {

	try {
		const result = [];
		// const response: IResponse<any[]> = {
        //     Result: {
        //         statuscode: "",
        //         statustext: ""
        //     },
        //     data: result
        // }
        if(result.length > 1) {
            // response.Result.statuscode = "200";
            // response.Result.statustext = "OK";
            res.status(200);
            // res.json(response);
        }else{
            // response.Result.statuscode = "404";
            // response.Result.statustext = "Not found";
            res.status(404);
            // res.json(response);
        }res.status(404);
		}catch(err){
			res.status(500);
			console.error(err.message);
		}
	}


export default {getProduct, getAllProducts };
