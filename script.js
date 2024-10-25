function sum() {
  let inputX = document.getElementsByName("x")[0];
  let a = inputX.value;
  let inputY = document.getElementsByName("y")[0];
  let b = inputY.value;

  let c = Number(a) + Number(b);

  let span = document.getElementById("calcResult");
  span.innerHTML = "Результат: " + c;

  return c;
}
function divide() {
  let inputX = document.getElementsByName("x")[0];
  let a = inputX.value;
  let inputY = document.getElementsByName("y")[0];
  let b = inputY.value;
  let span = document.getElementById("calcResult");

  if (b == 0) {
    span.innerHTML = "На ноль делить нелья";
  } else {
    let c = Number(a) / Number(b);
    span.innerHTML = "Результат: " + c;
  }

  return c;
}

function saleStep() {
  let step = document.getElementById("step").value;
  let sale = document.getElementById("sale");
  sale.innerHTML = step + "%";
}

function coursePrice() {
  let courseName = document.getElementById("courseName").value;
  let coursePrice = document.getElementsByClassName("price")[0];
  let step = +document.getElementById("step").value;
  console.log(step);
  const PYTHON_PRICE = 12000000;
  const FRONT_PRICE = 14000000;
  const UX_PRICE = 16000000;
  let bestPrice;
   
  if (courseName == "Python") {
    bestPrice = PYTHON_PRICE;
  } else if (courseName == "Front") {
    bestPrice = FRONT_PRICE;
  } else if (courseName == "UX") {
    bestPrice = UX_PRICE;
  } else {
    coursePriceElement.value = "";
    return
  }
  let finalPrice = bestPrice * (100 - step) / 100;
  coursePrice.value = finalPrice;
  saleStep()
}

