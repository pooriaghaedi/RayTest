FROM node:12.18-alpine

RUN mkdir -p /usr/src/raychat
COPY wait-for-it.sh /usr/wait-for-it.sh
RUN chmod +x /usr/wait-for-it.sh
RUN apk update && apk upgrade
RUN apk add git
RUN date
RUN git clone https://gitlab.com/mjodeh84/test-node.git /usr/src/raychat
COPY ./ServerConfig.js /usr/src/raychat/src/server/config/ServerConfig.js

WORKDIR /usr/src/raychat
RUN npm install

#RUN npm run server:development

EXPOSE 3030


