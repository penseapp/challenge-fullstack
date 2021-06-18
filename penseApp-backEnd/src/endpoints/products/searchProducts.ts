import { productsTableName } from './../../types';
import { Request, Response } from "express";
import connection from "../../connection";


export default async function searchProduct(
    req: Request,
    res: Response
    ): Promise<void> {
    try{

        const search = req.params.search
        

        const [products] = await connection.raw(`SELECT * FROM ${productsTableName} WHERE name LIKE "%${search}%" OR description LIKE "%${search}%" 
       `)
         
    
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



