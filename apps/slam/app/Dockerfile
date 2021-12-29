FROM node:17.3.0-alpine3.12
WORKDIR /app
COPY package*.json ./
RUN npm install --production --silent
RUN npm install nx
COPY . .
RUN npm run build
COPY ./dist/apps/slam/app .
EXPOSE 3000
CMD npm run start