FROM node:11.15

EXPOSE 8080

WORKDIR /app

RUN npm install -g vue@2.6.6 @vue/cli
RUN npm install --save-dev jest @vue/cli-plugin-unit-jest

CMD npm run-script serve
