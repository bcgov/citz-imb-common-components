FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/api/slam .
ENV PORT=3333
EXPOSE ${PORT}
COPY package*.json ./
RUN npm install --production --silent
RUN ls -l
CMD node main.js