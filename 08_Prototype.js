
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function () {
    this.online = false;
    console.log(this.email, 'has logged out');
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

console.log(userOne);
userTwo.login();

console.log(userOne.login());
console.log(userOne.logout());
console.log(userOne);


// in inspect pannel

var nums = [1, 2, 3, 4, 5];
console.log(nums);

console.log(nums.sort());

// console.log(userOne);
// console.log(userTwo);