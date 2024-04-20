## Repository Overview

This repository is dedicated to practicing unit testing in JavaScript. It features unit tests for each function to validate functionality and correctness. Additionally, we prioritize code coverage analysis to assess the test coverage of our codebase.


### Functions Included:

- **Add Function:** Performs addition of two numbers.
- **Transform Function:** Converts a given string to uppercase.
- **Sort Numbers Function:** Sorts an array of numbers in ascending order.

### Boundary Testing:

The `isPriceInRange` function is designed to check if a given price falls within a specified range.

```javascript
export function isPriceInRange(price, min, max) {
  return price >= min && price <= max;
}
```

### Asynchronous Data Fetching:

An asynchronous `fetchData` function is provided to perform HTTP requests and retrieve data from a remote server. This function is suitable for testing to ensure it returns the expected data.

```javascript
export async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
}
```


### Code Coverage:

Code coverage, a vital aspect of unit testing quality, is emphasized in this repository. To check the percentage of code covered by unit tests, use the `--coverage` option in your test command. For example, in your `package.json` file:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test:coverage": "vitest --coverage"
}
```

