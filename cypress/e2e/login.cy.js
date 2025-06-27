import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "input[placeholder='Username']",
    passwordField: "input[placeholder='Password']"
  }

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  });

  it('Login - Success', () => {
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)

    cy.contains('button', 'Login').click()

    cy.contains('h6', 'Dashboard')
      .should('be.visible')
  })

  it('Login - Fail', () => {
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)

    cy.contains('button', 'Login').click()

    cy.contains('p', 'Invalid credentials')
      .should('be.visible')
  });
})