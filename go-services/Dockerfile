# go-services/Dockerfile
FROM golang:latest AS builder

WORKDIR /usr/src/app

# Copy the source code
COPY . .

# Build the application
RUN go build -o go-services

# Use a smaller base image for the runtime (with a compatible glibc version)
FROM debian:bookworm-slim

# Copy the binary from the builder stage
COPY --from=builder /usr/src/app/go-services /usr/local/bin/go-services

# Expose the port
EXPOSE 7000

# Run the application
CMD ["go-services"]