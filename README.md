# condo-platform

Sistema de Gestão de Condomínio — EVAS Lab  
MVP v0.1 | Angular + NestJS + MySQL

---

## Stack

| Camada | Tecnologia |
|--------|------------|
| Frontend | Angular 21 + Tailwind CSS |
| Backend | NestJS + TypeORM |
| Banco de dados | MySQL 8 |
| Controle de versão | Git + GitHub |

---

## Pré-requisitos

Antes de clonar o projeto, certifique-se de ter instalado:

- [Node.js v20+](https://nodejs.org)
- [NestJS CLI](https://docs.nestjs.com/cli/overview): `npm install -g @nestjs/cli`
- [Angular CLI](https://angular.io/cli): `npm install -g @angular/cli`
- [MySQL 8+](https://dev.mysql.com/downloads/installer)
- [Git](https://git-scm.com)

---

## Configuração do banco de dados

Após instalar o MySQL, abra o MySQL Workbench e execute:

```sql
CREATE DATABASE condo_db;
CREATE USER 'evas'@'localhost' IDENTIFIED BY 'sua_senha';
GRANT ALL PRIVILEGES ON condo_db.* TO 'evas'@'localhost';
FLUSH PRIVILEGES;
```

---

## Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/evas-lab/condo-platform.git
cd condo-platform
```

### 2. Configure o backend

```bash
cd api
npm install
```

Crie o arquivo `.env` dentro da pasta `api/` com base no `.env.example`:

```bash
cp .env.example .env
```

Edite o `.env` com suas credenciais:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=evas
DB_PASS=sua_senha
DB_NAME=condo_db
PORT=3000
```

Rode o backend:

```bash
npm run start:dev
```

A API estará disponível em: `http://localhost:3000`

### 3. Configure o frontend

Abra um novo terminal:

```bash
cd ui
npm install
ng serve
```

O frontend estará disponível em: `http://localhost:4200`

---

## Estrutura do projeto

```
condo-platform/
├── api/          # Backend NestJS
│   ├── src/
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── .env.example
└── ui/           # Frontend Angular + Tailwind
    └── src/
```

---

## Entidades do MVP

- **Unidade** — apartamento ou casa do condomínio
- **Morador** — morador vinculado a uma unidade
- **Ocorrência** — registro de problema com título, descrição, unidade e status

### Status de uma ocorrência

| Status | Descrição |
|--------|-----------|
| `aberta` | Ocorrência registrada pelo morador |
| `em andamento` | Administração tomou ciência |
| `resolvida` | Problema solucionado |

---

## Sprints

| Sprint | Período | Foco |
|--------|---------|------|
| Sprint 1 | 25/03 → 31/03 | Setup, entidades e CRUD |
| Sprint 2 | 01/04 → 07/04 | Frontend e integração |
| Sprint 3 | 07/04 → 14/04 | Testes e ajustes |

---

## Board

[ClickUp — MVP v0.1](https://app.clickup.com/90171061178/v/li/901712261950)

---

Desenvolvido pelo EVAS Lab 🌱
