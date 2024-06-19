package api_wonderbits

import (
	"context"
	"time"
)

func CreateRaft(userID string) error {

}

func GetLatestRaftID() (uint, error) {
	// create a new context with a 10 sec timeout
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
}
