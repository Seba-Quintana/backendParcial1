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

export default {getProduct };
