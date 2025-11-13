/**
 * LoginPage - Page Object Pattern
 * Encapsula los elementos y acciones de la página de login
 * para reutilización en múltiples tests
 */
class LoginPage {
  // Selectores de elementos
  selectors = {
    usernameInput: '[data-test="signin-username"]',
    passwordInput: '[data-test="signin-password"]',
    submitButton: '[data-test="signin-submit"]',
    rememberMeCheckbox: '[data-test="signin-remember-me"]',
    signUpLink: '[data-test="signup"]',
    errorMessage: '[data-test="signin-error"]',
    signInTitle: '[data-test="signin-title"]',
  };

  /**
   * Navega a la página de login
   */
  visit() {
    cy.visit("/signin");
    return this;
  }

  /**
   * Obtiene el campo de username
   */
  getUsernameInput() {
    return cy.get(this.selectors.usernameInput);
  }

  /**
   * Obtiene el campo de password
   */
  getPasswordInput() {
    return cy.get(this.selectors.passwordInput);
  }

  /**
   * Obtiene el botón de submit
   */
  getSubmitButton() {
    return cy.get(this.selectors.submitButton);
  }

  /**
   * Obtiene el checkbox de "Remember Me"
   */
  getRememberMeCheckbox() {
    return cy.get(this.selectors.rememberMeCheckbox);
  }

  /**
   * Obtiene el link de Sign Up
   */
  getSignUpLink() {
    return cy.get(this.selectors.signUpLink);
  }

  /**
   * Obtiene el mensaje de error
   */
  getErrorMessage() {
    return cy.get(this.selectors.errorMessage);
  }

  /**
   * Obtiene el título de la página
   */
  getSignInTitle() {
    return cy.get(this.selectors.signInTitle);
  }

  /**
   * Escribe el username
   * @param {string} username - Nombre de usuario
   */
  fillUsername(username) {
    this.getUsernameInput().clear().type(username);
    return this;
  }

  /**
   * Escribe el password
   * @param {string} password - Contraseña
   */
  fillPassword(password) {
    this.getPasswordInput().clear().type(password);
    return this;
  }

  /**
   * Hace clic en Remember Me
   */
  checkRememberMe() {
    this.getRememberMeCheckbox().check();
    return this;
  }

  /**
   * Desmarca Remember Me
   */
  uncheckRememberMe() {
    this.getRememberMeCheckbox().uncheck();
    return this;
  }

  /**
   * Hace clic en el botón de submit
   */
  submit() {
    this.getSubmitButton().click();
    return this;
  }

  /**
   * Método principal de login - Flujo completo
   * @param {string} username - Nombre de usuario
   * @param {string} password - Contraseña
   * @param {boolean} rememberMe - Si debe marcar "Remember Me"
   */
  login(username, password, rememberMe = false) {
    this.fillUsername(username);
    this.fillPassword(password);

    if (rememberMe) {
      this.checkRememberMe();
    }

    this.submit();
    return this;
  }

  /**
   * Verifica que el título de la página sea visible
   */
  verifySignInTitle() {
    this.getSignInTitle().should("be.visible").and("contain", "Sign In");
    return this;
  }

  /**
   * Verifica que hay un mensaje de error
   * @param {string} message - Mensaje de error esperado (opcional)
   */
  verifyErrorMessage(message = null) {
    if (message) {
      this.getErrorMessage().should("be.visible").and("contain", message);
    } else {
      this.getErrorMessage().should("be.visible");
    }
    return this;
  }

  /**
   * Verifica que el login fue exitoso (redirige a home)
   */
  verifyLoginSuccess() {
    cy.location("pathname").should("equal", "/");
    return this;
  }

  /**
   * Hace clic en el link de Sign Up
   */
  clickSignUp() {
    this.getSignUpLink().click();
    return this;
  }

  /**
   * Verifica que la página de login esté completamente cargada
   */
  verifyPageLoaded() {
    this.verifySignInTitle();
    this.getUsernameInput().should("be.visible");
    this.getPasswordInput().should("be.visible");
    this.getSubmitButton().should("be.visible");
    return this;
  }
}

export default LoginPage;
