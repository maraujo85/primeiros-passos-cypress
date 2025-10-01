describe('Orange HRM Tests', () => {
  it('Login success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('[type="submit"]').click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })
  it('Login fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Teste')
    cy.get('[name="password"]').type('teste123')
    cy.get('[type="submit"]').click()
    cy.get('.oxd-alert-content')
  })

})