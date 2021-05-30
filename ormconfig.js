module.exports = {
  "type": process.env.PROD_DB_CONNECTION,
  "url": process.env.PROD_DB_URL,
  "entities": [
    "./dist/entities/**.js"
  ],
  "migrations": [
    "./dist/database/migrations/**.js"
  ],
  "cli": {
    "migrationsDir": [
      "./dist/database/migrations"
    ],
  }
}