ARG NODE_VERSION

FROM node:$NODE_VERSION
WORKDIR /app
COPY package*.json ./
RUN npm install --production --silent
RUN npm install nx
COPY . .
RUN npm run build
COPY ./dist/apps/slam/app .
EXPOSE 3000
# CMD ls -l -a
CMD npm run start