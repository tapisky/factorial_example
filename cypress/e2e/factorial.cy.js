// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

const fact = function (x) {
  if (x < 0) {
    return NaN;
  }
  else if (x == 0) {
    return 1;
  }
  else {
    return x * fact(x - 1);
  }
}

describe('Check factorials in range (10,100)', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  var i;
  var j = 10;
  for (i = 10; i <= 100; i++) {
    it(`checks factorial of ${i}`, () => {
      cy.log(j);
      cy.get('input[id="number"]').should('be.visible').clear().type(j);
      cy.get('button[id="getFactorial"]').should('be.visible').click();
      cy.get('p[id="resultDiv"]')
        .should('be.visible')
        .and('have.text', `The factorial of ${j} is: ${fact(j)}`);
      j++;
    })
  }
})