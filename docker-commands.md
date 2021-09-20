# Docker commands:

### Build the image
**[-t]** Set the image name
```
$ docker build -t <name> .
```

### List images
```
$ docker image ls
```

### Delete the image
```
$ docker image rm <image>
```

### Run the created image
**[-d]** Run in the detached mode \
**[-p]** Bind local port to container port \
**[--name]** Set the container name \
**[-v]** Set bind-mount volume between local path and container path
```
$ docker run -d -p <port>:<port> --name <name> <image>
```

### List running containers
**[-a]** List all containers, including EXITED
```
$ docker ps
```

### Delete the container
**[-f]** Forcefully stop the container before delete
```
$ docker rm -f <container>
```

### Run the bash inside container interactively
```
$ docker exec -it <container> bash
```

### Check the container logs
```
$ docker logs <container>
```