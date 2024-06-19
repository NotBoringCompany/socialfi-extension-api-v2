# go-services/Dockerfile
FROM golang:latest AS builder

WORKDIR /usr/src/app

# Copy the source code
COPY . .

# Build the application
RUN go build -o go-services

# Use a smaller base image for the runtime (with a compatible glibc version)
FROM debian:bookworm-slim

# Install CA certificates
RUN apt-get update && apt-get install -y ca-certificates && update-ca-certificates && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/app/go-services

# Copy the binary from the builder stage
COPY --from=builder /usr/src/app/go-services /usr/local/bin/go-services

# Expose the port
EXPOSE 7000

# Run the application
CMD ["go-services"]