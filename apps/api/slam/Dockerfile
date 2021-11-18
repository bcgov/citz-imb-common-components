FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/api .
ENV PORT=3333
EXPOSE ${PORT}
COPY package*.json ./
RUN npm install --production
RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express @nrwl/workspace
CMD node ./slam-api/main.js