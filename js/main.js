/*----- constants -----*/
const countries = {
    "AD": "Andorra",
    "AE": "United Arab Emirates",
    "AF": "Afghanistan",
    "AG": "Antigua and Barbuda",
    "AI": "Anguilla",
    "AL": "Albania",
    "AM": "Armenia",
    "AO": "Angola",
    "AQ": "Antarctica",
    "AR": "Argentina",
    "AS": "American Samoa",
    "AT": "Austria",
    "AU": "Australia",
    "AW": "Aruba",
    "AX": "Aland Islands",
    "AZ": "Azerbaijan",
    "BA": "Bosnia and Herzegovina",
    "BB": "Barbados",
    "BD": "Bangladesh",
    "BE": "Belgium",
    "BF": "Burkina Faso",
    "BG": "Bulgaria",
    "BH": "Bahrain",
    "BI": "Burundi",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BN": "Brunei",
    "BO": "Bolivia",
    "BR": "Brazil",
    "BS": "Bahamas",
    "BT": "Bhutan",
    "BV": "Bouvet Island",
    "BW": "Botswana",
    "BY": "Belarus",
    "BZ": "Belize",
    "CA": "Canada",
    "CC": "Cocos Islands",
    "CD": "Congo",
    "CF": "Central African Republic",
    "CG": "Republic of the Congo",
    "CH": "Switzerland",
    "CI": "Cote d'Ivoire",
    "CK": "Cook Islands",
    "CL": "Chile",
    "CM": "Cameroon",
    "CN": "China",
    "CO": "Colombia",
    "CR": "Costa Rica",
    "CU": "Cuba",
    "CV": "Cape Verde",
    "CW": "Curacao",
    "CX": "Christmas Island",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DE": "Germany",
    "DJ": "Djibouti",
    "DK": "Denmark",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "DZ": "Algeria",
    "EC": "Ecuador",
    "EE": "Estonia",
    "EG": "Egypt",
    "EH": "Western Sahara",
    "ER": "Eritrea",
    "ES": "Spain",
    "ET": "Ethiopia",
    "EU": "Europe",
    "FI": "Finland",
    "FJ": "Fiji",
    "FK": "Falkland Islands",
    "FM": "Micronesia",
    "FO": "Faroe Islands",
    "FR": "France",
    "GA": "Gabon",
    "GB-ENG": "England",
    "GB-SCT": "Scotland",
    "GB-WLS": "Wales",
    "GB": "United Kingdom",
    "GD": "Grenada",
    "GE": "Georgia",
    "GG": "Guernsey",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GL": "Greenland",
    "GM": "Gambia",
    "GN": "Guinea",
    "GQ": "Equatorial Guinea",
    "GR": "Greece",
    "GS": "South Georgia and the South Sandwich Islands",
    "GT": "Guatemala",
    "GU": "Guam",
    "GW": "Guinea Bissau",
    "GY": "Guyana",
    "HK": "Hong Kong",
    "HM": "Heard Island and McDonald Islands",
    "HN": "Honduras",
    "HR": "Croatia",
    "HT": "Haiti",
    "HU": "Hungary",
    "ID": "Indonesia",
    "IE": "Ireland",
    "IL": "Israel",
    "IM": "Isle of Man",
    "IN": "India",
    "IO": "British Indian Ocean Territory",
    "IQ": "Iraq",
    "IR": "Iran",
    "IS": "Iceland",
    "IT": "Italy",
    "JE": "Jersey",
    "JM": "Jamaica",
    "JO": "Jordan",
    "JP": "Japan",
    "KE": "Kenya",
    "KG": "Kyrgyzstan",
    "KH": "Cambodia",
    "KI": "Kiribati",
    "KM": "Comoros",
    "KN": "Saint Kitts and Nevis",
    "KP": "Korea",
    "KR": "Korea",
    "KW": "Kuwait",
    "KY": "Cayman Islands",
    "KZ": "Kazakhstan",
    "LA": "Laos",
    "LB": "Lebanon",
    "LC": "Saint Lucia",
    "LI": "Liechtenstein",
    "LK": "Sri Lanka",
    "LR": "Liberia",
    "LS": "Lesotho",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "LV": "Latvia",
    "LY": "Libya",
    "MA": "Morocco",
    "MC": "Monaco",
    "MD": "Moldova",
    "ME": "Montenegro",
    "MG": "Madagascar",
    "MH": "Marshall Islands",
    "MK": "North Macedonia",
    "ML": "Mali",
    "MM": "Myanmar",
    "MN": "Mongolia",
    "MO": "Macao",
    "MR": "Mauritania",
    "MS": "Montserrat",
    "MT": "Malta",
    "MU": "Mauritius",
    "MV": "Maldives",
    "MW": "Malawi",
    "MX": "Mexico",
    "MY": "Malaysia",
    "MZ": "Mozambique",
    "NA": "Namibia",
    "NC": "New Caledonia",
    "NE": "Niger",
    "NF": "Norfolk Island",
    "NG": "Nigeria",
    "NI": "Nicaragua",
    "NL": "Netherlands",
    "NO": "Norway",
    "NP": "Nepal",
    "NR": "Nauru",
    "NU": "Niue",
    "NZ": "New Zealand",
    "OM": "Oman",
    "PA": "Panama",
    "PE": "Peru",
    "PF": "French Polynesia",
    "PG": "Papua New Guinea",
    "PH": "Philippines",
    "PK": "Pakistan",
    "PL": "Poland",
    "PM": "Saint Pierre and Miquelon",
    "PN": "Pitcairn",
    "PR": "Puerto Rico",
    "PS": "Palestine",
    "PT": "Portugal",
    "PW": "Palau",
    "PY": "Paraguay",
    "QA": "Qatar",
    "RO": "Romania",
    "RS": "Serbia",
    "RU": "Russia",
    "RW": "Rwanda",
    "SA": "Saudi Arabia",
    "SB": "Solomon Islands",
    "SC": "Seychelles",
    "SD": "Sudan",
    "SE": "Sweden",
    "SG": "Singapore",
    "SI": "Slovenia",
    "SK": "Slovakia",
    "SL": "Sierra Leone",
    "SM": "San Marino",
    "SN": "Senegal",
    "SO": "Somalia",
    "SR": "Suriname",
    "SS": "South Sudan",
    "ST": "Sao Tome and Principe",
    "SV": "El Salvador",
    "SX": "Sint Maarten",
    "SY": "Syrian Arab Republic",
    "SZ": "Swaziland",
    "TC": "Turks and Caicos Islands",
    "TD": "Chad",
    "TF": "French Southern Territories",
    "TG": "Togo",
    "TH": "Thailand",
    "TJ": "Tajikistan",
    "TK": "Tokelau",
    "TL": "Timor Leste",
    "TM": "Turkmenistan",
    "TN": "Tunisia",
    "TO": "Tonga",
    "TR": "Turkey",
    "TT": "Trinidad and Tobago",
    "TV": "Tuvalu",
    "TW": "Taiwan",
    "TZ": "Tanzania",
    "UA": "Ukraine",
    "UG": "Uganda",
    "US": "United States",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VC": "Saint Vincent and the Grenadines",
    "VE": "Venezuela",
    "VG": "Virgin Islands",
    "VI": "Virgin Islands",
    "VN": "Vietnam",
    "VU": "Vanuatu",
    "WF": "Wallis and Futuna Islands",
    "WS": "Samoa",
    "XK": "Kosovo",
    "YE": "Yemen",
    "ZA": "South Africa",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
}
const countriesLowercased = Object.keys(countries).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = countries[key].toLowerCase();
    return newObj;
}, {});


/*----- state variables  -----*/
var score = 0
var countryList = []
var questionNumber = 0 
var imageElement
var selectedCountry 
var tries = 0
var userSelectedNumber 
var wordDisplay = [];

var form = document.getElementById('myForm')
var feedback = document.getElementById("feedback")
var answer = document.getElementById('answer')
var hold = document.getElementById('hold')

var skipButton = document.getElementById('skip')
var restartButton = document.getElementById('restart')
var restartButton2 = document.getElementById('restart2')
var radios = document.querySelectorAll('input[type=radio]')

var gameStartScreen = document.getElementById("gameStartScreen")
var gameStart = document.getElementById("gameStart")
var gameEnd = document.getElementById('gameEnd') 
/*----- functions  -----*/
function homeScreen() {
    gameStartScreen.hidden = false
    gameStart.hidden = true
    gameEnd.hidden = true
    radios.forEach(radio => radio.checked = false)
}


function Restart() {
    score = 0
    countryList = []
    for (country in countries) {
        countryList.push(country.toLowerCase()); 
    }
    tries = 0
    questionNumber = 0 
    answer.innerText = ''
    updateFlag()
    updateScore()
    generateAnswerDisplay(selectedCountry)
    skipButton.disabled = false 
    for (let element of form.elements) {
        element.disabled = false
      }

}

function generateAnswerDisplay(word) {
    var wordArray = word.split("");
    hold.innerHTML = ""
    for (var i = 0; i < wordArray.length; i++) {
            var content = document.createTextNode("_  ")
            hold.appendChild(content)
        }
    }

function checkAnswerDisplay(userInput, selectedCountry) {
    var countryAnswer = selectedCountry.split(""); 
    var user = userInput.split("")
    var placeholder = hold.innerText.replace(/\s+/g, '').split("")
    for (var i = 0; i < user.length; i++) {
        if (countryAnswer[i] === user[i]) {
            placeholder[i] = countryAnswer[i]
        }
    }
    hold.innerHTML = placeholder.join(" ")
    if (selectedCountry === hold.innerHTML.replace(/\s+/g, '')) {
        nextQuestion()
        gameEndCheck()
    }

}


function updateScore() {
    scoreText = document.getElementById("score")
    scoreText.innerHTML = `Score: ${score}`
    questionText = document.getElementById("question_number")
    questionText.innerHTML = `Question: ${questionNumber}/${userSelectedNumber}`
}


function updateFlag() {
    const random = Math.floor(Math.random() * countryList.length);
    selectedCountry = countriesLowercased[countryList[random]]
    console.log(selectedCountry)
    if (imageElement) {
        imageElement.src = `./svg/${countryList[random]}.svg`;
    } else {
        console.log("ERROR") /* error handling */ 
    }
    countryList.splice(random,1)
}

function nextQuestion() {
    feedback.innerHTML = "Fill in your answer here:"
    questionNumber += 1
    tries = 0
    updateScore()
    updateFlag() 
    generateAnswerDisplay(selectedCountry)
    document.querySelector('input[name="guess"]').value  = ''
}

function gameEndCheck() {
    if (questionNumber == userSelectedNumber) {
        skipButton.disabled = true 
        for (let element of form.elements) {
            element.disabled = true
          }
        gameEnd.hidden=false 
        gameStart.hidden = true
        gameStartScreen.hidden = true
        document.querySelector('#gameEnd > h2').innerHTML= `Your score is ${score}/${questionNumber}`
        }
}


/*----- event listeners  -----*/
/*----- game start screen  -----*/

radios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      if (this.checked) {
          userSelectedNumber = this.value
          document.getElementById("gameStartScreen").hidden=true
          document.getElementById("gameStart").hidden=false
          radios.checked = false
          Restart()
      }
    });
  });

/*----- gameplay  -----*/ 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("imageid").style.display = "block"
    imageElement = document.getElementById("imageid");

    form.addEventListener('submit', function(event) {
        var userInput = document.querySelector('input[name="guess"]').value;
        event.preventDefault()
        if (userInput.toLowerCase().trim() === selectedCountry) {
            feedback.innerHTML = "Correct"
            gameEndCheck() 
            score += 1
            nextQuestion()
            answer.innerText = ''
        } else if (userInput.toLowerCase().trim() === '') {
            tries += 1 
            document.querySelector('input[name="guess"]').value  = ''
            feedback.innerHTML = "Please enter a guess";
            answer.innerText = ''
        }
        else {
            tries += 1 
            feedback.innerHTML = `Try again. You have tried ${tries} times.`
            document.querySelector('input[name="guess"]').value  = ''
            answer.innerText = ''
            checkAnswerDisplay(userInput.toLowerCase().trim(), selectedCountry)
        } 
    })
});

skipButton.addEventListener('click', function() {
    answer.innerText = `The answer was ${selectedCountry}.`
    nextQuestion() 
    gameEndCheck() 
}) 

restartButton2.addEventListener('click', function() {
    homeScreen()
    Restart();
});

restartButton.addEventListener('click', function() {
    homeScreen(); 
    Restart();
});

