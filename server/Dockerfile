#FROM node:12.16.2-alpine
FROM node:16.18.1-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
COPY . .

CMD [ "node", "--experimental-modules", "index.js" ]