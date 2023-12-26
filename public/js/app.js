// 1
let dataBase = [];
let user = prompt("do you want log in or sign up ?");
if (user == "log in") {
    console.log("log in");
} else {
    console.log("sign up");
}

class userData {
    constructor(fullName, email, age, password,) {
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.password = password;
    }
}