FROM node:lts-alpine
WORKDIR /app
COPY . .
ENV PORT=3333
EXPOSE ${PORT}
COPY package*.json ./
RUN npm install --production
RUN ls -l
CMD node main.js