#!/bin/bash

# build and start services for development
docker-compose -f docker-compose.yml -f docker-compose.dev.yml run --rm ts-services-dev npm run build
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up