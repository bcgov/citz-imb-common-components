FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production --silent && mv node_modules ../
COPY apps/api/slam ./
RUN ls -l
CMD ["npm", "start"]