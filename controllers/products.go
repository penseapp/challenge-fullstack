package controllers

import (
	"challenge-golang-penseapp/database"
	"net/http"

	"github.com/labstack/echo"
)

var db = database.Connection()

func CreateProduct(c echo.Context) error {
	product := &database.Product{}

	if err := c.Bind(product); err != nil {
		return err
	}

	if product.Name == "" {
		return c.String(400, "Nome esta vazio") // enhanced error
	}

	result := db.Create(product)

	if result.Error != nil {
		return c.String(500, "Erro na criação do produto")
	}

	return c.JSON(http.StatusCreated, product)
}

func ListProducts(c echo.Context) error {
	products := &[]database.Product{}

	result := db.Find(&products)

	if result.Error != nil {
		return c.String(500, "Ocorreu um erro na listagem de produtos tente de novo mais tarde")
	}

	return c.JSON(http.StatusOK, products)
}

func ReadProduct(c echo.Context) error {
	id := c.Param("id")

	product := &database.Product{}

	result := db.First(&product, id)

	if result.Error != nil {
		return c.String(500, "Ocorreu um erro na leitura do produto volte mais tarde")
	}

	return c.JSON(http.StatusOK, product)
}

func UpdateProduct(c echo.Context) error {
	id := c.Param("id")

	product := &database.Product{}
	body := &database.Product{}

	if err := c.Bind(body); err != nil {
		return c.String(500, "Ocorreu um erro na atualização do produto tente de novo mais tarde")
	}

	result := db.First(&product, id)

	if result.Error != nil {
		return c.String(500, "Ocorreu um erro na atualização do produto tente de novo mais tarde")
	}

	product.Name = body.Name
	product.Description = body.Description
	product.Price = body.Price
	product.PromotialPrice = body.PromotialPrice
	product.StatusFlag = body.StatusFlag
	product.Category = body.Category

	result = db.Save(&product)

	if result.Error != nil {
		return c.String(500, "Ocorreu um erro na atualização do produto tente de novo mais tarde")
	}

	return c.JSON(http.StatusOK, product)
}

func DeleteProduct(c echo.Context) error {
	id := c.Param("id")

	product := &database.Product{}

	result := db.Delete(&product, id)

	if result.Error != nil {
		return c.String(500, "Ocorreu um erro em remover o produto tente de novo mais tarde")
	}

	return c.NoContent(200)
}
