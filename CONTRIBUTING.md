# Contributing & Branching Strategy

This project follows a structured branching model so that `main` always stays
production-ready.

## Branches

| Branch | Purpose |
|---|---|
| `main` | Production. Only receives merges from `develop` after review. Always deployable. |
| `develop` | Integration branch. All completed features land here first and are tested together before going to `main`. |
| `feature/*` | One branch per feature or page, created from `develop`. Merged back into `develop` via pull request. |
| `bugfix/*` | One branch per bug fix, created from `develop`. Merged back into `develop` via pull request. |
| `reports` | Holds test reports and the bug/issue log (`BUG_REPORT.md`). Not merged into `main`; kept as a running record of QA activity. |

## Workflow

1. **Start a feature:** branch off `develop`.
   ```
   git checkout develop
   git pull
   git checkout -b feature/your-feature-name
   ```
2. **Work and commit** on your feature branch, then push it.
   ```
   git push -u origin feature/your-feature-name
   ```
3. **Open a pull request** on GitHub: base = `develop`, compare = your feature branch.
4. **Get it reviewed** by at least one other team member before merging.
5. Once `develop` is stable and tested, open a pull request **from `develop` into `main`**
   for final review before release.

## Bug Reports

Found a bug during testing? Log it in `reports/BUG_REPORT.md` on the `reports`
branch, and open a `bugfix/*` branch off `develop` to fix it.

## Branch Naming

- `feature/home-page`
- `feature/design-system`
- `feature/booking-flow`
- `feature/auth`
- `feature/admin-panel`
- `bugfix/short-description`
