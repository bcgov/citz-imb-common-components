FROM node:17.1.0-alpine3.14
WORKDIR /app
# RUN chown -R node:node /app
# USER node
# COPY package*.json ./
# RUN npm install --production --silent
RUN ls -l
COPY ./dist/apps/slam/app .
EXPOSE 4200
CMD ls -l