**README.md**

## Установка

1. Склонируйте репозиторий: git clone  <repository-url>
2. Перейдите в директорию проекта: cd your-project
3. Установите зависимости: npm install

## Запуск

Выполните следующие команды:

- "dev" - Запускает сервер JSON (npm run server) и приложение в режиме разработки (npm start).

- "start"- Запускает приложение в режиме разработки с помощью webpack-dev-server.

- "build"- Собирает  приложение для продакшена с помощью webpack в режиме production.

- "server"- Запускает локальный сервер JSON с помощью json-server.

- "lint"- Запускает синтаксический анализатор ESLint для проверки  кода.

- "lint:fix"- Запускает ESLint с флагом --fix, чтобы автоматически исправить обнаруженные ошибки и предупреждения.

- "format"- Запускает Prettier для форматирования  кода.

- "check-format"- Запускает Prettier для проверки кода на соответствие стилю форматирования.

## Структура проекта

Описание структуры проекта и его основных компонентов.

```
├── src/                  # Исходный код проекта
│   ├── api/              # Модуль для работы с API
│   ├── assets/           # Глобальные статические файлы
│   ├── components/       # Компоненты React
│   ├── pages/            # Страницы React
│   ├── store/            # Глобальное хранилище Redux
│   ├── styles/           # Стили проекта
│   ├── utils/            # Вспомогательные утилиты
│   ├── App.jsx           # Главный компонент содержит маршрутизацию.
│   ├── index.html        # Корневой файл
│   └── index.jsx          # Точка входа в приложение
├── .babelrc              # Конфигурация Babel
├── .prettierrc           # Конфигурация Prettier
├── package.json          # Зависимости и скрипты проекта
├── README.md             # Документация проекта
└── webpack.config.js     # Конфигурация Webpack
```

## Использованные технологии

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Router DOM](https://reactrouter.com/web/guides/quick-start)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [JSON Server](https://github.com/typicode/json-server)
- [Yup](https://github.com/jquense/yup)
- [Sass](https://sass-lang.com/)
- [axios](https://axios-http.com/docs/intro)
- и другие (см. package.json для полного списка зависимостей)

