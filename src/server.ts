import app from "./app"
import * as dotenv from 'dotenv'

dotenv.config()

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000")
})