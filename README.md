# JavaScript Bank Account Balance Manager

This is a simple JavaScript program that simulates a bank account balance management system. The user can add or remove money from the account balance.

## Installation

No installation is required to run this program. It can be run directly in a JavaScript-enabled browser.

## Usage

1. Run the program in a JavaScript-enabled browser.
2. Enter the initial balance when prompted.
3. Choose an option from the menu:

- Enter "1" to add money to the balance.
- Enter "2" to remove money from the balance.
- Enter "3" to exit the program.

## How it Works

1. The program starts by prompting the user to enter an initial balance using the `prompt()` function. The entered value is stored in the `balance` variable. `The prompt()` function displays a dialog box that prompts the visitor for input

```javascript
let balance = prompt("Enter the amount of money: ");
```

2. The `balance` value is then converted to a floating point number using the `parseFloat()` function. This is done to ensure that the balance can handle decimal values

```javascript
balance = parseFloat(balance);
```

3. The program then enters a `do...while` loop. This loop will continue to prompt the user for an action until they choose to exit by entering "3"

```javascript
let option = "";

do {
  // code block
} while (option !== "3");
```

4. Inside the loop, the program displays a menu with three options: "Add money", "Remove money", and "Exit". The user's choice is stored in the `option` variable.

```javascript
option = prompt(
  "Available Balance: R$ " +
    balance +
    "\n1. Add money" +
    "\n2. Remove money" +
    "\n3. Exit"
);
```

5. The program then uses a `switch` statement to perform an action based on the user's choice

```javascript
switch (option) {
  case "1":
    balance += parseFloat(prompt("Enter the amount to be added"));
    break;
  case "2":
    balance -= parseFloat(prompt("Enter the amount to be removed"));
    break;
  case "3":
    alert("Exiting...");
    break;
  default:
    alert("Invalid Entry");
}
```

6. If the user chooses "1", the program prompts them to enter the amount to be added to the `balance`. This value is added to the current `balance`.
7. If the user chooses "2", the program prompts them to enter the amount to be removed from the `balance`. This value is subtracted from the current `balance`.
8. If the user chooses "3", the program displays an alert message saying "Exiting..." and breaks the loop, effectively ending the program.
9. If the user enters anything other than "1", "2", or "3", the program displays an `alert` message saying "Invalid Entry" and the loop continues, prompting the user to choose an option again.

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork this repository.
2. Create a branch with a descriptive name for your change.
3. Make your changes to the created branch.
4. Submit a pull request to the master branch of this repository.

---

## Contact

If you have any questions or suggestions, please contact me via my email or my GitHub profile.

---

## Thanks

This project was made possible thanks to the support and guidance of OneBitCode

---

## References

This project was inspired by a OneBitCode challenge
