function calculate() {
    const binary1 = document.getElementById("binary1").value;
    const binary2 = document.getElementById("binary2").value;
    const operation = document.getElementById("operation").value;

    if (!binary1 || !binary2) {
        alert("Please enter both binary values.");
        return;
    }

    const decimal1 = parseInt(binary1, 2);
    const decimal2 = parseInt(binary2, 2);
    let result;

    switch (operation) {
        case "-":
            result = decimal1 - decimal2;
            break;
    }

    document.getElementById("result").innerHTML = `Result: ${result}`;
    showSolutionSteps(binary1, binary2, decimal1, decimal2, result);
}

// Function to show solution steps
function showSolutionSteps(binary1, binary2, decimal1, decimal2, result) {
    document.getElementById("solutionSteps").innerHTML = `
        <p><strong>Solution Steps:</strong></p>
        <p>Binary value: ${binary1} - ${binary2}</p>
        <p>Decimal value: ${decimal1} - ${decimal2} = ${result}</p>
    `;
}
