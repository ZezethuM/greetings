const myName = document.querySelector(".theName");
const myGreetBtn = document.querySelector(".greetBtn");
const resetBtn = document.querySelector(".resetBtn");
const greetElement = document.querySelector(".theMessage");
const countElement = document.querySelector(".theCount");
const countReset = document.querySelector('.countReset');
let spanO = document.querySelector('.spano');


let storedNames = localStorage.getItem("MyArray") ? JSON.parse(localStorage.getItem("MyArray")) : [];

const theGreet = greeting(storedNames);
countElement.innerHTML = storedNames.length;

myName.onkeyup = function(){
    const regex = /^[a-zA-Z]{3,}$/g;

    if(regex.test(myName.value)){
        spanO.innerText = "You entered a valid name";
        spanO.style.color = 'green';
        setTimeout(() => {
            spanO.innerHTML = "";
        }, 7000);
    }
    else{
        spanO.innerText = "You entered an invalid name";
        spanO.style.color = 'red'; 
        setTimeout(() => {
            spanO.innerHTML = "";
        }, 7000);
    }
}

myGreetBtn.addEventListener('click', function(){
    
    let thecurrentLanguage = document.querySelector(".radioBtn:checked");

    if (thecurrentLanguage !== null) {

        let checkedRadio = thecurrentLanguage.value;

        let newMessage = theGreet.greetMassage(checkedRadio, myName.value);
        localStorage.setItem("MyArray", JSON.stringify(storedNames));
        
        if(newMessage === "Please Enter a valid Name"){
            greetElement.style.color = "red"
            greetElement.innerHTML = newMessage;
        } 
        else if(newMessage === "Already greeted enter a new Name"){
            greetElement.style.color = "red";
            greetElement.innerHTML = newMessage;
        }
        else {
            greetElement.style.color = "green"
            countElement.innerHTML = storedNames.length;
        }
        greetElement.innerHTML = newMessage;  
        setTimeout(() => {
            greetElement.style.color = "black"
            greetElement.innerHTML = "Your message will show here!";
        }, 5000);

    } else if(thecurrentLanguage === null && myName.value === "") {
            greetElement.style.color = "red";
            greetElement.innerHTML = "Please select language and enter name";
        setTimeout(() => {
            greetElement.style.color = "black"
            greetElement.innerHTML = "Your message will show here!";
        }, 5000);
    }
    else {
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
        countElement.innerHTML = theGreet.resetCount().value = 0;
        countReset.innerHTML = "";
    }, 4000);
    
    document.querySelector('.forms').reset()
})
