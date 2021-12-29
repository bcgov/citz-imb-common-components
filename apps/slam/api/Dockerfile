FROM node:17.3.0-alpine3.12
WORKDIR /app
# RUN chown -R node:node /app
# USER node
COPY package*.json ./
RUN npm install --production --silent
COPY ./dist/apps/slam/api .
EXPOSE 3333
CMD node main.js