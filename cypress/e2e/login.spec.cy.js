describe('Orange HRM Tests', () => {

  const selectorList = {
    userNameField: "[name = 'username']",
    passwordField: "[name = 'password']",
    loginButton: "[type = 'submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    wrongCredentialAlert: '.oxd-alert-content'
  }
  it('Login success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.userNameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })
  it('Login fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.userNameField).type('Teste')
    cy.get(selectorList.passwordField).type('teste123')
    cy.get(selectorList.loginButton).click()
    cy.get('.oxd-alert')
  })

})