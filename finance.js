let balance = prompt("Enter the amount of money: ");
balance = parseFloat(balance);
let option = "";

do {
  option = prompt(
    "Available Balance: R$ " +
      balance +
      "\n1. Add money" +
      "\n2. Remove money" +
      "\n3. Exit"
  );

  switch (option) {
    case "1":
      balance += parseFloat(prompt("Enter the amount to be added"));
      break;
    case "2":
      balance -= prompt("Enter the amount to be removed");
      break;
    case "3":
      alert("Exiting...");
      break;
    default:
      alert("Invalid Entry");
  }
} while (option !== "3");
