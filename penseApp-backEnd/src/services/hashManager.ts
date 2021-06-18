import {hashSync, compareSync, genSaltSync} from "bcryptjs"
import {config} from "dotenv"

config()

export const generateHash = (
    plainText: string
): string => {
    const rounds: number = Number(process.env.BCRYPT_COST)
    const salt: string = genSaltSync(rounds)
    return hashSync(plainText, salt)
}

export const compareHash = (
    plainxText: string,
    cypherText: string
): boolean => compareSync(plainxText, cypherText)