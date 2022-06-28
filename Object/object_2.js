let user = {
  name: "sejong",
  age: 31,
};

let clone = {};

for (let key in user) {
  clone[key] = user[key];
}

clone.name = "yoon";

console.log(user.name);
console.log(clone.name);
