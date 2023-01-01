describe('CultureScreen', () => {
  it('loads default cultures', () => {
    cy.visit('/')

    cy.get('a')
      .contains('Culture')
      .click({ force: true })

    cy.contains('Nationalites')

    cy.contains('Feelings')

    cy.contains('Colors')

    cy.contains('Body')

    cy.contains('Greetings')

    cy.contains('First words')
  })

  it('contains Food and Music links in Drawer', () => {
    cy.visit('/')

    cy.get('a')
      .contains('Food')

    cy.get('a')
      .contains('Music')
  })

  it('can navigate to Music and Food screens from Food screen', () => {
    cy.visit('/')

    cy.get('a')
      .contains('Music')
      .click({ force: true })

    cy.get('a')
      .contains('Food')
      .click({ force: true })
  })

  it('displays correct data when a culture is selected', () => {
    cy.get('a')
      .contains('Culture')
      .click({ force: true })

    cy.contains('Nationalites').click()
    cy.contains('American')
    cy.contains('Mumerika')
  })
})
