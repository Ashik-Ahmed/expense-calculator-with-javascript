function getIncome() {
    const income = parseFloat(document.getElementById("income").value);
    if (income < 0 || isNaN(income)) {
        alert("Income Value should be only Positive Number");
    }
    else {
        return income;
    }
}


function getTotalExpense() {

    // getting the input values
    const foodCost = parseFloat(document.getElementById("food").value);
    const rentCost = parseFloat(document.getElementById("rent").value);
    const clothesCost = parseFloat(document.getElementById("clothes").value);

    // validating the expenses input value 
    if (foodCost < 0 || rentCost < 0 || clothesCost < 0 || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)) {
        alert("Expense Value should be only Positive Number");
    }
    else {

        // calculating total cost 
        const totalCost = foodCost + rentCost + clothesCost;

        return totalCost;
    }
}


function getBalance(income, expense) {
    return income - expense;
}

// calculate button click event 
document.getElementById("calculate-btn").addEventListener("click", function () {
    // getting income amount 
    const income = getIncome();
    // getting total cost 
    const totalExpense = getTotalExpense();

    // getting the balance 
    const balance = getBalance(income, totalExpense);

    // input validation
    if (isNaN(totalExpense) || isNaN(balance)) {

        // alert("Enter Valid Amount");

    }
    else {
        // expense cannot be more than income 
        if (income < totalExpense) {
            alert("Your income is Low")
        }
        else {
            // show the total cost and balance
            document.getElementById("total-expense").innerText = totalExpense;
            document.getElementById("balance").innerText = balance;
        }
    }
})

// save button click event 
document.getElementById("save-btn").addEventListener("click", function () {
    // getting saving percentage amount 
    const saveInput = parseFloat(document.getElementById("save").value);
    // getting income amount 
    const income = getIncome();

    if (saveInput < 0) {
        alert("Negative Savings value is not acceptable");

    }

    else {
        // calculate the saving amount 
        const saveAmount = (income * saveInput) / 100;

        // calculate new balance after deducting saving amount 
        const totalExpense = getTotalExpense();
        const previousBalance = getBalance(income, totalExpense);
        const newBalance = previousBalance - saveAmount;

        if (isNaN(saveInput) || isNaN(saveAmount) || isNaN(newBalance)) {
            alert("Enter Valid Saving Amount");
        }
        else if ((previousBalance == 0 && saveInput > 0) || newBalance < 0) {
            alert("Balance is Low");
        }

        else {
            // showing the new balance and saving amount
            document.getElementById("saving-amount").innerText = saveAmount;
            document.getElementById("remaining-balance").innerText = newBalance;
        }
    }
})