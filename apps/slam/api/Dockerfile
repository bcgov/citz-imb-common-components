FROM node:17.1.0-alpine3.14
WORKDIR /app
COPY ./dist/apps/slam/api .
EXPOSE 3333
COPY package*.json ./
RUN npm install --production --silent
CMD node main.js