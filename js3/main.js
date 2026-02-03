function calculateTotal(price, tax) {
  var total = price + (price * tax / 100);
  return total;
}

function showTotal() {
  var price = parseFloat(document.getElementById("price").value);
  var tax = parseFloat(document.getElementById("tax").value);

  var result = calculateTotal(price, tax);
  document.getElementById("result").innerHTML = result;
}
