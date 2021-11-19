FROM node:lts-alpine
WORKDIR /app
COPY ./dist .
ENV PORT=3333
EXPOSE ${PORT}
COPY package*.json ./
RUN npm install --production --silent
RUN ls -l
CMD node main.js