
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

function Admin(...args) {
    User.apply(this, args);
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (u) {
    users = users.filter(user => {
        return user.email != u.email;
    });
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, admin];


//  in inspect pannel

console.log(admin);
console.log(userOne);
console.log(users);
console.log(admin.login());


console.log(admin.deleteUser(users[1]));
console.log(users);
console.log(userOne.deleteUser(users[0]));  // error

console.log(userOne);
userTwo.login();