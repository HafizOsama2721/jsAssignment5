let originalText = "I love my country Pakistan.<br />I like my city Faisalabad.<br />I love my Homeland."

let cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Burewala', 'Sheikhupura', 'Kashmir'];

document.getElementById("originalTextBox").innerHTML = originalText;

const showOutput = (output) => {
    document.getElementById("output").innerHTML = output;
}


const clearOutput = () => {
    document.getElementById("output").innerHTML = "";
}

const clearInput = () => {
    document.getElementById("inputText").value = "";
}

const inputValue = () => {
    return document.getElementById("inputText").value;
}

// Lowercase 

function lowerCase() {
    let lowerCaseText = originalText.toLowerCase();
    showOutput(lowerCaseText)
}

// Uppercase 

function upperCase() {
    let upperCaseText = originalText.toUpperCase();
    showOutput(upperCaseText)
}

// Capitalize 

function capitalize() {
    // let capitalizeText = '<span style="text-transform: capitalize;">' + originalText + '</span>';
    let capitalizeText = originalText;
    document.getElementById("output").style.textTransform = "capitalize";
    document.getElementById("output").innerHTML = capitalizeText;
    // showOutput(capitalizeText)
}

// Better Formatting 

function betterFormatting() {
    // let text = inputValue();
    let text = document.getElementById("inputText").value;
    text = text.toLowerCase();

    if(!text) {
        // toastityError('Please type your text.');
        alert('Please type your text.');
        return;
    }

    document.getElementById("output").style.textTransform = "capitalize";
    document.getElementById("output").innerHTML = text;
    // showOutput(text);
}

// Print All Cities 

function printAllCities() {

    clearOutput()

    for(let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("output").innerHTML += num + ') ' + cities[i] + '<br/>';
    }
}