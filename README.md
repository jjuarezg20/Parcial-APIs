# FreelanceHub API

A REST API for publishing and browsing freelance service listings, built with **NestJS**, **TypeORM** and **PostgreSQL**. It features JWT authentication, request validation, an auto-generated Swagger UI and a database seed for quick local testing.

> Academic project developed for the "API Design & Development" course, structured to production-style conventions.

## Problem it solves

Freelancers need a simple backend to publish the services they offer and let clients browse them. FreelanceHub exposes a small, well-defined REST API where authenticated freelancers can publish services and anyone can browse the public catalog.

## Main features

- JWT-based authentication (login endpoint issues a Bearer token).
- Protected endpoint to publish a new freelance service (token required).
- Public endpoint to list all available services (no authentication).
- Data validation with `class-validator` / `class-transformer` via a global `ValidationPipe`.
- Interactive API documentation with Swagger.
- Database seeding on startup with sample freelancer accounts.

## Tech stack

- **Runtime / framework:** Node.js, NestJS 10
- **Language:** TypeScript
- **ORM:** TypeORM 0.3
- **Database:** PostgreSQL 15
- **Auth:** `@nestjs/jwt`, Passport (`passport-jwt`)
- **Docs:** `@nestjs/swagger`
- **Containerization:** Docker Compose (PostgreSQL)

## Architecture overview

Modular NestJS architecture organized by feature:

```
src/
├── auth/        # Login, JWT strategy, guard and DTOs
├── users/       # User entity and users service
├── services/    # Service entity, controller, service and DTO
├── public/      # Public (unauthenticated) endpoints
├── seed/        # Seeds sample data on startup
├── app.module.ts
└── main.ts      # Bootstrap, ValidationPipe and Swagger setup
```

**Data model:** a `User` has many `Service` records (one-to-many); each `Service` belongs to a `User` (the provider).

## Getting started

### Prerequisites

- Node.js (18+ recommended)
- Docker (to run PostgreSQL) **or** a local PostgreSQL instance

### 1. Clone and install

```bash
git clone https://github.com/jjuarezg20/Parcial-APIs.git
cd Parcial-APIs
npm install
```

### 2. Environment variables

Copy the example file and adjust the values as needed:

```bash
cp .env.example .env
```

### 3. Start the database

```bash
docker compose up -d
```

This starts PostgreSQL 15 (database `freelancehub`) exposed on host port **5433**.

### 4. Run the API

```bash
npm run start:dev
```

- API: `http://localhost:3000`
- Swagger UI: `http://localhost:3000/api`

On startup, a seed creates a couple of sample freelancer accounts (fictional test data) so you can log in immediately. See `src/seed/` for the exact seeded values.

## Environment variables

| Variable     | Description                        |
| ------------ | ---------------------------------- |
| `DB_HOST`    | PostgreSQL host                    |
| `DB_PORT`    | PostgreSQL port                    |
| `DB_USER`    | PostgreSQL user                    |
| `DB_PASS`    | PostgreSQL password                |
| `DB_NAME`    | Database name                      |
| `JWT_SECRET` | Secret used to sign JWT tokens     |

## Available scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run start`     | Start the app                        |
| `npm run start:dev` | Start in watch mode                  |
| `npm run build`     | Compile to `dist/`                   |
| `npm run format`    | Format sources with Prettier         |

## Main endpoints

| Method | Path                | Auth   | Description                          |
| ------ | ------------------- | ------ | ------------------------------------ |
| `POST` | `/auth/login`       | No     | Log in and receive a JWT token       |
| `GET`  | `/public/services`  | No     | List all available services          |
| `POST` | `/services`         | Bearer | Publish a new freelance service      |

Example login request body:

```json
{ "email": "<your-email>", "password": "<your-password>" }
```

Use the returned token as `Authorization: Bearer <token>` to call `POST /services`.

## Running tests

> No automated test suite is currently included in this project. Adding unit/e2e tests with Jest is listed as a future improvement.

## Future improvements

- Hash user passwords with bcrypt instead of storing plain text.
- Move the JWT secret and DB credentials fully to environment variables.
- Add unit and e2e tests (Jest + Supertest).
- Add pagination and filtering to the public services endpoint.
- Add role management and service ownership checks.

## Author

**Juan Andrés Juárez Gómez** — Software Engineering student & junior full-stack developer.
GitHub: [@jjuarezg20](https://github.com/jjuarezg20)
