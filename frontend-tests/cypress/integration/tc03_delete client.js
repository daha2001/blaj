/// <reference types="cypress" />


// This is a test suite
describe('regression test suite', function(){

    // This is a test case
    it('delete client', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Username:')

        // log in
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')

        // view button clients
        cy.get('.blocks > :nth-child(2) > .btn').click()

        // '...' and 'delete'
        cy.get(':nth-child(3) > .action').click()
        cy.get('.menu > :nth-child(2)').click()

    })
})
