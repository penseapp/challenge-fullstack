
import { getTokenData } from '../../services/authentication';
import { Request, Response } from "express";
import generateId from '../../services/idGenerator';
import connection from '../../connection';
import { productsTableName } from '../../types';


export default async function createProduct(
    req: Request,
    res: Response
    ): Promise<void> {
    try{
            const token = req.headers.authorization
            const {name, description, price, promo_price, image_url, status_flag, category, created_at} = req.body

            const tokenData = getTokenData(token!)

            const id = generateId()

            await connection(productsTableName)
                .insert({
                    id,
                    name,
                    description,
                    price,
                    promo_price,
                    image_url,
                    status_flag,
                    category,
                    created_at
                })

            res.send("Product sucessfuly created!")

    } catch (error){
        console.log(error.message);
        
        if(res.statusCode === 200){
            res.status(500).send("Internal server error")
        } else{
            res.send(error.message)
        }
    }
    
}
