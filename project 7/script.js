function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

    const bmi = weight / (height * height);
    const resultElement = document.getElementById('result');

    resultElement.textContent = 'Your BMI is: ${bmi.toFixed(2)}';
}