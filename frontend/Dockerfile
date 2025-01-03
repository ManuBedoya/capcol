# Etapa 1: Construcción
FROM node:18 AS build
WORKDIR /frontend
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servir archivos estáticos
FROM node:18
WORKDIR /frontend
RUN npm install -g serve
COPY --from=build /frontend/build ./build
CMD ["serve", "-s", "build", "-l", "3000"]
