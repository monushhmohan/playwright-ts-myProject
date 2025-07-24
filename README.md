# Playwright-TS-MyProject

Automated UI tests for [the-internet.herokuapp.com](https://the-internet.herokuapp.com) using [Playwright](https://playwright.dev/) with TypeScript.

## 🚀 Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js
- Jest-style test runner (via Playwright Test)
- VS Code (recommended)

## 📁 Project Structure

playwright-ts-myproject/
├── .github
├── node_modules
├── playwright-report
├── test-results
├── tests/ # All test cases
│ ├── basicAuth.spec.ts
│ ├── dropdown.spec.ts
│ └── dragdrop.spec.ts
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
└── README.md

## ✅ Setup Instructions

- git clone https://github.com/your-username/playwright-ts-myproject.git
- cd playwright-ts-myproject
- npm install
- npx playwright test
- npx playwright test --ui
- npx playwright test --debug
- npx playwright codegen https://the-internet.herokuapp.com

## To integrate into CI/CD:

- Use GitHub Actions, Jenkins, or Azure Pipelines
- Add cache for node_modules
- Run npx playwright install before tests
