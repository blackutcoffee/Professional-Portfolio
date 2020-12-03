// Block-scoped Local Variable Returning All ".example-text-container" Elements -->
let exampleText = document.querySelectorAll(".example-text-container");

// Element Gets Fired  When The RemoteAccessTrojanEnters -->
for (let i = 0; i < exampleText.length; i++) {
  exampleText[i].addEventListener("mouseenter", function () {
    exampleText[i].querySelector(".hidden-text").style.display = "flex";
  });
}

// Fired Off Elements when the Mouseleavess its frame -->
for (let i = 0; i < exampleText.length; i++) {
  exampleText[i].addEventListener("mouseleave", function () {
    exampleText[i].querySelector(".hidden-text").style.display = "none";
  });
}
