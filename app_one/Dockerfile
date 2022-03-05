FROM node

WORKDIR /app

ENV APP_PORT=3000

COPY /package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD [ "node", "app.js" ]