FROM node:17.1.0-alpine3.14
WORKDIR /app
COPY package*.json ./
RUN npm install --production --silent
RUN npm install nx
COPY . .
RUN npm run build
COPY ./dist/apps/slam/app .
EXPOSE 4200
CMD npm run start