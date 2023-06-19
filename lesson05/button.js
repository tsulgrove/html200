function bankActions() {
    let balance = 0;
    while (true) {
        let command = prompt("What action would you like to perform?");
        switch (command) {
            case 'Q': {
                // Quits the program
                alert("Goodbye!");
                return;
            }
            case 'W': {
                // Withdraws money
                let amount = prompt("How much would you like to withdraw?");
                balance -= Number(amount);
                alert(amount + " has been withdrawn from the account.");
                break;
            }
            case 'D': {
                // Deposits money
                let amount = prompt("How much would you like to deposit?");
                balance += Number(amount);
                alert(amount + " has been deposited to the account.");
                break;
            }
            case 'B': {
                // Gives out the balance
                alert("The account balance is: " + balance);
                break;
            }
            default: {
                alert("Please give a valid command.");
                break;
            }
        }
    }
}