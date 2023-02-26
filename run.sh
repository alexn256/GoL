#!/bin/bash

# Build Docker image from Dockerfile
docker build -t gol:1.0 .

# Run a container using the built image
docker run --rm --name gol-game -it gol:1.0