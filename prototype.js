function User() {}
User.prototype.name = "Jake";
const a = new User();
console.log(a.name);

User.prototype.name = "James";
const b = new User();
console.log(a.name);
console.log(b.name);

User.prototype = { name: "Jake James" };
const c = new User();
console.log(a.name);
console.log(b.name);
console.log(c.name);
