import * as dotenv from 'dotenv'
dotenv.config()

console.log('process.env.DATABASEE_URL :>> ', process.env.PROD_DB_CONNECTION)

module.exports = {
  "type": process.env.PROD_DB_CONNECTION,
  "host": process.env.PROD_DB_HOSTNAME,
  "port": process.env.PROD_DB_PORT,
  "name":process.env.PROD_DB_USERNAME,
  "password":process.env.PROD_DB_PASSWORD,
  "database":process.env.PROD_DB_DATABASE,
  "entities": [
    "dist/models/**/*.js"
 ],
 "migrations": [
  "dist/database/migrations/**/*.js"
],
 "cli":{
  "migrationsDir": [
    "src/database/migrations/"
  ],
  "entitiesDir": "src/models"
  }
}