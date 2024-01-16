
// Esercizio 1

const inputAccount = document.getElementById('inputAccount')
const saveButton= document.getElementById('saveButton')
const deleteButton=document.getElementById('deleteButton')
const savedAccountShow = document.getElementById("savedAccount");

saveButton.addEventListener("click", function () {
 const accountName = inputAccount.value;
 console.log(accountName);
 localStorage.setItem("account-name", accountName);
 alert("nome salvato");
});

deleteButton.addEventListener("click", function () {
 localStorage.removeItem("account-name");
 savedAccountShow.innerText = "";
 alert("account eliminato");
});

const ShowSavedAccount = function () {
 if (localStorage.getItem("account-name")) {
  // const showText = localStorage.getItem("account-name");
  savedAccountShow.innerText = localStorage.getItem("account-name");
 } else {
  savedAccountShow.innerText = "Non ci sono dati salvati";
 }
};
ShowSavedAccount();

// Esercizio 2

const counter = document.getElementById('counter').textContent


const timePassedCounter = function () {
 

 if (sessionStorage.getItem("counter")) {
  let counterIndex = parseInt(sessionStorage.getItem("counter"));
  counterIndex++;
  sessionStorage.setItem("counter", counterIndex);
  document.getElementById("counter").textContent = counterIndex;
 } else {
  sessionStorage.setItem("counter", 0);
  counterIndex = parseInt(sessionStorage.getItem("counter"));
  document.getElementById("counter").textContent = counterIndex;
 }
};

timePassedCounter();
setInterval(timePassedCounter, 1000);