# factorial_example
[![cypress tests result](https://github.com/tapisky/factorial_example/actions/workflows/cypress.js.yml/badge.svg?)](https://github.com/tapisky/factorial_example/actions/workflows/cypress.js.yml/badge.svg?)

Cypress E2E test example

# Requirements
In order to run this test example, you need Cypress installed in your computer. Please follow the steps below if Cypress is not yet installed on your computer:

1. Install node.js and npm (https://nodejs.org/en/)
1. Install Cypress:
   ```
   npm install --save-dev cypress
   ```

# Running the test from CLI
Once you have cloned this repo, navigate to it in the CLI and type:
```
npx cypress run  --spec .\cypress\e2e\login\factorial.cy.js
```