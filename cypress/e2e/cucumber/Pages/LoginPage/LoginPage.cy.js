class LoginPage {
    enterURL() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   }
    enterUserNamePassword(username, password) {
     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
     return this;
   }
    clickSubmitButton() {
     cy.get('[type="submit"]').eq(0).click();
     return this;
   }
    verifyPageTitle() {
     return cy.title().should("eq", "OrangeHRM");
   }
 }
 const login = new LoginPage();
 export default login;