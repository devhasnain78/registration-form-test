describe("Registration Form - Successful Registration", () => {
  it("should successfully submit the registration form with valid inputs", () => {
    // Navigate to the registration form
    cy.visit("/register");

    // Enter valid Full Name
    cy.get('input[name="fullName"]').type("John Doe");

    // Enter valid Email Address
    cy.get('input[name="email"]').type("johndoe@example.com");

    // Enter valid Password
    cy.get('input[name="password"]').type("Password123");

    // Enter matching Confirm Password
    cy.get('input[name="confirmPassword"]').type("Password123");

    // Enter valid Date of Birth
    cy.get('input[name="dob"]').type("1990-01-01");

    // Select Gender option
    cy.get('select[name="gender"]').select("Male");

    // Choose Yes for Newsletter Subscription
    cy.get('input[name="newsletter"][value="yes"]').check();

    // Click the Submit Button
    cy.get('button[type="submit"]').click();

    // Verify successful submission
    cy.url().should("include", "/success");
    cy.contains("Registration successful").should("be.visible");
  });
});
