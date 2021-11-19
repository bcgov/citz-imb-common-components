FROM node:lts-alpine
WORKDIR /app
RUN ls -l
COPY ./dist/apps/api/slam .
ENV PORT=3333
EXPOSE ${PORT}
COPY package*.json ./
RUN npm install --production
CMD node main.js