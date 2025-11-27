const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const heightVal = document.querySelector("#height").value;
    const weightVal = document.querySelector("#weight").value;

    const height = parseInt(heightVal);
    const weight = parseInt(weightVal);

    const results = document.querySelector("#results");

    if (heightVal === "" || isNaN(height) || height <= 0) {
        results.innerHTML = `Please provide a valid height!`;
    }
    else if (weightVal === "" || isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please provide a valid weight!`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
});
