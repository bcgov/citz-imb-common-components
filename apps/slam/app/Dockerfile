FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/slam/app .
EXPOSE 8080
COPY package*.json ./
RUN npm install --production --silent
RUN ls -l public
CMD node main.js