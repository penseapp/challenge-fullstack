import { userTableName } from './../../types';
import { getTokenData } from './../../services/authentication';
import { Request, Response } from "express";
import connection from '../../connection';

export default async function getUserById(
    req: Request,
    res: Response
): Promise<void> {
    try{
        const token: string = req.headers.authorization!

        getTokenData(token)

        const [user] = await connection(userTableName)
            .where({id: req.params.id})

        res.send({
            id: user.id,
            name: user.name,
            email: user.email
        })

    }catch (error){
        console.log(error.message);
        
        if(res.statusCode === 200){
            res.status(500).send("Internal server error")
        } else{
            res.send(error.message)
        }
    }
    
}