describe('FavoritePlaceScreen', () => {
    it('loads default favourite place screen', () => {
        cy.visit('/')
    
        cy.get('a')
            .contains('My Favorites')
            .click({ force: true })
        
        cy.contains('Places')
            .click({ force: true })

        cy.contains(`You don't have a favorite place yet!`)
    })
})