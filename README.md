# TeamLedger

TeamLedger is a backend-focused application designed to explore modern backend architecture, team-based financial tracking, and enterprise-grade development practices using **NestJS**.

The project serves both as a **learning playground** and a **portfolio-ready reference implementation** for scalable backend systems.

---

## 🚀 Project Goals

- Practice **NestJS** in a real-world–like domain
- Apply **clean architecture** and **DDD-inspired** patterns
- Work with **PostgreSQL**, **ORMs**, and migrations
- Implement **authentication, authorization, and role management**
- Explore **team-based financial data modeling**
- Prepare a codebase suitable for **senior-level discussions**

---

## 🧠 Core Concept

**TeamLedger** allows teams to track shared financial data in a transparent and structured way.

Example use cases:
- Track shared expenses within a team or company
- Assign costs to categories and users
- Generate summaries and balances per team or member
- Maintain audit-friendly financial records

---

## 🏗️ Architecture Overview

The project follows a **modular and layered architecture**:

```
src/
├── modules/
│   ├── auth/
│   ├── users/
│   ├── teams/
│   ├── ledger/
│   └── categories/
├── common/
│   ├── decorators/
│   ├── guards/
│   ├── interceptors/
│   └── filters/
├── config/
├── database/
└── main.ts
```

### Architectural Principles

- Separation of concerns
- Dependency inversion
- DTO-driven validation
- Explicit domain boundaries
- Testability first

---

## 🛠️ Tech Stack

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- Docker & Docker Compose
- JWT Authentication
- class-validator & class-transformer

---

## 🔐 Authentication & Authorization

- JWT-based authentication
- Role-based access control (RBAC)
- Team-level permissions
- Guards and custom decorators

Example roles:
- OWNER
- ADMIN
- MEMBER
- VIEWER

---

## 📊 Ledger Features

- Create and manage ledger entries
- Assign entries to teams, users, and categories
- Support for income and expense entries
- Aggregated views:
  - Team balance
  - User balance
  - Category summaries

---

## 🧪 Testing Strategy

- Unit tests for services
- Integration tests for modules
- End-to-end tests for critical flows

Planned tools:
- Jest
- Supertest

---

## 🐳 Local Development

### Prerequisites

- Node.js >= 18
- Docker & Docker Compose

### Start the project

```
docker-compose up -d
npm install
npm run start:dev
```

The API will be available at:

```
http://localhost:3000
```

---

## 📁 Environment Variables

Example `.env` file:

```
APP_PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/teamledger
JWT_SECRET=super-secret-key
JWT_EXPIRES_IN=3600
```

---

## 🗺️ Roadmap

- Multi-currency support
- Monthly and yearly reports
- Export to CSV / PDF
- Event-based balance recalculation
- Caching with Redis
- CQRS experimentation
- Message broker integration (RabbitMQ / Kafka)

---

## 📚 Learning Focus

This project intentionally emphasizes:

- Clean NestJS module design
- Backend scalability thinking
- Database modeling trade-offs
- Security-conscious API design
- Code clarity over shortcuts

---

## 🤝 Contribution

This is a personal learning and portfolio project.
Suggestions, discussions, and refactoring ideas are always welcome.

---

## 📄 License

MIT License
