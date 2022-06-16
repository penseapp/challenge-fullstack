package main

import (
	"challenge-golang-penseapp/database"

	"github.com/labstack/echo"
)

func main() {
	db := database.Connection()

	database.Migrate(db)

	e := echo.New()

	Routes(e)

	e.Logger.Fatal(e.Start(":1323"))
}
