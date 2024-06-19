package models

// APIResponse represents a response result/return value from an API endpoint or inheriting functions.
type APIResponse struct {
	Status  APIResponseStatus `json:"status"`
	Message string            `json:"message"`
	Data    interface{}       `json:"data"`
}

// APIResponseStatus represents a list of possible (used) API response statuses.
type APIResponseStatus int

const (
	SUCCESS               APIResponseStatus = 200
	BAD_REQUEST           APIResponseStatus = 400
	UNAUTHORIZED          APIResponseStatus = 401
	FORBIDDEN             APIResponseStatus = 403
	NOT_FOUND             APIResponseStatus = 404
	INTERNAL_SERVER_ERROR APIResponseStatus = 500
)
