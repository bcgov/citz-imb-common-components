FROM node:lts-alpine
ENV NODE_ENV=production
ENV PORT=3333
ENV PORT_API=4000
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "nx.json", "./"]

RUN npm install --production --silent && mv node_modules ../
COPY . .

RUN chown -R node /usr/src/app
USER node

RUN npm install -g @nrwl/cli

RUN nx build --production

CMD nx serve api-slam
