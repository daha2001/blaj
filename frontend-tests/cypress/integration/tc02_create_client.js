/// <reference types="cypress" />


// This is a test suite
describe('regression test suite', function(){

    // This is a test case
    it('create client', function(){
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

        // enter create client
        cy.get('h2 > .btn').click()
        cy.contains('New Client')
        cy.get(':nth-child(1) > input').type('Test åäö')
        cy.get(':nth-child(2) > input').type('test@test.com')
        cy.get(':nth-child(3) > input').type('123')
        cy.get('.blue').click()
        cy.contains('Test åäö')
        
    })
})
