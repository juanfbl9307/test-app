FROM node

WORKDIR /app

ENV APP_PORT=3001

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "node", "app.js" ]