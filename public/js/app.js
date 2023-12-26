1
let dataBase = ['nejmaoui.imane@gmail.com'];
let user = prompt("do you want log in or sign up ?");
if (user == "log in") {
    console.log("log in");
} 

class userData {
    constructor(fullName, email, age, password,) {
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.password = password;
    }
}
// let fullName = prompt("insert your name : ") ;
let email = prompt("insert your email : ") ;
let age = prompt("insert your age : ") ;
let password = prompt("insert your password : ") ; 
dataBase.push(fullName ,email,age,password) ;
console.log(dataBase);



let fullName = prompt("insert your name : ");

const fullNamefx = () => {
    if (fullName !== fullName.trim()) {
        fullName = fullName.trim();

    }
    // if (fullName) {
    //     fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase()
    // }
    if (fullName.length < 6) {
        // for (let index = 0; index < fullName.length; index++) 
        
            fullName = prompt("rewrite your name")
        
    } if (fullName == '!' || ',' || '§' || '?' || ':') {
        fullName = prompt("rewrite your name")
    }
    if (fullName) {
        let nom = fullName.split(' ');
        for (let i = 0; i < nom.length; i++) {
            nom[i] = nom[i].charAt(0).toUpperCase() + nom[i].slice(1).toLowerCase();
        }
        fullName = nom.join(" ");
        // console.log( fullName);
    }
    console.log(fullName);
}
fullNamefx()


//! function email
let email = prompt("enter your email")
const emailfx = ()=>{
    email = email.trim( ) ;
    email = email.toLowerCase ();
    if(email.includes(" ")) {
        email= prompt("rewrite ur email") ;
    }if (email.includes(" ").length < 10) {
        email = prompt('it should be more than 10 caracteres')
    }if (email !== email.includes("@")) {
        email = prompt("youe email should contain an @")
    }
    // if (email == dataBase.includes(dataBase)) {
    //     alert('this email exist already') ;
    //     email = prompt('insert a new email')
    // }
    console.log(email);
}
emailfx()

//!







