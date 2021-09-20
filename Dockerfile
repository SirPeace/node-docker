FROM node:15

# Node image has /app folder, so you just cd into it
WORKDIR /app

# Copy local ./package.json file into /app/package.json in the Docker container
COPY package.json .

# Execute command in the Docker container
#? Build time (when building the container)
RUN npm install

# Copy else local files into the /app Docker container directory
#
# This is done separately from dependencies for optimization reasons.
# If you change your source code, but not dependencies list, then Docker will only re-run this 5th layer
#
# Even with bind-mounts this is required, because there will be no bind-mounts in Production
COPY . .

# Inform Docker that the container listens on the specified network ports at runtime.
#
# This instruction does not actually publish the port. 
# It functions as a type of documentation between the person who builds the image and 
# the person who runs the container, about which ports are intended to be published. 
# To actually publish the port when running the container, use the -p flag on docker run to publish and map one or more ports, 
# or the -P flag to publish all exposed ports and map them to high-order ports.
EXPOSE 3000

# Execute command in the Docker container
#? Run time (when running the container)
CMD ["npm", "run", "dev"]