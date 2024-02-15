
var userOne = {
    email: 'ryu@ninjas.com',
    name: 'ryu',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
};


//  in inspect pannel

userOne.name = "yoshi";
userOne     // name changed     "yoshi"

userOne.name = "Ryu";
userOne     // again name changed   "Ryu"

userOne.email;      //  "ryu@ninjas.com"
userOne['email'];   //  "ryu@ninjas.com"

userOne['name'] = "Mario";
userOne;     // name changed     "Mario"


//------ (02)

var prop = "name"
console.log(prop);      // undefined

userOne[prop]
console.log(userOne[prop]);


prop = "email"
console.log(prop);  // email

console.log(userOne[prop]);     //  "ryu@ninjas.com"

userOne.name;       // "Mario"


//----- (03)

userOne.age = 25;

console.log(userOne);
console.log(userOne.age);


userOne.logInfo = function () { }
console.log(userOne.logInfo)


//------------------------------//

var userTwo = {
    email: 'yoshi@ninjas.com',
    name: 'ryu',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
};

var userThree = {
    email: 'ryu@ninjas.com',
    name: 'ryu',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
};