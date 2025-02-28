function calculateBMI() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        let category = "";

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        document.getElementById('result').innerHTML = `Your BMI: <strong>${bmi}</strong> (${category})`;
    } else {
        document.getElementById('result').innerHTML = "Please enter valid height and weight.";
    }
}
