FROM node:19-alpine

# создание директории приложения
WORKDIR /app


# Переменные окружения
# Служебные
ENV PORT 4000


# REDIS
ENV REDIS_URL "redis://redis:6379"
ENV REDIS_PASSWORD ""
ENV REDIS_USERNAME ""

# копируем исходный код
COPY . ./

RUN yarn install

RUN yarn build

EXPOSE $PORT
CMD [ "node", "./dist/index.js" ]