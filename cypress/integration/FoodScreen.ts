describe('FoodScreen', () => {
  it('loads default foods', () => {
    cy.visit('/')

    cy.contains('Foods')

    cy.contains('Egusi')

    cy.contains('Okro')

    cy.contains('Efo')

    cy.contains('Ogbono')

    cy.contains('Edi kai kong')

    cy.contains('Banga Soup')

    cy.contains('Ewedu and Gbegiri')
  })

  it('contains Culture and Music links in Drawer', () => {
    cy.visit('/')

    cy.get('a').contains('Culture')

    cy.get('a').contains('Music')
  })

  it('can navigate to Music and Culture screens', () => {
    cy.visit('/')

    cy.get('a').contains('Music').click({ force: true })
    
    cy.get('a').contains('Culture').click({ force: true })
  })
})
