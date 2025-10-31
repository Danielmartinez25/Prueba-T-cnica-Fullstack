# 🚀 Guía de Inicialización — Prueba Técnica Fullstack

Este proyecto está compuesto por un **backend (Node.js + Express + MongoDB)** y un **frontend (React + Vite + TypeScript)**, organizados en un monorepo con **npm workspaces**.

A continuación encontrarás **todos los pasos y comandos necesarios** para ejecutar el proyecto desde cero.

---

## 🧰 Requisitos previos

Antes de iniciar, asegurate de tener instalados:

- **Node.js 18 o superior**

  ```bash
  node -v

npm 8 o superior

npm -v

MongoDB en ejecución local (puerto por defecto 27017)

mongosh

Si abre la consola de Mongo, ya está funcionando correctamente.

## ⚙️ Instalación del proyecto

1️⃣ Clonar el repositorio

2️⃣ Instalar todas las dependencias
npm install

Esto instalará las dependencias del backend (apps/api) y del frontend (apps/web).

## 🧾 Configuración de entorno

Backend (apps/api/.env)

Crear el archivo .env dentro de apps/api (si no existe):

- MONGO_URL=mongodb://127.0.0.1:27017/empleados_db
- PORT=4000

Frontend (apps/web/.env)

Crear el archivo .env dentro de apps/web (si no existe):

- VITE_API_URL=<http://localhost:4000>

## 🧩 Comandos principales

🔹 1. Sembrar la base de datos (Seed)

Puebla la base con datos de ejemplo:

- npm run db:seed

Salida esperada:

MongoDB conectado
  
Seed OK

🔹 2. Levantar el backend y el frontend (modo desarrollo)

Ejecuta ambos proyectos en paralelo:

- npm run dev

Esto abrirá:

API (Backend): <http://localhost:4000>

Web (Frontend): <http://localhost:5173>
