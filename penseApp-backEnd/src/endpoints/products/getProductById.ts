
import { Request, Response } from "express";
import connection from "../../connection";
import { productsTableName } from "../../types";


export default async function getProductById(
    req: Request,
    res: Response
    ): Promise<void> {
    try{
        const id = req.params.id

        const [products] = await connection(productsTableName)
            .where({id: id})
    
        res.send(products)
        } catch (error){
        console.log(error.message);
        
        if(res.statusCode === 200){
            res.status(500).send("Internal server error")
        } else{
            res.send(error.message)
        }
    }
    
}

