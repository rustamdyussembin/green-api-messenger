# Green API Messenger

Небольшое SPA-приложение для отправки и получения сообщений через GREEN-API.

## Функциональность

- авторизация с помощью `idInstance` и `apiTokenInstance`;
- отправка текстовых сообщений;
- получение входящих сообщений;
- защищённый маршрут основного экрана.

## Стек

- React
- TypeScript
- Vite
- Effector
- React Router
- Mantine
- Feature-Sliced Design

## Локальный запуск

### Требования

Для запуска проекта необходимы:

- Node.js 24+
- Yarn

### Установка зависимостей

Клонируйте репозиторий:

```bash
git clone <repository-url>
```

Перейдите в директорию проекта:

```bash
cd green-api-messenger
```

Установите зависимости:

```bash
yarn install
```

### Запуск проекта

```bash
yarn dev
```

После запуска приложение будет доступно по адресу:

```text
http://localhost:5173
```

## Данные для авторизации

Для работы приложения необходимы:

- `idInstance`;
- `apiTokenInstance`.

Получить их можно в личном кабинете GREEN-API.

## Доступные команды

Запуск проекта в режиме разработки:

```bash
yarn dev
```

Проверка TypeScript:

```bash
yarn typecheck
```

Сборка production-версии:

```bash
yarn build
```

Локальный просмотр production-сборки:

```bash
yarn preview
```

## Архитектура

Проект организован в соответствии с методологией Feature-Sliced Design.

Основные слои:

```text
src/
├── app/
├── pages/
├── widgets/
├── features/
├── entities/
└── shared/
```

## Production

Собрать приложение:

```bash
yarn build
```

Результат сборки будет находиться в директории:

```text
dist/
```

## Demo

Демо-версия приложения:

[Открыть приложение](<demo-url>)