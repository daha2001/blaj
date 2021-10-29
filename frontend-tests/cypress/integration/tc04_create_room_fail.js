/// <reference types="cypress" />


// This is a test suite
describe('regression test suite', function(){

    // This is a test case
    it('create room fail', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Username:')

        // log in
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')

        // view button Rooms
        cy.get(':nth-child(1) > .btn').click()

        // Create Room
        cy.get(':nth-child(1) > .btn').click()

        //Save
        cy.get('.blue').click()
        cy.contains('Room number must be set')
        cy.contains('Floor must be set')
        cy.contains('Price must be a whole number')

    })
})
