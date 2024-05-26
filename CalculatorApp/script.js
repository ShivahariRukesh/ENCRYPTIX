const numButt = document.querySelectorAll(".num");
const opButt = document.querySelectorAll(".op");
const displayContent = document.getElementsByClassName("display-content")[0];

const val = displayContent.innerText;
var opVal;
const operatorsAll = ["+", "-", "*", "/"];

function operationVal(op) {
  console.log(op);
  // console.log(displayContent.innerText);
  if (displayContent.innerText === "") {
    return displayContent.innerText;
  }

  if (op === undefined) {
    return displayContent.innerHTML;
  }
  let num1, num2;

  if (displayContent.innerText[0] === "-") {
    if (
      !displayContent.innerText
        .slice(1, displayContent.innerText.length)
        .includes(op)
    )
      return displayContent.innerText;

    num1 = -Number(
      displayContent.innerText
        .slice(1, displayContent.innerText.length)
        .split(op)[0]
    );
    num2 = Number(
      displayContent.innerText
        .slice(1, displayContent.innerText.length)
        .split(op)[1]
    );
  } else {
    num1 = Number(displayContent.innerText.split(op)[0]);
    num2 = Number(displayContent.innerText.split(op)[1]);
    console.log(num1);
  }
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

    //Checking if operator is deleted or not, if it is then return undefined opVAl
    if (displayContent.innerText[0] === "-") {
      if (
        displayContent.innerText
          .slice(1, displayContent.innerText.length)
          .includes(opVal)
      ) {
        opVal = opVal;
      } else {
        opVal = undefined;
      }
    } else {
      if (displayContent.innerText.includes(opVal)) {
        opVal = opVal;
      } else {
        opVal = undefined;
      }
    }
  } else {
    displayContent.innerText = displayContent.innerText + e.target.innerText;
  }
}

const operationHandler = (e) => {
  let enteredVal = e.target.innerText;

  if (enteredVal !== "AC" && enteredVal !== "=") {
    if (displayContent.innerText === "") {
      return;
    }
    const operatorFormat = operatorsAll.some((ops) => {
      console.log(
        displayContent.innerText[displayContent.innerText.length - 1]
      );
      return (
        displayContent.innerText[displayContent.innerText.length - 1] === ops
      );
    });
    console.log(operatorFormat);
    if (operatorFormat) return;
    const hasOperators = operatorsAll.some((op) =>
      displayContent.innerText.includes(op)
    );

    if (hasOperators) {
      displayContent.innerText = operationVal(opVal);
    }

    displayContent.innerText = displayContent.innerText + e.target.innerText;
    opVal = enteredVal;
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
