
// Esercizio 1

const inputAccount = document.getElementById('inputAccount')
const saveButton= document.getElementById('saveButton')
const deleteButton=document.getElementById('deleteButton')




saveButton.addEventListener('click', function(){
    const accountName= inputAccount.value
    console.log(accountName)
    localStorage.setItem('account-name', accountName)
    alert('nome salvato')
})


deleteButton.addEventListener('click', function(){
 
    inputAccount.value=''

    localStorage.removeItem('account-name')

    alert('account eliminato')

})


if (localStorage.getItem('account-name')) {
    const showText = localStorage.getItem('account-name')
    inputAccount.value= showText
}




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