/// <reference types="cypress" />


// This is a test suite
describe('regression test suite', function(){

    // This is a test case
    it('create and delete room', function(){
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
        cy.contains('New Room')

        // Choose category and select Twin
        cy.get('div.field:nth-child(1) > select:nth-child(2)').select(2)
        
        // Choose room number
        cy.get(':nth-child(2) > input').type('99')

        // Choose floor
        cy.get(':nth-child(3) > input').type('100')

        // click checkbox
        cy.get('.checkbox').click()

        // Choose price
        cy.get(':nth-child(5) > input').type('85000')

        // Choose feature
        cy.get('div.field:nth-child(6) > select:nth-child(2)').select([0,2])

        // Save
        cy.get('.blue').click()
        cy.contains('Floor 100, Room 99')

        // '...' and delete
        cy.get(':nth-child(2) > .action').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.contains('Floor 100, Room 99').should('not.exist')

    })
})
