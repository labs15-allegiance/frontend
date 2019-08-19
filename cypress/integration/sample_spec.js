describe('Allegiance home page loads', function () {
    it('Visits our homepage', function () {
        cy.visit('https://labs15-allegiance.netlify.com/')
        cy.contains('Hi')
    })
})