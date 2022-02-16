function getIncome() {
    return parseFloat(document.getElementById("income").value);
}

function getTotalExpense() {
    const foodCost = parseFloat(document.getElementById("food").value);
    const rentCost = parseFloat(document.getElementById("rent").value);
    const clothesCost = parseFloat(document.getElementById("clothes").value);

    const totalCost = foodCost + rentCost + clothesCost;

    return totalCost;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
    const income = getIncome();
    const totalExpense = getTotalExpense();


})