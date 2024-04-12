/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
  })
  it('fails with timeout as expected', () => {
    cy.visit('https://example.cypress.io')
    cy.get('#this-should-fail', { timeout: 5000 })
  })
  it('never fails but hangs forever', () => {
    cy.visit('https://example.cypress.io')
    cy.get('#this-should-fail', { timeout: {} })
  })
})
