FROM node:lts-alpine
WORKDIR /app
COPY ./apps/api/slam .
ENV PORT=3333
EXPOSE ${PORT}
COPY package*.json ./
RUN npm install --production --silent
RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express --silent
CMD ls -l