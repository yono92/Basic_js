console.log("콜백지옥 벗어나기");
function findeuser(id, callback) {
  setTimeout(function () {
    const user = {
      id: id,
      name: "my name is " + id,
    };
    callback(user);
  }, 1000);
}

findeuser("foo", function (user) {
  console.log(user);
});
