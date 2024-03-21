// Import Vitest
import { test } from 'vitest';

// Import functions from script.js
import {
  createMessage,
  toggleAddContactContainer,
  // Import other functions as needed
} from './script.js';

// Define your tests using the test function
// Example:
test('createMessage function should create a new message with correct structure', () => {
  // Write your test code here
  // Example:
  const messageDiv = createMessage(true, 'Test message');
  // Assert the behavior of the createMessage function
  // Example:
  expect(messageDiv.classList.contains('self')).toBe(true);
  // Add more assertions as needed
});

// Add more tests as needed...

// Run tests
document.body.appendChild(test.report);

