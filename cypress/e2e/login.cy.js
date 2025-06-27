describe('Orange HRM Tests', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  });

  it('Login - Success', () => {
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')

    cy.contains('button', 'Login').click()

    cy.contains('h6', 'Dashboard')
      .should('be.visible')
  })

  it('Login - Fail', () => {
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('123')

    cy.contains('button', 'Login').click()

    cy.contains('p', 'Invalid credentials')
      .should('be.visible')
  });
})