#!/bin/bash

docker kill $(docker ps -aq)
docker rm $(docker ps -aq)
docker volume rm $(docker volume ls -q)
docker system prune -a
docker volume prune -a
