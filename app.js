function clickme(name) {
  if (name == "help") {
    alert("you want help?");
  } else if (name == "buy") {
    alert("what would you like to buy?");
  } else if (name == "browser") {
    alert("you can browse cata");
  }
}
function changeit(state) {
  if (state == "in") {
    document.getElementById("test").style.backgroundColor = "red";
  } else if (state == "out") {
    document.getElementById("test").style.backgroundColor = "yellow";
  }
}
function answer() {
  let age = document.getElementById("myText").value;

  switch (true) {
    case age == 18:
      alert("good!");
      break;
    case age == "whats the weather?":
      alert("cold outside");
      break;
    case age == "whats my favorite color?":
      alert("green");
      break;
    case age == "how old is nick?":
      alert("24");
      break;
    case age == "how old is Karen?":
      alert("24");
      break;
    case age == "who is polo?":
      alert("your doggy, aka smallest bean");
      break;
    default:
      alert("try another question");
      break;
  }
}
