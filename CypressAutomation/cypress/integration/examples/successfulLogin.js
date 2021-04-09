/// <reference types= "cypress" />

describe(' Regression TestSuite', function()
{



it('Validate that user can login to Twitter successfully', function() {

 //Open the Twitter url
cy.visit('http://twitter.com')
  
  //Click login button
cy.get('[data-testid=loginButton] > .r-1awozwy').click()

cy.wait(2000)
//Input Twitter username16y2uox
cy.contains('Phone').type('Michael_eli_')

//Input Twitter password
cy.contains('Password').type('123456')

//Click login button
cy.contains('Login').click()

//Assertion for successful login
cy.get('.r-18kxxzh > .css-4rbku5 > .r-1twgtwe').should('be.visible')
})



})