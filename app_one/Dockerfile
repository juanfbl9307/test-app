FROM node

WORKDIR /app

ENV APP_PORT=3000

COPY package*.json .

RUN npm install

COPY . .

CMD [ "node", "app.js" ]