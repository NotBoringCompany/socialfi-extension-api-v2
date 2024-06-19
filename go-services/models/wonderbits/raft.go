package models_wonderbits

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Represents a raft in Wonderbits.
type Raft struct {
	ID           primitive.ObjectID `bson:"_id,omitempty"` // unique database ID of the raft
	RaftId       int                `bson:"raftId"`        // unique numerical identifier of the raft; starts from 1 and increments by 1 for each new raft
	Owner        string             `bson:"owner"`         // the owner of the raft's user ID
	CurrentLevel int                `bson:"currentLevel"`  // the current level of the raft
	Stats        RaftStats          `bson:"stats"`         // the stats of the raft
}

// Represents the stats of a raft in Wonderbits.
type RaftStats struct {
	BaseSpeed int `bson:"baseSpeed"` // the base speed of the raft
}
