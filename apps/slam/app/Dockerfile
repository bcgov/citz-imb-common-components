FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/slam/app .
EXPOSE 3333
COPY package*.json ./
RUN npm install --production --silent
CMD node main.js