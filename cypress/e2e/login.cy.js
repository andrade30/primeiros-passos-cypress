describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "input[placeholder='Username']",
    passwordField: "input[placeholder='Password']"
  }

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  });

  it('Login - Success', () => {
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')

    cy.contains('button', 'Login').click()

    cy.contains('h6', 'Dashboard')
      .should('be.visible')
  })

  it('Login - Fail', () => {
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('123')

    cy.contains('button', 'Login').click()

    cy.contains('p', 'Invalid credentials')
      .should('be.visible')
  });
})