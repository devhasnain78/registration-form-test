## Scenario Identification

### Positive Scenarios

#### Scenario 1: Successful Registration

**Steps:**

1. User navigates to the registration form.
2. User enters a valid Full Name.
3. User enters a valid Email Address.
4. User enters a valid Password (at least 8 characters).
5. User enters the same value in the Confirm Password field.
6. User enters a valid Date of Birth.
7. User selects a Gender option.
8. User chooses either Yes or No for the Newsletter Subscription.
9. User clicks the Submit Button.

**Expected Outcome:**

- The form is successfully submitted.
- The user is redirected to a confirmation or success page.
- A success message is displayed confirming the registration.
- The data is correctly saved in the database.

#### Scenario 2: Opting Out of Newsletter Subscription

**Steps:**

1. User navigates to the registration form.
2. User enters a valid Full Name.
3. User enters a valid Email Address.
4. User enters a valid Password (at least 8 characters).
5. User enters the same value in the Confirm Password field.
6. User enters a valid Date of Birth.
7. User selects a Gender option.
8. User chooses "No" for the Newsletter Subscription.
9. User clicks the Submit Button.

**Expected Outcome:**

- The form is successfully submitted.
- The user is redirected to a confirmation or success page.
- A success message is displayed confirming the registration.
- The data, including the preference not to receive the newsletter, is correctly saved in the database.

### Negative Scenarios

#### Scenario 1: Invalid Email Address Format

**Steps:**

1. User navigates to the registration form.
2. User enters a valid Full Name.
3. User enters an invalid Email Address (e.g., "user@domain").
4. User enters a valid Password (at least 8 characters).
5. User enters the same value in the Confirm Password field.
6. User enters a valid Date of Birth.
7. User selects a Gender option.
8. User chooses either Yes or No for the Newsletter Subscription.
9. User clicks the Submit Button.

**Expected Outcome:**

- An error message is displayed indicating that the email address format is invalid.
- The form is not submitted.
- The Email Address field is highlighted for correction, and the user is prompted to enter a valid email address.

#### Scenario 2: Password and Confirm Password Mismatch

**Steps:**

1. User navigates to the registration form.
2. User enters a valid Full Name.
3. User enters a valid Email Address.
4. User enters a valid Password (at least 8 characters).
5. User enters a different value in the Confirm Password field.
6. User enters a valid Date of Birth.
7. User selects a Gender option.
8. User chooses either Yes or No for the Newsletter Subscription.
9. User clicks the Submit Button.

**Expected Outcome:**

- An error message is displayed indicating that the passwords do not match.
- The form is not submitted.
- The Confirm Password field is highlighted for correction, and the user is prompted to ensure that both password fields match.
