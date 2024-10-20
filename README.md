<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager Backend</title>
</head>
<body>
    <h1>Task Manager Backend</h1>
    <p>Цей проект є бекендом для менеджера завдань, створеним за допомогою NestJS та TypeORM, що працює з PostgreSQL.</p>

    <h2>Вимоги</h2>
    <ul>
        <li><a href="https://nodejs.org/">Node.js</a> (версія 16 або вище)</li>
        <li><a href="https://www.postgresql.org/">PostgreSQL</a> (версія 12 або вище)</li>
    </ul>

    <h2>Кроки для запуску</h2>

    <h3>1. Клонування репозиторію</h3>
    <p>Склонуйте репозиторій на свій комп'ютер:</p>
    <pre><code>git clone &lt;URL_вашого_репозиторію&gt;
cd task-manager-backend
</code></pre>

    <h3>2. Встановлення залежностей</h3>
    <p>Встановіть всі необхідні залежності:</p>
    <pre><code>npm install</code></pre>
    <p>Або за допомогою Yarn:</p>
    <pre><code>yarn install</code></pre>

    <h3>3. Налаштування бази даних</h3>
    <ol>
        <li>Запустіть сервер PostgreSQL.</li>
        <li>Створіть нову базу даних:</li>
        <pre><code>CREATE DATABASE task_manager;</code></pre>
        <li>Переконайтеся, що користувач <code>admin</code> має права доступу до бази даних з паролем <code>123</code>. Змініть ці дані у файлі <code>app.module.ts</code>, якщо це необхідно.</li>
    </ol>

    <h3>4. Запуск проекту</h3>
    <p>Запустіть проект у режимі розробки:</p>
    <pre><code>npm run start:dev</code></pre>
    <p>Або за допомогою Yarn:</p>
    <pre><code>yarn start:dev</code></pre>
    <p>Сервер буде доступний за адресою <code>http://localhost:3001</code>.</p>

    <h3>5. Використання API</h3>
    <p>Ви можете використовувати API для управління завданнями:</p>
    <ul>
        <li><strong>GET /tasks</strong> - Отримати всі завдання</li>
        <li><strong>POST /tasks</strong> - Створити нове завдання</li>
        <li><strong>DELETE /tasks/:id</strong> - Видалити завдання за ID</li>
        <li><strong>PUT /tasks/:id</strong> - Оновити завдання за ID</li>
        <li><strong>GET /tasks/search?query=текст</strong> - Пошук завдань за назвою або описом</li>
    </ul>

    <h4>Приклад запиту на створення завдання</h4>
    <p>Використовуйте Postman або інший інструмент для тестування API, щоб надіслати POST-запит:</p>
    <p><strong>URL:</strong> <code>http://localhost:3001/tasks</code><br>
       <strong>Метод:</strong> <code>POST</code><br>
       <strong>Тіло запиту:</strong></p>
    <pre><code>{
  "title": "Завдання 1",
  "description": "Опис завдання 1",
  "isCompleted": false
}</code></pre>

    <h2>Тестування</h2>
    <p>Для запуску тестів у проекті використовуйте:</p>
    <pre><code>npm run test</code></pre>
    <p>Або за допомогою Yarn:</p>
    <pre><code>yarn test</code></pre>

    <h2>Форматування коду</h2>
    <p>Для форматування коду використовуйте команду:</p>
    <pre><code>npm run format</code></pre>
    <p>Або за допомогою Yarn:</p>
    <pre><code>yarn format</code></pre>

   
</body>
</html>
