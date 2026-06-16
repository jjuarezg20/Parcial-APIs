# FreelanceHub API

Plataforma de publicación de servicios freelance — Parcial Diseño y Desarrollo de APIs.

## Requisitos previos

- Node.js instalado
- PostgreSQL corriendo localmente
- Una base de datos llamada `freelancehub` creada

```sql
CREATE DATABASE freelancehub;
```

## Configuración de la base de datos

En `src/app.module.ts` cambia las credenciales si son diferentes:

```typescript
username: 'postgres',
password: 'postgres',
```

## Instalación y ejecución

```bash
npm install
npm run start:dev
```

El servidor queda en `http://localhost:3000`
Swagger disponible en `http://localhost:3000/api`

Al arrancar, el seed crea automáticamente 2 usuarios freelancers.

## Usuarios del seed

| Email               | Password | Nombre        |
|---------------------|----------|---------------|
| ana@freelance.com   | 123456   | Ana García    |
| luis@freelance.com  | 123456   | Luis Martínez |

## Endpoints

### POST /auth/login
Obtener token JWT.

```json
{
  "email": "ana@freelance.com",
  "password": "123456"
}
```

### GET /public/services
Ver todos los servicios. No requiere token.

### POST /services
Crear un servicio. Requiere token Bearer en el header Authorization.

```json
{
  "title": "Diseño de logo profesional",
  "category": "Diseño",
  "description": "Diseño de logotipos modernos con entrega en 3 días hábiles",
  "price": 50
}
```
