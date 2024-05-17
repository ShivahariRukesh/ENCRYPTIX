const numButt = document.querySelectorAll(".num");
const opButt = document.querySelectorAll(".op");
const displayContent = document.getElementsByClassName("display-content")[0];

const val = displayContent.innerText;
var opVal;

function operationVal(op) {
  console.log(op);
  console.log(displayContent.innerText);
  if (displayContent.innerText === "") {
    return "";
  }

  if (op === undefined) {
    return displayContent.innerHTML;
  }
  let num1, num2;
  if (displayContent.innerText[0] === "-") {
    console.log(
      displayContent.innerText.slice(1, displayContent.innerText.length)
    );

    num1 = -Number(
      displayContent.innerText
        .slice(1, displayContent.innerText.length)
        .split(op)[0]
    );
  } else {
    num1 = Number(displayContent.innerText.split(op)[0]);
  }
  num2 = Number(displayContent.innerText.split(op)[1]);
  opVal = undefined;

  switch (op) {
    case "+":
      return String(num1 + num2);

    case "*":
      return String(num1 * num2);

    case "-":
      return String(num1 - num2);

    case "/":
      return String(num1 / num2);
  }
}

function numberHandler(e) {
  if (e.target.innerText === "<<") {
    displayContent.innerHTML = displayContent.innerHTML.slice(0, -1);
  } else {
    displayContent.innerText = displayContent.innerText + e.target.innerText;
  }
}

const operationHandler = (e) => {
  let enteredVal = e.target.innerText;
  if (enteredVal)
    if (enteredVal !== "AC" && enteredVal !== "=") {
      opVal = enteredVal;
      displayContent.innerText = displayContent.innerText + e.target.innerText;
    }
  if (enteredVal === "=") {
    displayContent.innerText = operationVal(opVal);
  }
  if (enteredVal === "AC") {
    displayContent.innerText = "";
  }
};

numButt.forEach((butt) => {
  butt.addEventListener("click", (e) => {
    numberHandler(e);
  });
});

opButt.forEach((butt) => {
  butt.addEventListener("click", (e) => {
    operationHandler(e);
  });
});
