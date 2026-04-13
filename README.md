# PixelArt Monorepo

A modern Nx-based monorepo for a pixel art showcase application. This workspace combines a server-rendered Angular landing page with a Node-based backend API, all managed in a single repository for consistent development, testing, and deployment.

## Project Overview

PixelArt contains two main application projects:

- `apps/api` — backend API service built with Node.js and Express-compatible APIs.
- `apps/landing` — Angular landing site with server-side rendering (SSR).

These applications share the same Nx workspace and dependency graph, allowing fast builds, linting, and code sharing across the repository.

## Key Technologies

- Nx monorepo tooling
- Angular 21 for frontend and SSR rendering
- Node.js and Express-style backend
- TypeScript throughout the workspace
- Webpack for backend packaging
- MariaDB / MySQL-compatible database
- Docker and Docker Compose for production deployment
- VS Code Dev Containers for local development
- ESLint and Prettier for code quality

## Repository Structure

```
├── .devcontainer/                # Dev container configuration
├── .docker/                      # Production Docker Compose and Dockerfile
├── apps/
│   ├── api/                     # Backend API application
│   └── landing/                 # Angular landing application
├── environment/                 # Environment variable templates and configs
├── nx.json                      # Nx workspace configuration
├── package.json                 # Workspace dependencies
├── pnpm-lock.yaml               # pnpm lockfile
└── README.md                    # Project documentation
```

## Prerequisites

- Docker Desktop or Docker Engine
- Visual Studio Code with Remote - Containers or Dev Containers support
- pnpm package manager
- Optional: Node.js locally for non-container development

## Devcontainer Setup

The repository includes a `.devcontainer` configuration that launches both the application environment and a MariaDB database.

### Start the devcontainer

1. Open the repository in VS Code.
2. Use `Remote-Containers: Open Folder in Container...`.
3. Open the workspace root.
4. Wait for the container build and dependency install to complete.

The devcontainer uses:

- `.devcontainer/docker-compose.yml`
- `environment/.env.dev`
- `environment/.env.local`

### Ports forwarded by the devcontainer

- `4200` — landing frontend
- `3000` — API backend
- `3306` — database

### Run the local development stack

Inside the container, run:

```bash
pnpm exec nx serve landing
```

This command starts the landing application and the backend API dependency.

- Landing UI: `http://localhost:4200`
- API backend: `http://localhost:3000`

To run only the API service:

```bash
pnpm exec nx serve api
```

## Production Deployment with Docker

The production stack is defined in `.docker/docker-compose.prod.yml` and uses `.docker/Dockerfile.prod`.

### Build and run production containers

```bash
docker compose -f .docker/docker-compose.prod.yml up --build
```

### Production services

- `db` — MariaDB database
- `api` — backend API runtime
- `landing` — Angular landing runtime
- `nginx` — reverse proxy for frontend and backend traffic

### Access the running application

- Landing site via `http://localhost`

The production setup is configured to proxy traffic through Nginx and expose the frontend on standard HTTP ports.

## Environment Variables

Use `environment/.env.example` as a reference for available variables. The Docker Compose setup loads:

- `environment/.env.dev`
- `environment/.env.local`

Important variables include:

- `DB_HOST`
- `DB_PORT`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`
- `NODE_ENV`
- `PORT`
- `API_URL`

> Do not commit secrets or production credentials. Keep local overrides in `.env.local` and production values in a separate secure file.

## Common Commands

### Install dependencies

```bash
pnpm install
```

### Serve applications locally

```bash
pnpm exec nx serve landing
pnpm exec nx serve api
```

### Build production artifacts

```bash
pnpm exec nx build api --configuration=production
pnpm exec nx build landing --configuration=production
```

### Workspace commands

```bash
pnpm exec nx graph
pnpm exec nx lint
pnpm exec nx test
```

### Docker commands

```bash
docker compose -f .docker/docker-compose.prod.yml up --build
docker compose -f .docker/docker-compose.prod.yml down
```

## Contribution Guidelines

- Create a feature branch for each change.
- Keep commits small and descriptive.
- Run linting before committing:

```bash
pnpm exec nx lint
```

- Run tests for new functionality:

```bash
pnpm exec nx test
```

## Notes

- `apps/landing` is configured as a server-side rendered Angular application.
- `apps/api` is bundled for production using Webpack.
- The Nx workspace provides shared caching and task orchestration for both applications.

## Additional Resources

- Nx documentation: https://nx.dev
- Angular documentation: https://angular.io
- Docker documentation: https://docs.docker.com
