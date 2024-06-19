package main

import (
	"log"
	"wonderverse-api/configs"

	"github.com/gofiber/fiber/v2"
)

func main() {
	log.Println("Hello there!")
	configs.InitMongo()

	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, world!")
	})

	app.Listen(":7000")
}
