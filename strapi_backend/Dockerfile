FROM node:18.17-alpine3.17

RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S app
COPY . .

RUN chown -R app /opt/app
USER app

RUN yarn
RUN yarn build

EXPOSE 1337
CMD [ "npm", "run", "start" ]
