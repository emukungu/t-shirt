# # use existing docker image
# #FROM command specifies the base image to use
# FROM alpine

# #Download and install a dependecy
# #RUN ; specifies commands to use as prepare custom image
# RUN apk add --update redis

# #Tell the image waht to do whenm itstarts as a container.
# #CMD; what to execute when we start the container/ start up command.
# CMD ["redis-server"]

# use existing docker image
#FROM command specifies the base image to use
FROM node:alpine

# specific working directory
WORKDIR /usr/app

# COPY: MOVE FILES FROM LOCAL MACHINE TO CONTAINER 
COPY ./package.json ./

#Download and install a dependecy
#RUN; install dependencies
RUN npm install 
COPY ./ ./
#Tell the image waht to do whenm itstarts as a container.
#CMD; default command
CMD ["npm", "start"]

