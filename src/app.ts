import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { routes } from './routes'
import './database'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

export default app