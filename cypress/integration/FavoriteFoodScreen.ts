describe('FavoriteFoodScreen', () => {
    it('loads default favourite food screen', () => {
        cy.visit('/')
    
        cy.get('a').contains('My Favorites')
    })
  
    it('contains added favorite foods', () => {
      cy.visit('/')
  
      cy.contains('Ewedu and Gbegiri').click()

      cy.get('.css-text-901oao').click({ force: true })

      cy.contains('My Favorites').click()

      cy.contains('Ewedu and Gbegiri')
    })
})