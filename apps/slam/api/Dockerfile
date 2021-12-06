FROM node:17.1.0-alpine3.14
WORKDIR /app
RUN ls -l
RUN chown -R node:node /app
USER node
COPY package*.json ./
RUN npm install --production --silent
COPY ./dist/apps/slam/api .
EXPOSE 3333
CMD node main.js