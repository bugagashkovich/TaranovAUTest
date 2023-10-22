# Тестирование

- Перейдите в директорию проекта
- Введите комманду docker-compose build (убедитесь, что порт 3000 свободен)
- Введите комманду dpcker-compose up

При успешном запуске проекта:

- Отправьте POST запрос по адресу localhost:8000/auth с body
  {"PHPSESSIONID": string}

В ответе получите статус 200 и сообщение

{
"message": "Saved successfully"
}

При ошибке перепроверьте доступность порта 3000

- Отправьте GET запрос по адресу localhost:8000/balance

В ответ получите статус и данные пользователя

# Контакты

Telegram - https://t.me/GlushikhinAS
HH - https://hh.ru/resume/8b8510aaff09eef2240039ed1f454647557559

# Задача:

## Создать сервис с двумя роутами: /auth и /balance, используя Node.js и Express.js. Сервис должен выполнять авторизацию на сайте https://trending.bid через /auth и затем получать данные из сайта при запросе /balance.

### Инструкции:

Создайте Docker-контейнеры для сервиса и редиса.
Создайте два HTTP-роута: /auth и /balance

#### Реализуйте следующую функциональность для роута /auth:

Метод: POST
Content-Type: application/json
В теле запроса передайте параметр PHPSESSID.
Сохраните данные в Redis.
Верните ответ с успешным статусом.

#### Реализуйте следующую функциональность для роута /balance:

Метод: GET
Используйте токен из Redis для аутентификации.
Сделайте запрос к сети за балансом аккаунта.
Верните ответ со статусом "true" и данными, полученными из сети.

#### Создайте файл docker-compose.yml для управления контейнерами сервиса и Redis.

Включите необходимую конфигурацию в Docker Compose, чтобы сервис мог обращаться к Redis.
Запустите контейнеры с помощью docker-compose up.
Протестируйте работу сервиса:
Отправьте POST-запрос на /auth с параметром PHPSESSID.
Сохраните полученный токен.
Отправьте GET-запрос на /balance.
Убедитесь, что сервис успешно получает данные из сети и возвращает ответ с балансом аккаунта и статусом "true".

#### Оценка:

Задание будет оцениваться на основе git-репозитория и следующих критериев:
Сервер запускается коммандой docker-compose up на порту 3000
Корректная реализация роутов /auth и /balance.
Использование Docker Compose для управления контейнерами.
Работающее взаимодействие с Redis.
Обработка ошибок и корректные HTTP-статусы.
Чистый и упорядоченный код.
Краткий README-файл с инструкциями по запуску и тестированию сервиса.

#### Как получить PHPSESSID?

Авторизуйтесь на сайте.
С помощью инструментов разработчика браузера, найдите запросы к сайту.
В запросе будет header Cookie, в котором будет искомый параметр.