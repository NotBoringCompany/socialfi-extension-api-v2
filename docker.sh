#!/bin/bash

# Function to show usage
show_usage() {
  echo "Usage: $0 {build-prod|up-prod|build-dev|up-dev|down-prod|down-dev|build-and-up-prod|build-and-up-dev}"
  echo "Commands:"
  echo "  build-prod       Build the production Docker images"
  echo "  up-prod          Start the production Docker containers"
  echo "  build-dev        Build the development Docker images"
  echo "  up-dev           Start the development Docker containers"
  echo "  down-prod        Stop and remove the production Docker containers"
  echo "  down-dev         Stop and remove the development Docker containers"
  echo "  build-and-up-prod  Build and start the production Docker images"
  echo "  build-and-up-dev  Build and start the development Docker images"
}

# Check if arguments are provided
if [ "$#" -ne 1 ]; then
  show_usage
  exit 1
fi

# Assign argument to variable
COMMAND=$1

# Set Docker Compose files based on the command
case $COMMAND in
  build-prod)
    COMPOSE_FILES="-f docker-compose.yml"
    docker-compose $COMPOSE_FILES build
    ;;
  up-prod)
    COMPOSE_FILES="-f docker-compose.yml"
    docker-compose $COMPOSE_FILES up
    ;;
  build-dev)
    COMPOSE_FILES="-f docker-compose.yml -f docker-compose.dev.yml"
    docker-compose $COMPOSE_FILES build
    ;;
  up-dev)
    COMPOSE_FILES="-f docker-compose.yml -f docker-compose.dev.yml"
    docker-compose $COMPOSE_FILES up
    ;;
  down-prod)
    COMPOSE_FILES="-f docker-compose.yml"
    docker-compose $COMPOSE_FILES down
    ;;
  down-dev)
    COMPOSE_FILES="-f docker-compose.yml -f docker-compose.dev.yml"
    docker-compose $COMPOSE_FILES down
    ;;
  build-and-up-prod)
    COMPOSE_FILES="-f docker-compose.yml"
    docker-compose $COMPOSE_FILES up --build
    ;;
  build-and-up-dev)
    COMPOSE_FILES="-f docker-compose.yml -f docker-compose.dev.yml"
    docker-compose $COMPOSE_FILES run --rm ts-services npm run build
    docker-compose $COMPOSE_FILES up --build
    ;;
  *)
    show_usage
    exit 1
    ;;
esac