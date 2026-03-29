# Contributing to TeamLedger

Thanks for contributing to TeamLedger.

This project is a backend-focused NestJS codebase used for learning, experimentation, and portfolio-quality engineering practice. Contributions should keep the codebase small, readable, and easy to evolve.

## Working Principles

- Keep changes focused and easy to review.
- Prefer clear structure over clever shortcuts.
- Follow existing NestJS module boundaries and shared `common/` patterns.
- Update tests and documentation when behavior changes.

## Local Development

### Prerequisites

- Node.js 18 or newer
- Docker and Docker Compose

### Start the project

```bash
docker-compose up -d
npm install
npm run start:dev
```

### Quality checks

Run the relevant checks before opening a pull request:

```bash
npm run format:check
npm run lint
npm run test
npm run test:e2e
```

## Commit Message Convention

Conventional Commits are required for this project.

Use the following format:

```text
<type>(<scope>): <short summary>
```

Scope is recommended and should describe the area you changed, for example `health`, `common`, `docker`, or `docs`.

### Allowed types

- `feat`: a new feature
- `fix`: a bug fix
- `docs`: documentation-only changes
- `refactor`: internal code changes without behavior change
- `test`: adding or updating tests
- `chore`: maintenance tasks
- `build`: build system or dependency changes
- `ci`: CI or automation changes
- `perf`: performance improvements
- `style`: formatting or non-functional style updates
- `revert`: reverting a previous commit

### Rules

- Use lowercase for `type`, `scope`, and summary.
- Write the summary in imperative form, for example `add health endpoint`.
- Keep the summary short and specific.
- Do not end the summary with a period.
- Make one logical change per commit whenever possible.

### Examples

```text
feat(health): add readiness endpoint
fix(common): return request id in error responses
docs(readme): add local development notes
chore(docker): simplify dev container startup
test(health): cover status endpoint e2e flow
```

### Breaking changes

For breaking changes, use `!` after the type or scope and describe the impact in the footer:

```text
feat(api)!: rename health response fields

BREAKING CHANGE: health responses now use statusCode instead of code
```

## Pull Requests

Before submitting a pull request:

- make sure the branch is up to date with the target branch
- make sure linting and tests pass locally
- describe the purpose of the change clearly
- include any relevant screenshots or API examples when behavior changes
- call out breaking changes explicitly

## Documentation

If you add a new module, command, or workflow, update the relevant documentation in the same change when possible.
