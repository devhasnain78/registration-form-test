## Additional Information and Assumptions

### Additional Information

- The registration form URL is `/register`.
- The confirmation or success page URL contains `/success`.
- Success message text is "Registration successful".
- The form fields have the following name attributes:
  - Full Name: `fullName`
  - Email Address: `email`
  - Password: `password`
  - Confirm Password: `confirmPassword`
  - Date of Birth: `dob`
  - Gender: `gender`
  - Newsletter Subscription: `newsletter`
- The Submit Button has the type `submit`.

### Assumptions

- The registration form is available and accessible at all times during testing.
- The form's behavior, such as error message displays and redirection upon successful submission, is consistent across different browsers and devices.
- The database and server configurations are correctly set up to handle form submissions and data storage.
- Any email addresses used for testing do not conflict with existing user accounts in the database.
- Test data for negative scenarios, such as invalid email formats and mismatched passwords, will trigger the appropriate validation messages as specified.
