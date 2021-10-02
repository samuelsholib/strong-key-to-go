var isNumbers;
var isSpecialCharacters;
var isUpperCase;
var isLowerCase;

character = ["!", "#", "$", "%", "&", "'"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
lowerCaseletters = ["a", "b", "c", "d", "e", "f"];
space = [];


var toUpper = function (x) {
    return x.toUpperCase();
};

convertedToUpperCase = lowerCaseletters.map(toUpper);

var generateButton = document.querySelector("#generate");

generateButton.addEventListener("click", function () {
    val = generatePassword();
    document.getElementById("password").placeholder = val;
});

function generatePassword() {
    var enteredValue = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    var chosenPreference;

    if (!enteredValue) {
        alert("This needs a value");
    } else if (enteredValue < 8 || enteredValue > 128) {
        enteredValue = parseInt(prompt("You must choose between 8 and 128"));
    } else {
        isNumbers = confirm("Would you like to use numbers?");
        isSpecialCharacters = confirm("Would you like special characters?");
        isUpperCase = confirm("Would you like to use upper case characters?");
        isLowerCase = confirm("Would you like to use lower case characters?");
    };

    if (!isSpecialCharacters && !isNumbers && !isUpperCase && !lowerCase) {
        chosenPreference = alert("You must choose a criteria!");
    }
    else if (isSpecialCharacters && isNumbers && isUpperCase && isLowerCase) {
        chosenPreference = character.concat(number, lowerCaseletters, convertedToUpperCase);
    }

    else if (isSpecialCharacters && isNumbers && isUpperCase) {
        chosenPreference = character.concat(number, convertedToUpperCase);
    }
    else if (isSpecialCharacters && isNumbers && isLowerCase) {
        chosenPreference = character.concat(number, lowerCaseletters);
    }
    else if (isSpecialCharacters && isLowerCase && isUpperCase) {
        chosenPreference = character.concat(lowerCaseletters, convertedToUpperCase);
    }
    else if (isNumbers && isLowerCase && isUpperCase) {
        chosenPreference = number.concat(lowerCaseletters, convertedToUpperCase);
    }
  
    else if (isSpecialCharacters && isNumbers) {
        chosenPreference = character.concat(number);

    } else if (isSpecialCharacters && isLowerCase) {
        chosenPreference = character.concat(convertedToUpperCase);

    } else if (isSpecialCharacters && isUpperCase) {
        chosenPreference = character.concat(convertedToUpperCase);
    }
    else if (lowerCase && isNumbers) {
        chosenPreference = lowerCaseletters.concat(number);

    } else if (isLowerCase && isUpperCase) {
        chosenPreference = lowerCaseletters.concat(convertedToUpperCase);

    } else if (nuisNumbersmbers && isUpperCase) {
        chosenPreference = number.concat(convertedToUpperCase);
    }

    else if (isSpecialCharacters) {
        chosenPreference = character;
    }
    else if (isNumbers) {
        chosenPreference = number;
    }
    else if (isLowerCase) {
        chosenPreference = lowerCaseletters;
    }

    else if (isUpperCase) {
        chosenPreference = space.concat(convertedToUpperCase);
    };

    var password = [];

    for (var i = 0; i < enteredValue; i++) {
        var generatedPasswordArray = chosenPreference[Math.floor(Math.random() * chosenPreference.length)];
        password.push(generatedPasswordArray);
    }

    var finalText = password.join("");
    finalPasswordToBeDisplayed(finalText);
    return finalText;
}

function finalPasswordToBeDisplayed(finalText) {
    document.getElementById("password").textContent = finalText;

}