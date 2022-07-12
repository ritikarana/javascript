
function User() { }
User.prototype.name = 1
const a = new User()
console.log(a.name)

User.prototype.name = 2
const b = new User()
console.log(a.name)
console.log(b.name)

User.prototype = {name: 3}
const c = new User()
console.log(a.name)
console.log(b.name)
console.log(c.name)