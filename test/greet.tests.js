
describe('Greet Factory function', function(){
    describe("", function(){
        it('It should be able to set the name and push to an array', function(){
            const myName = greeting();
            myName.setName("Zeze");
            assert.deepEqual(["Zeze"], myName.getNames());
        });
        it('It should return "Enter a valid name" if empty string/ name with numbers/special characters is passed', function(){
            const myName = greeting();
            assert.equal("Please Enter a valid Name", myName.greetMassage("Isixhosa",""));
            assert.equal("Please Enter a valid Name", myName.greetMassage("Isixhosa","123"));
        });
        it('It should return language not checked if greeted without a language', function(){
            const myName = greeting();
            assert.equal(undefined, myName.greetMassage("","Zeze"));
        });
    })
    describe("It should be able to greet in defferent languages", function(){
        it('It should return a greeting in the selected language with the name', function(){
            const myName = greeting();
            assert.equal("Hello, Zezethu", myName.greetMassage("English","Zezethu"));
        });
        it('It should return "Already greeted enter a new name" when a name is being greeted twice', function(){
            const myName = greeting();
            myName.setName("Zezethu")
            assert.equal('Already greeted enter a new Name', myName.greetMassage("English","Zezethu"));
        });
    it('It should return a greeting in the selected language with the name', function(){
        const myName = greeting();
        assert.equal("Hello, Liya", myName.greetMassage("English","liya"));
    });
    it('It should return a greeting in the selected language with the name', function(){
        const myName = greeting();
        assert.equal("Dumela, Liyema", myName.greetMassage("Pedi","liyema"));    
    });
});
describe("Set and reset counter", function(){
    it('It should return the counter each time a valid name is greeted', function(){
        const myName = greeting();
        myName.setName("Zeze");
        myName.setName("liya");
        myName.setName("zimi");
        assert.equal(3, myName.counter());    
    });
    it('It should be able to reset counter', function(){
        const myName = greeting();
        myName.setName("Zeze");
        myName.setName("liya");
        myName.setName("zimi");
        assert.equal(0, myName.resetCount());    
    });
    it('It should not count when a name is repeated', function(){
        const myName = greeting();
        myName.setName("Zeze");
        myName.setName("Zeze");
        myName.setName("Zeze");
        myName.setName("liya");
        myName.setName("liya");
        myName.setName("zimi");
        assert.equal(3, myName.counter());    
    });
});
});