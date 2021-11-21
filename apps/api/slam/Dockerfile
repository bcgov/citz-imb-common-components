FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/api/slam .
EXPOSE 8080
COPY package*.json ./
RUN npm install --production --silent
CMD node main.js