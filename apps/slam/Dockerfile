FROM node:lts-alpine
WORKDIR /app
COPY ./apps/slam .
ENV PORT=8080
EXPOSE ${PORT}
COPY package*.json ./
RUN npm install --production --silent
RUN npx nx run slam:build
CMD ls -l