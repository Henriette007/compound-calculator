# Compound Interest Calculator

A simple **Compound Interest Calculator** built using Node.js. This script prompts users for inputs such as initial investment, monthly contributions, years of investment, and interest rate, and then calculates the compound interest value along with the difference compared to regular contributions.

---

## Features

- Calculates the **final compound interest value** based on user inputs.
- Compares the compound interest result to the **regular contribution amount**.
- Provides a **financial summary** in a nicely formatted output.
- Fully interactive CLI using `prompt-sync` for user input.

---

## Formula Used

The formula behind compound interest calculations:
```text
Compound Interest = (Initial Amount + Annual Contributions) * (1 + Interest Rate / 100) ^ Years
```

---

## Project Structure

1. **Functions for Core Logic:**
    - `compundInterest(initAmount, monthlyContribution, numberOfYears, interestRate)`:
        - Calculates the final value using the compound interest formula.
    - `calculateRegularAmount(initAmount, monthlyContribution, numberOfYears)`:
        - Calculates the total value without compounding (simple multiplication).
    - `printOutput(initAmount, monthlyContribution, numberOfYears, interestRate)`:
        - Formats and prints a detailed financial summary.
2. **User Interaction:**
    - `run()`:
        - Prompts the user to input the required values for computation and then calls other functions to calculate and display results.

---

## Installation and Usage

### 1. Installation:
Make sure you have Node.js installed on your system. Clone this repository and navigate to the project directory.

Install dependencies:
```bash
npm install prompt-sync
```

### 2. Run the Calculator:
Execute the script:
```bash
node compoundInterest.js
```

### 3. Input:
The program will prompt you to enter:
- **Initial Investment**: The amount you initially invest in dollars.
- **Monthly Contribution**: The fixed monthly amount you plan to invest in dollars.
- **Number of Years**: The duration of your investment in years.
- **Interest Rate**: The annual interest rate in percentage.

### 4. Output:
The program will provide a detailed summary, including:
- The initial investment.
- The monthly contributions.
- The total value with and without compounding.
- The difference between the regular value and the compound value.

---

## Example

### Input:
What is your initial investment?() 20000 What is your monthly contribution?() 400 What is the number of years you invest for? 30 What is the interest rate(%) for your investment? 10

### Output:

Initial amount: 20000 Monthly Contribution: 400 Number of years: 30 Interest Rate: 10%
Final compound value = 1014421.94 Regular Value: 144000 The difference: $ 869421.94

---

## Dependencies

- **[prompt-sync](https://www.npmjs.com/package/prompt-sync)**: A package for CLI-based user input in Node.js applications.

---

## Future Enhancements

- Add support for **compounded monthly or quarterly intervals**.
- Include **visualizations** or charts for better financial insights.
- Add unit tests for core calculations using testing frameworks like Mocha.
