 // JavaScript code with intentional errors
function addNumbers(num1, num2) {
    return num1 + num2;
}

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

document.getElementById("addButton").addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Result: Please provide valid numbers!";
        return;
    }
    const result = addNumbers(num1, num2);
    document.getElementById("result").textContent = "Result: " + result;
});

document.getElementById("subtractButton").addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Result: Please provide valid numbers!";
        return;
    }
    const result = subtractNumbers(num1, num2);
    document.getElementById("result").textContent = "Result: " + result;
});