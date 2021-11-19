FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/slam .
ENV PORT=3333
EXPOSE ${PORT}
CMD ls -l