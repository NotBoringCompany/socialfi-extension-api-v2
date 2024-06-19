package configs

import (
	"context"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func InitMongo() *mongo.Client {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	uri := os.Getenv("BASE_MONGODB_URI")
	if uri == "" {
		log.Fatalf("(InitMongo) BASE_MONGODB_URI is not set")
	}

	opts := options.Client().ApplyURI(uri)

	client, err := mongo.Connect(ctx, opts)
	if err != nil {
		log.Fatalf("(InitMongo) Error connecting to MongoDB: %v", err)
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatalf("(InitMongo) Error pinging MongoDB: %v", err)
	}

	log.Println("(InitMongo) Connected to MongoDB")

	return client
}

var (
	WonderbitsDB  *mongo.Database = InitMongo().Database("Wonderbits")
	WonderverseDB *mongo.Database = InitMongo().Database("Wonderverse")
)
