package main

import (
	"example/server/initializers"
	"fmt"

	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectDB()
}

func main() {
	fmt.Println("Hello World")
	r := gin.Default()
	r.GET("/testing", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello from the server!",
		})
	})

	r.Run()
}