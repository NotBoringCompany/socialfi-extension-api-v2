package configs

import (
	"context"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Initializes the Wonderverse database.
func InitWonderverseDB() *mongo.Client {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(os.Getenv("WONDERVERSE_MONGODB_URI")))
	if err != nil {
		log.Fatal(err)
	}

	return client
}

// Initializes the Wonderbits database.
func InitWonderbitsDB() *mongo.Client {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(os.Getenv("WONDERBITS_MONGODB_URI")))
	if err != nil {
		log.Fatal(err)
	}

	return client
}

var WonderverseDB *mongo.Client = InitWonderverseDB()
var WonderbitsDB *mongo.Client = InitWonderbitsDB()
