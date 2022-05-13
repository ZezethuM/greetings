const myName = document.querySelector(".theName");
const myGreetBtn = document.querySelector(".greetBtn");
const resetBtn = document.querySelector(".resetBtn");
const greetElement = document.querySelector(".theMessage");
const countElement = document.querySelector(".theCount");
const countReset = document.querySelector('.countReset');


let storedNames = localStorage.getItem("MyArray") ? JSON.parse(localStorage.getItem("MyArray")) : [];

const theGreet = greeting(storedNames);
countElement.innerHTML = storedNames.length;

myGreetBtn.addEventListener('click', function(){
    
    let thecurrentLanguage = document.querySelector(".radioBtn:checked");

    if (thecurrentLanguage !== null) {

        let checkedRadio = thecurrentLanguage.value;

        let newMessage = theGreet.greetMassage(checkedRadio, myName.value);
        localStorage.setItem("MyArray", JSON.stringify(storedNames));
        
        if(newMessage === "Enter a Name"){
            greetElement.style.color = "red"
            greetElement.innerHTML = newMessage;
        } else {
            greetElement.style.color = "green"
            countElement.innerHTML = storedNames.length;
        }
        greetElement.innerHTML = newMessage;  
        setTimeout(() => {
            greetElement.style.color = "black"
            greetElement.innerHTML = "Your message will show here!";
        }, 5000);

    } else {
            greetElement.style.color = "red";
            greetElement.innerHTML = "Language not selected";

        setTimeout(() => {
            greetElement.style.color = "black"
            greetElement.innerHTML = "Your message will show here!";
        }, 5000);
    }
    document.querySelector(".forms").reset();
});

resetBtn.addEventListener('click', function(){
    countReset.style.color = "blue"
    countReset.innerHTML = "Your counter will reset in 4 seconds"
    setTimeout(()=> {
        localStorage.clear()
        countElement.innerHTML = theGreet.resetCount();
        countReset.innerHTML = "";
    }, 4000);
    
    document.querySelector('.forms').reset()
})
