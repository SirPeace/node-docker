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
**[-v]** Declare the volume (*Volumes can overwrite themselves by the path nesting (like css selectors), so to prevent something from being synced (e.g. node_modules) you must declare another, more nested volume*):
**[--env]** Pass the env parameter (e.g. PORT=4000)
**[--env-file]** Pass the path to .env file (e.g. ./.env)
```
# Bind-mount volume
-v <local-path>:<container-path> 

# Anonymous volume
-v <container-path> 

# Sync local directory to /app except for node_modules
-v $(pwd):/app -v /app/node_modules 

# Read-only volume (can't modify files on our local machine)
-v $(pwd):/app:ro
```

```
$ docker run -d -p <port>:<port> -v <path>:<path> -v <path> --name <name> --env-file <path> <image>
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