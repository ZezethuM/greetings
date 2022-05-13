function greeting(list) {

    let theName = list || [];

    function setName(name) {

            theName.push(name);  
    }
    function greetMassage(langu, name) {
        let newName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    
        if(newName === ""){
            return "Enter a Name"
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
        theName = [];
        return theName.length;
    }
    return {
        setName,
        greetMassage,
        counter,
        getNames,
        resetCount
    }
}