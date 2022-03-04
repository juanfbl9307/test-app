FROM node

WORKDIR /app

ENV APP_PORT=3001

COPY /app_two/package*.json ./

RUN npm install

COPY /app_two ./

EXPOSE 3001

CMD [ "node", "app.js" ]