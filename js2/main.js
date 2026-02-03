var numbers = [];

function addNumber() {
  var num = document.getElementById("numberInput").value;

  if (num === "") {
    alert("Please enter a number");
    return;
  }

  numbers.push(parseInt(num));
  document.getElementById("result").innerHTML = numbers.join(", ");

  document.getElementById("numberInput").value = "";
}
