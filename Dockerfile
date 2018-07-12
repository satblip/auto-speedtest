FROM node:10.6.0-alpine

ENV APP_NAME auto-speedtest
ENV NODE_TLS_REJECT_UNAUTHORIZED 0

WORKDIR /var/www

COPY ./package.json /var/www/package.json
COPY ./index.js /var/www/index.js

RUN npm install

CMD ["node", "index.js"]
