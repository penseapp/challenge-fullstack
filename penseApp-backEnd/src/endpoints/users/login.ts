import { generateToken } from './../../services/authentication';
import { compareHash } from './../../services/hashManager';
import { userTableName } from './../../types';
import { Request, Response } from 'express';
import connection from '../../connection';

export default async function login(
    req: Request,
    res: Response
): Promise<void> {
    try{
        const { email, password} = req.body

        const [user] = await connection(userTableName)
            .where({email})

        const passwordIsCorrect: boolean = compareHash(password, user.password)

        if(!passwordIsCorrect){
            res.statusCode = 401
            throw new Error("Invalid Credentials");
            
        }
        const token = generateToken({id:user.id})

        res.send({token})

    }catch (error){
        console.log(error.message);
        
        if(res.statusCode === 200){
            res.status(500).send("Internal server error")
        } else{
            res.send(error.message)
        }
    }
    
}