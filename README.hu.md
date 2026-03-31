<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[English](README.md) | Magyar

# TeamLedger

A TeamLedger egy backend-fókuszú alkalmazás, amely a modern backend fejlesztést, a csapatszintű pénzügyi nyilvántartást és a kiforrott mérnöki gyakorlatokat mutatja be **NestJS** használatával.

A projekt egyszerre szolgál **tanulási játszótérként** és **portfólióban is megmutatható referencia-implementációként** skálázható backend rendszerekhez.

---

## 🚀 Projektcélok

- A **NestJS** gyakorlása valósághű domain környezetben
- Jól karbantartható és moduláris backend kódbázis építése
- **PostgreSQL**, **ORM-ek** és migrációk használata
- **Hitelesítés, jogosultságkezelés és szerepkörök** megvalósítása
- **Csapatszintű pénzügyi adatmodellezés** kipróbálása
- Olyan kódbázis előkészítése, amely alkalmas **senior szintű szakmai beszélgetésekhez**

---

## 🧠 Alapkoncepció

A **TeamLedger** lehetővé teszi, hogy csapatok átlátható és strukturált módon kövessék a közösen kezelt pénzügyi adatokat.

Példa felhasználási esetek:
- Közös kiadások követése egy csapaton vagy cégen belül
- Költségek hozzárendelése kategóriákhoz és felhasználókhoz
- Összesítések és egyenlegek készítése csapatonként vagy tagonként
- Auditálható pénzügyi nyilvántartás fenntartása

---

## 🏗️ Architektúra áttekintés

A projekt **moduláris és rétegzett architektúrát** követ:

```
src/
├── modules/
|   ├── health/
│   ├── auth/
│   ├── users/
│   ├── teams/
│   ├── ledger/
│   └── categories/
├── common/
│   ├── contracts/
│   ├── decorators/
│   ├── guards/
│   ├── interceptors/
│   ├── middleware/
│   └── filters/
├── config/
├── database/
└── main.ts
```

### Architektúrális alapelvek

- Felelősségi körök szétválasztása
- Egyértelmű modulfelelősségek
- DTO-alapú validáció
- Pragmatikus rétegzés
- Tesztelhetőség előtérben

---

## 🛠️ Technológiai stack

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- Docker & Docker Compose
- JWT Authentication
- class-validator & class-transformer

---

## 🔐 Hitelesítés és jogosultságkezelés

- JWT-alapú hitelesítés
- Szerepköralapú hozzáférés-kezelés (RBAC)
- Csapatszintű jogosultságok
- Guardok és egyedi dekorátorok

Példa szerepkörök:
- OWNER
- ADMIN
- MEMBER
- VIEWER

---

## 📊 Ledger funkciók

- Ledger bejegyzések létrehozása és kezelése
- Bejegyzések hozzárendelése csapatokhoz, felhasználókhoz és kategóriákhoz
- Bevétel- és kiadástípusú bejegyzések támogatása
- Aggregált nézetek:
  - Csapategyenleg
  - Felhasználói egyenleg
  - Kategóriaösszesítők

---

## 🧪 Tesztelési stratégia

- Unit tesztek a service-ekhez
- Integrációs tesztek a modulokhoz
- End-to-end tesztek a kritikus folyamatokhoz

Tervezett eszközök:
- Jest
- Supertest

---

## 🐳 Lokális fejlesztés

### Előfeltételek

- Node.js >= 18
- Docker & Docker Compose

### Projekt indítása

```bash
docker-compose up -d
npm install
npm run start:dev
```

Az API itt lesz elérhető:

```text
http://localhost:3000
```

### Fordítás és futtatás

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Tesztek futtatása

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

---

## 📁 Környezeti változók

Példa `.env` fájl:

```text
APP_PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/teamledger
JWT_SECRET=super-secret-key
JWT_EXPIRES_IN=3600
```

---

## 🗺️ Roadmap

- Többdevizás támogatás
- Havi és éves riportok
- Export CSV / PDF formátumba
- Eseményalapú egyenleg-újraszámítás
- Redis alapú cache-elés
- CQRS kísérletek
- Message broker integráció (RabbitMQ / Kafka)

---

## 📚 Tanulási fókusz

Ez a projekt tudatosan az alábbi területeket helyezi előtérbe:

- Strukturált NestJS modulfelépítés
- Backend skálázhatósági szemlélet
- Adatmodellezési kompromisszumok megértése
- Biztonságtudatos API-tervezés
- Kódtisztaság a rövidítések helyett

---

## 🤝 Hozzájárulás

Ez egy személyes tanulási és portfólióprojekt.
Ötletek, szakmai beszélgetések és refaktorálási javaslatok mindig szívesen jönnek.
Pull request nyitása előtt kérlek olvasd el a [CONTRIBUTING.md](CONTRIBUTING.md) fájlt.

---

## 📄 Licenc

MIT License
