// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

import { data } from "../fixtures/data.json"

describe('Check factorials in range (10,100)', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  data.forEach((element) => {
    it(`checks factorial of ${element["number"]}`, () => {
      cy.get('input[id="number"]').should('be.visible').clear().type(element["number"]);
      cy.get('button[id="getFactorial"]').should('be.visible').click();
      cy.get('p[id="resultDiv"]')
        .should('be.visible')
        .and('have.text', `The factorial of ${element["number"]} is: ${element["factorial"]}`);
    })
  })
})