# Contributing to expo-sonner

Thank you for your interest in contributing! This guide will walk you through everything you need to get started — from forking the repo to submitting a pull request.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Making Changes](#making-changes)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Code Style](#code-style)
- [Reporting Issues](#reporting-issues)
- [Code of Conduct](#code-of-conduct)

---

## Getting Started

### 1. Fork the repository

Head to [https://github.com/nitishprajapati5/expo-sonnner](https://github.com/nitishprajapati5/expo-sonnner) and click the **Fork** button in the top-right corner. This creates a copy of the repository under your own GitHub account.

### 2. Clone your fork

```bash
git clone https://github.com/<your-username>/expo-sonnner.git
cd expo-sonnner
```

### 3. Add the upstream remote

This lets you pull in future changes from the original repository.

```bash
git remote add upstream https://github.com/nitishprajapati5/expo-sonnner.git
```

Verify your remotes:

```bash
git remote -v
# origin    https://github.com/<your-username>/expo-sonnner.git (fetch)
# upstream  https://github.com/nitishprajapati5/expo-sonnner.git (fetch)
```

### 4. Install dependencies

```bash
npm install
```

Then install example app dependencies:

```bash
cd example
npm install
cd ..
```

---

## Project Structure

```
expo-sonnner/
├── src/               # Library source code
├── example/           # Demo/example Expo app
├── README.md
├── CONTRIBUTING.md
└── package.json
```

---

## Development Workflow

### Run the example app

The best way to test your changes is to run the example app:

```bash
cd example
npm run web       # Run in browser
npm run android   # Run on Android emulator
npm run ios       # Run on iOS simulator
```

Changes you make in `src/` will be reflected in the example app.

### Keep your fork up to date

Before starting any new work, sync with the upstream repository to avoid conflicts:

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

---

## Making Changes

### 1. Create a new branch

Always work on a separate branch — never commit directly to `main`.

```bash
git checkout -b feat/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Branch naming conventions:

| Prefix | Use for |
|---|---|
| `feat/` | New features |
| `fix/` | Bug fixes |
| `docs/` | Documentation updates |
| `refactor/` | Code refactoring |
| `chore/` | Dependency updates, tooling |

### 2. Make your changes

Edit files in `src/`. Keep your changes focused — one feature or fix per pull request makes review much easier.

### 3. Test your changes

Run the example app and verify your changes work as expected across platforms (web, iOS, Android) if applicable.

### 4. Commit your changes

Write clear, descriptive commit messages:

```bash
git add .
git commit -m "feat: add swipe direction option to Toaster"
```

Commit message format:

```
<type>: <short description>

[optional body explaining the why, not the what]
```

Types: `feat`, `fix`, `docs`, `refactor`, `chore`, `test`

---

## Submitting a Pull Request

### 1. Push your branch

```bash
git push origin feat/your-feature-name
```

### 2. Open a Pull Request

Go to your fork on GitHub and click **"Compare & pull request"**. Set the base repository to `nitishprajapati5/expo-sonnner` and the base branch to `main`.

### 3. Fill out the PR description

Include:
- **What** changed and **why**
- Steps to test or reproduce
- Screenshots or screen recordings if the change is visual

### 4. Wait for review

A maintainer will review your PR. You may be asked to make changes — that's completely normal. Once approved, your PR will be merged.

---

## Code Style

- Use **TypeScript** for all source files.
- Keep components and functions small and focused.
- Avoid introducing new dependencies unless absolutely necessary — this is a lightweight library.
- Match the existing code style and formatting in the files you edit.

---

## Reporting Issues

Found a bug or have a feature request? [Open an issue](https://github.com/nitishprajapati5/expo-sonnner/issues) and include:

- A clear title and description
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Your environment: Expo SDK version, React Native version, platform (iOS/Android/Web)

---

## Code of Conduct

Be kind and respectful. This project welcomes contributors of all backgrounds and experience levels. Harassment or exclusionary behavior of any kind will not be tolerated.

---

If you have any questions, feel free to open a discussion or an issue. Happy contributing!