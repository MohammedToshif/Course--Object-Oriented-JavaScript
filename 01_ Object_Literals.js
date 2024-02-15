
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

console.log(userOne.name);