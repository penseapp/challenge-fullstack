package main

import (
	"challenge-golang-penseapp/controllers"
	"net/http"

	"github.com/labstack/echo"
)

func Routes(e *echo.Echo) {
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})

	e.POST("/product", controllers.CreateProduct)
	e.GET("/product/:id", controllers.ReadProduct)
	e.GET("/products", controllers.ListProducts)
	e.PUT("/product/:id", controllers.UpdateProduct)
	e.DELETE("/product/:id", controllers.DeleteProduct)
}
