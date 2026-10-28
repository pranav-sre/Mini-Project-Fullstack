# Contributing & Branching Strategy

This project follows a structured branching model so that `main` always stays
production-ready.

## Branches

| Branch | Purpose | Rule |
|---|---|---|
| `main` | Final stable/submission version | Do not push directly |
| `dev` | Integration, testing, and team review | All feature PRs merge here first |
| `feature/*` | Individual member work | One branch per feature/task |
| `bugfix/*` | Individual bug fixes | Branch from `dev`, PR back into `dev` |
| `reports` | Bug/issue tracking log (`BUG_REPORT.md`) | Never merged into `main` |

## Team & Branch Assignments

| Member | Responsibility | Branch(es) |
|---|---|---|
| Pranav Tiwari (Team Lead / Repo Owner) | Repo setup, data schema, booking flow & event details, branch protection, final merge coordination | `feature/booking-flow`, `feature/event-details` |
| Pankaj | UI & design system | `feature/design-system` |
| Parv Jain | Home page & event browsing | `feature/home-page`, `feature/browse-events` |
| Pranjal Tiwari | Auth, user dashboard, admin panel | `feature/auth`, `feature/my-tickets`, `feature/admin-panel` |

## Workflow

1. **Start a feature:** always branch off the latest `dev`.
   ```
   git switch dev
   git pull origin dev
   git switch -c feature/your-feature-name
   ```
2. **Work and commit** in small, meaningful commits.
   ```
   git status
   git add .
   git commit -m "Describe the change"
   ```
3. **Push your branch.**
   ```
   git push -u origin feature/your-feature-name
   ```
4. **Open a pull request** on GitHub: base = `dev`, compare = your feature branch.
   Request at least one teammate to review before merging.
5. **If `dev` has moved on while you were working**, update your branch before the final PR:
   ```
   git switch dev
   git pull origin dev
   git switch feature/your-feature-name
   git merge dev
   ```
   Resolve any conflicts carefully, then commit and push.
6. Once `dev` has all features merged and tested end-to-end, open the **final pull request: `dev` → `main`**.

## Bug Reports

Found a bug during testing? Log it in `BUG_REPORT.md` on the `reports` branch,
then open a `bugfix/*` branch off `dev` to fix it.

## Team Rules

1. Never push directly to `main`.
2. All feature work uses `feature/*` branches.
3. Feature PRs always target `dev`, never `main`.
4. The only PR into `main` is the final `dev` → `main` PR.
5. Pull the latest `dev` before creating a new feature branch.
6. Use small, meaningful commits — not one giant "final project" commit.
7. At least one teammate reviews every PR before merge.
8. Never commit `.env` files, passwords, tokens, or API keys.
9. Don't force-push to shared branches without the whole team agreeing.
10. Talk to the team before changing shared files or the project structure.
