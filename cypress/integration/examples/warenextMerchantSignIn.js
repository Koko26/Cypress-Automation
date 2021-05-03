/// <reference types= "cypress" />
describe(' Regression TestSuite', function()
{
it('Validate that Merchant can login to Warenext successfully', function() {
//Opens the Warenext url
cy.visit('https://app-dev.warenext.ng/login')
//Inputs Warenext username
cy.get('[name="username"]').type('merchant@test.com')
//Inputs Warenext password
cy.get('[style="position: relative; width: 100%;"] > .input').type('test1234')
//Clicks the Log in button
cy.get('.sc-emmjRN').click()



//Assertions for Warenext Login Acceptance Criteria:
if(
  //Dashboard 
  cy.get(':nth-child(1) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible'),
  //Warehouse
  cy.get('.sc-kEYyzF > a > .sc-iAyFgw > .eLiVQB').should('be.visible'),
  cy.get(':nth-child(2) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible'),
  //Shipments 
  cy.get(':nth-child(3) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible'),
  //Saved Orders 
  cy.get(':nth-child(4) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('be.visible')
)
{
  cy.log('Test passed')
} 
else {
  cy.log('Test failed')
}

})

}) 