
import { getTokenData } from '../../services/authentication';
import { Request, Response } from "express";
import connection from '../../connection';
import { productsTableName } from '../../types';


export default async function updateProduct(
    req: Request,
    res: Response
    ): Promise<void> {
    try{

            const id = req.params.id

            const token = req.headers.authorization
          
            const tokenData = getTokenData(token!)

           
            await connection.raw(`
                     UPDATE ${productsTableName}
                     SET price =${req.body.price} 
                     WHERE id="${id}";
                     `)
             

            res.send("Product sucessfuly price updade!")

    } catch (error){
        console.log(error.message);
        
        if(res.statusCode === 200){
            res.status(500).send("Internal server error")
        } else{
            res.send(error.message)
        }
    }
    
}

