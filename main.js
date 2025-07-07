let myHeading = document.querySelector("h1");
myHeading.textContent = "Bonjour à  toi seulement !!";
let myImage = document.querySelector("img");
myImage.addEventListener("click", function ()
 {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon02.png")
 {
    myImage.setAttribute("src", "images/cascade.png");
  } 
else 
{
    myImage.setAttribute("src", "images/firefox-icon02.png");
  }
});
let myButton = document.querySelector("button");
let Entete = document.querySelector("h1");
function setUserName()
 {
  let myName = prompt("Veuillez saisir votre nom.");
  localStorage.setItem("nom", myName);
  Entete.textContent = "Mozilla est cool, " + myName;
}


