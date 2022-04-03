describe('FavoriteFoodScreen', () => {
    it('loads default favourite food screen', () => {
        cy.visit('/')
    
        cy.get('a')
            .contains('My Favorites')
            .click({ force: true })

        cy.contains(`You don't have a favorite food yet!`)
    })
  
    it('contains added favorite foods', () => {
      cy.visit('/')
  
      cy.contains('Ewedu and Gbegiri').click()

      cy.get('.r-userSelect-lrvibr').within(() => {
        cy.get('.css-text-901oao').click({ force: true, multiple: true })
      })

      cy.contains('My Favorites').click()

      cy.contains('Ewedu and Gbegiri')
    })
})