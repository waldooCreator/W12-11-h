/**
 * Custom E2E Test - User Login and Transaction Flow
 * Demuestra el uso de Page Object Pattern y un flujo completo de usuario
 */
import { LoginPage } from "../../pages";
import { User } from "../../../src/models";

describe("Custom Flow - Login and Transaction Verification", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    // Resetear la base de datos antes de cada test
    cy.task("db:seed");
  });

  it("should login with valid credentials using Page Object", () => {
    cy.database("find", "users").then((user: User) => {
      // Usar el Page Object para navegar y hacer login
      loginPage
        .visit()
        .verifyPageLoaded()
        .login(user.username, "s3cret", true)
        .verifyLoginSuccess();

      // Verificar que estamos en la página principal
      cy.getBySel("transaction-list").should("be.visible");
    });
  });

  it("should show error message with invalid credentials", () => {
    // Test de credenciales inválidas
    loginPage
      .visit()
      .verifyPageLoaded()
      .login("invalid_user", "wrong_password")
      .verifyErrorMessage("Username or password is invalid");
  });

  it("should complete full user flow: login, view transactions, and logout", () => {
    cy.database("find", "users").then((user: User) => {
      // Paso 1: Login usando Page Object
      loginPage.visit().login(user.username, "s3cret", true);

      // Paso 2: Verificar que cargó la lista de transacciones
      cy.getBySel("transaction-list").should("be.visible");
      cy.getBySel("list-skeleton").should("not.exist");

      // Paso 3: Verificar que hay notificaciones
      cy.getBySel("nav-top-notifications-count").should("exist");

      // Paso 4: Navegar a la página de transacciones personales
      cy.getBySel("nav-personal-tab").click();
      cy.location("pathname").should("include", "/personal");

      // Paso 5: Verificar que se cargaron las transacciones
      cy.getBySel("transaction-list").should("be.visible");

      // Paso 6: Navegar a la cuenta del usuario
      cy.getBySel("sidenav-user-settings").click();
      cy.location("pathname").should("include", "/user/settings");

      // Paso 7: Verificar que se muestra la información del usuario
      cy.getBySel("user-settings-form").should("be.visible");
      cy.get('[data-test="user-settings-firstName-input"]').should("have.value", user.firstName);
      cy.get('[data-test="user-settings-lastName-input"]').should("have.value", user.lastName);

      // Paso 8: Logout
      cy.getBySel("sidenav-signout").click();
      cy.location("pathname").should("eq", "/signin");

      // Paso 9: Verificar que estamos de vuelta en login
      loginPage.verifyPageLoaded();
    });
  });

  it("should navigate to sign up page from login page", () => {
    loginPage.visit().verifyPageLoaded().clickSignUp();

    // Verificar que navegamos a la página de registro
    cy.location("pathname").should("eq", "/signup");
    cy.getBySel("signup-title").should("be.visible").and("contain", "Sign Up");
  });

  it("should persist session with Remember Me", () => {
    cy.database("find", "users").then((user: User) => {
      // Login con Remember Me activado
      loginPage.visit().login(user.username, "s3cret", true);

      // Verificar que existe la cookie de sesión
      cy.getCookie("connect.sid").should("exist");
      cy.getCookie("connect.sid").should("have.property", "expiry");

      // Verificar que estamos logueados
      cy.getBySel("transaction-list").should("be.visible");
    });
  });

  it("should redirect unauthenticated user to signin", () => {
    // Intentar acceder a una página protegida sin autenticación
    cy.visit("/personal");

    // Debe redirigir a login
    cy.location("pathname").should("equal", "/signin");
    loginPage.verifyPageLoaded();
  });

  it("should allow checking and unchecking Remember Me", () => {
    loginPage.visit().verifyPageLoaded();

    // Verificar que el checkbox existe
    loginPage.getRememberMeCheckbox().should("exist");

    // Marcar Remember Me
    loginPage.checkRememberMe();
    loginPage.getRememberMeCheckbox().should("be.checked");

    // Desmarcar Remember Me
    loginPage.uncheckRememberMe();
    loginPage.getRememberMeCheckbox().should("not.be.checked");
  });
});
