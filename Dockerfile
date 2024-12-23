# For run

# docker build -t react-app .
# docker run -d -it --rm -p 3000:3000 react-app

# Базовий образ з Node.js 18
FROM node:18

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

# Копіюємо package.json і package-lock.json (якщо є)
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь проєкт у контейнер
COPY . .

# Експортуємо порт, на якому працює Nuxt
EXPOSE 3000

# Команда для запуску Nuxt у режимі розробки з доступом через мережу
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]