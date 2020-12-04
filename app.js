var txtInput = document.querySelector("#input");
var btnTransalte = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/shakespeare.json";

function translationUrl(input) {
    return serverUrl + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occured", error);
}

function clickHandler() {

    var inputText = txtInput.value;

    fetch(translationUrl(inputText))
    .then(response => response.json())
    .then(json => {
         var transaltedText = json.contents.translated;
         outputDiv.innerText = transaltedText;

        })
    .catch(errorHandler)
}

btnTransalte.addEventListener("click", clickHandler) 
