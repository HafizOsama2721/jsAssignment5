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
        toastifyError('Please type your text.');
        // alert('Please type your text.');
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

// Add city into the list 

function addCity() {

    // let city = inputValue();
    let city = document.getElementById("inputText").value;

    if(!city) {
        toastifyError("Please type your city name.");
        // alert("Please type your city name.");
        return;
    }

    // cityFirstLetter = city.slice(0,1).toUpperCase();
    cityFirstLetter = city.charAt(0).toUpperCase();
    cityAllLetters = city.slice(1).toLowerCase();

    cityWordInCapitalize = cityFirstLetter + cityAllLetters;

    let cityFound = false;

    for(let i = 0; i < cities.length; i++) {

        if(cities[i] === cityWordInCapitalize) {

            cityFound = true;
            let html = '<span style="color: red; font-size: 20px;">"' + cityWordInCapitalize + '"</span> is already in list.';
            showOutput(html)
        }
    }

    if(cityFound === false) {
        cities.push(cityWordInCapitalize);
        let html = '<span style="color: green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> has been successfully added into the list.';
        showOutput(html)
    }
}

// Check city in the list 

function checkCity() {

    let city = inputValue();

    if(!city) {
        toastifyError("Please type your city name.");
        // alert("Please type your city name.");
        return;
    }

    // cityFirstLetter = city.slice(0,1).toUpperCase();
    cityFirstLetter = city.charAt(0).toUpperCase();
    cityAllLetters = city.slice(1).toLowerCase();

    cityWordInCapitalize = cityFirstLetter + cityAllLetters;

    let cityFound = false;

    for(let i = 0; i < cities.length; i++) {

        if(cities[i] === cityWordInCapitalize) {


        cityFound = true;
        let html = '<span style="color: green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> found in the list. &#128151;';
        showOutput(html)
        
        }
    }

    if(cityFound === false) {
        cities.push(cityWordInCapitalize);
        let html = 'SORRY &#128524; We couldn\'t find your city <span style="color: red; font-size: 24px;">"' + cityWordInCapitalize + '"</span> in list.<br/>Click <span style="color: green; font-size: 16px;">"Add Your City In List"</span> to add your city &#128522;';
        showOutput(html)
    }

}

// Find word in the originalText 

function findWord() {

    let newOriginalText = originalText.toLowerCase();

    let word = inputValue();

    if(!word) {
        toastifyError("Please type a word for find.");
        // alert("Please type a word for find.");
        return;
    }

    word = word.toLowerCase();
    
    let findWord = newOriginalText.indexOf(word);

    if(findWord !== -1) {
        let html = 'Your word <span style="color: green; font-size: 18px">"' + word + '"</span> found at index: ' + findWord;
        showOutput(html)
    }
    else {

        let html = 'Your word <span style="color: red; font-size: 18px">"' + word + '"</span> does not exist in the Original String';
        showOutput(html)
    }
}

// Replace words in the original text

function replaceWord() {

    let newOriginalText = originalText.toLowerCase();

    let word = inputValue();

    if(!word) {
        toastifyError('Please type a word for replacing.');
        // alert('Please type a word for replacing.');
        return;
    }

    let replaceWith = prompt('Enter a word that you want to replace with');

    if(!replaceWith) {
        alert('Please type a word to replace it with ' + word + ".");
        return;
    }

    word = word.toLowerCase();

    word = new RegExp(word, 'g');

    replaceWith = replaceWith.toLowerCase();

    let replaceWord = newOriginalText.replace(word, replaceWith);

    showOutput(replaceWord)
}

// Toastify Custom Functions
const toastifySuccess = (msg) => {
Toastify({
  text: msg,
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){} // Callback after click
}).showToast();
}


const toastifyError = (msg) => {
Toastify({
  text: msg,
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){} // Callback after click
}).showToast();
}