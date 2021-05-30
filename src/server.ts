import * as dotenv from 'dotenv'
import app from "./app"

dotenv.config()

app.listen(process.env.PROD_DB_PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PROD_DB_PORT || '5000'}`)
})