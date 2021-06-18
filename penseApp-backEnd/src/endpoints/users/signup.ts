import { generateToken } from './../../services/authentication';
import { userTableName } from './../../types';
import { generateHash } from './../../services/hashManager';
import { Request, Response } from "express";
import generateId from "../../services/idGenerator";
import connection from '../../connection';

export default async function signup(
    req: Request,
    res: Response
    ): Promise<void> {
    try{
        const {name, email, password} = req.body
        
        const id: string = generateId()

        const cypherPassword: string = generateHash(password)

        const token: string = generateToken({id})
        
        await connection(userTableName)
            .insert({id, name, email, password: cypherPassword})

        res.send({token})
    } catch (error){
        console.log(error.message);
        
        if(res.statusCode === 200){
            res.status(500).send("Internal server error")
        } else{
            res.send(error.message)
        }
    }
    
}