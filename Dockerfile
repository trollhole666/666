
FROM node:18-alpine as frontend

WORKDIR /app
COPY backend ./backend
WORKDIR /app/backend
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
