console.log("connected");

let textInput = document.querySelector("#text-input");
let translateBtn = document.querySelector("#translate-text");
let outputText = document.querySelector("#output");

let serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return serverUrl + "?text" + "=" + input;
}

function clickHandler() {
  let inputText = textInput.value;

  function doFetch() {
    fetch(getTranslationURL(inputText))
      .then((response) => response.json())
      .then((json) => {
        let translatedText = json.contents.translated;
        outputText.innerText = translatedText;
      })
      .catch(errorHandler);
  }
  doFetch();
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

translateBtn.addEventListener("click", () => {
  clickHandler();
});
