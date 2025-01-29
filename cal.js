const resultField = document.getElementById("result");

// Append character to input field
function appendCharacter(char) {
    resultField.value += char;
}

// Clear input field
function clearDisplay() {
    resultField.value = "";
}

// Delete last character
function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if ("0123456789+-*/.%".includes(key)) {
        appendCharacter(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
