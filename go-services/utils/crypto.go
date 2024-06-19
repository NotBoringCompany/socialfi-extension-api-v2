package utils

import (
	"crypto/rand"
	"encoding/hex"
)

// Generates a random object ID for MongoDB documents.
func GenerateObjectID() (string, error) {
	bytes := make([]byte, 12)

	if _, err := rand.Read(bytes); err != nil {
		return "", err
	}

	return hex.EncodeToString(bytes), nil
}
