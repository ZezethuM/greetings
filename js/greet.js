const myName = document.querySelector(".theName");
const myGreetBtn = document.querySelector(".greetBtn");
const resetBtn = document.querySelector(".resetBtn");
const greetElement = document.querySelector(".theMessage");
const countElement = document.querySelector(".theCount");


let storedNames = localStorage.getItem("MyArray") ? JSON.parse(localStorage.getItem("MyArray")) : [];

const theGreet = greeting(storedNames);
countElement.innerHTML = storedNames.length;

myGreetBtn.addEventListener('click', function(){
    
    let thecurrentLanguage = document.querySelector(".radioBtn:checked");
    let checkedRadio = thecurrentLanguage.value;
    
    let newMessage = theGreet.greetMassage(checkedRadio, myName.value);
    localStorage.setItem("MyArray", JSON.stringify(storedNames));
    
    greetElement.innerHTML = newMessage;  
    setTimeout(() => {
        greetElement.innerHTML = "Your message will show here!";
    }, 3000);
    countElement.innerHTML = storedNames.length;

});

resetBtn.addEventListener('click', function(){
     
    localStorage.clear()
    location.reload()
    countElement.innerHTML = theGreet.resetCount();
})
