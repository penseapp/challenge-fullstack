import { config } from 'dotenv';
import {sign, verify} from "jsonwebtoken"
import { authenticationData } from '../types';

config()

const {JWT_KEY} = process.env

export const generateToken = (
    payload: authenticationData
): string => sign(
    payload,
    JWT_KEY!,
    {expiresIn : "1h"}
)

export const getTokenData = (
    token: string
): authenticationData | null => {
try{
   const {id} = verify(token, JWT_KEY!) as authenticationData
    return {id}
}catch(error){
    return null

}


}