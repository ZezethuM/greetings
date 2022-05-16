function greeting(list) {

    let theName = list || [];
    let regexo = /^[a-zA-Z]{3,}$/g

    function setName(name) {
            theName.push(name);  
    }
    function greetMassage(langu, name) {

        let newName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase().trim();
    
        if(newName === "" || !regexo.test(newName)){
            return "Enter a valid Name"
        }
        if (theName.includes(newName)) {
                return "Already greeted enter a new Name";
        } else {
            setName(newName);
            if (langu === "Isixhosa") {
                return "Molo, " + newName
            }
            else if (langu === "English") {
                return "Hello, " + newName;
            }
            else if (langu === "Pedi") {
                return "Dumela, " + newName;
            }
        }
    }
    function counter() {
        return theName.length;
    }
    function getNames() {
        return theName;
    }
    function resetCount() {
        while(theName.length != 0){
            theName.pop();
        }
        return theName;
    }
    return {
        setName,
        greetMassage,
        counter,
        getNames,
        resetCount
    }
}