FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/api/slam .
EXPOSE ${PORT}
COPY package*.json ./
RUN npm install --production --silent
CMD node main.js