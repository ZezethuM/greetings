function greeting(list) {

    let theNames = list || [];
    let regexo = /^[a-zA-Z]{3,}$/

    function setName(name) {
            if(theNames.includes(name)){
            }
            else{theNames.push(name)};  
    }
    function greetMassage(langu, name) {

        let newName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase().trim();
        
        if(newName === "" || !regexo.test(newName)){
            return "Please Enter a valid Name"
        }
        else if(langu === "" && newName === ""){
            return "Please select language and enter Name"
        }
        if (theNames.includes(newName)) {
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
        return theNames.length;
    }
    function getNames() {
        return theNames;
    }
    function resetCount() {
        while(theNames.length != 0){
            theNames.pop();
        }
        return theNames;
    }
    return {
        setName,
        greetMassage,
        counter,
        getNames,
        resetCount
    }
}