context('list of bike networks', () => {
  it('should have a list of bike networks', () => {
    cy.visit(Cypress.env('baseUrl'))

    cy.get('h1').contains(/city bike networks/i)

    cy.get('h6')
      .should('have.class', 'MuiTypography-root')
      .and('have.class', 'MuiTypography-subtitle1')
      .contains(/615 bicycle sharing networks worldwide/i)

    cy.get('a div span').as('networks-list')

    cy.get('@networks-list').should('have.length', 13)

    cy.get('@networks-list')
      .eq(0)
      .should('contain.text', 'Velobike')
    cy.get('p').as('networks-location')

    cy.get('@networks-location')
      .eq(0)
      .should('contain.text', 'Moscow, RU')

    cy.get('@networks-list')
      .eq(1)
      .click()
      .go('back')
  })
})
