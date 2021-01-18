const viewResult = document.getElementById("view-result");
const addNumber = document.querySelectorAll(".number");
const operating = document.querySelectorAll(".operator");
const preResult = document.getElementById("operation-completing");

const negateOperator = document.getElementById("negate");
const clearOperator = document.getElementById("clear");
const returningOperator = document.getElementById("returning");
const divisionOperator = document.getElementById("division");
const percentOperator = document.getElementById("percent");
const multiplicationOperaton = document.getElementById("multiplication");
const graficOperator = document.getElementById("grafic");
const subtracionOperator = document.getElementById("subtracion");
const totalOperator = document.getElementById("total");
const moreOperator = document.getElementById("more");
const raizOperator = document.getElementById("raiz");

let lastResults = [0];

let nextOperation = false;
let verifyOperatorUsage = false;
let sqrtOperation = false;
let previousOperator = "";
for (const operator of operating) {
  operator.addEventListener("click", (e) => {
    switch (e.currentTarget) {
      case raizOperator:
        raiz(e);
        break;
      case negateOperator:
        negate(e);
        break;
      case clearOperator:
        clear(e);
        break;
      case returningOperator:
        previous(e);
        break;
      case totalOperator:
        total();
        break;
      default:
        operatingGeneric(e);
        break;
    }
  });
}

for (const number of addNumber) {
  number.addEventListener("click", (e) => {
    verifyVirgula(e);
  });
}

function teste() {
  viewResult.innerHTML = " ";
  console.log("dauida");
  nextOperation = false;
}

function teste1(e) {
  let revertingSqrt = preResult.textContent.split(" ");
  let teste = revertingSqrt.splice(0, revertingSqrt.length - 2);

  preResult.innerHTML = teste.join(" ");

  viewResult.innerHTML = e.target.textContent;
  sqrtOperation = false;
}
function verifyVirgula(e) {
  sqrtOperation ? teste1(e) : null;
  nextOperation ? teste() : null;

  verifyOperatorUsage = false;
  if (viewResult.textContent == 0) {
    if (e.target.textContent == ",") {
      viewResult.innerHTML = `0${e.target.textContent}`;
      return;
    }
    lastResults.push(viewResult.textContent);
    viewResult.innerHTML = e.target.textContent;

    return;
  } else if (e.target.textContent == ",") {
    viewResult.textContent.includes(",")
      ? alert("já tem vírgula, muleque")
      : lastResults.push(viewResult.textContent);
    viewResult.innerHTML += e.target.textContent;

    return;
  } else {
    lastResults.push(viewResult.textContent);
    viewResult.innerHTML += e.target.textContent;
  }
}

function raiz(e) {
  let allExpression = preResult.textContent + viewResult.textContent;
  preResult.innerHTML += ` sqrt(${viewResult.textContent}) `;
  const value = Math.sqrt(eval(viewResult.textContent));

  viewResult.innerHTML = value;
  nextOperation = true;
  sqrtOperation = true;
}
function negate(e) {
  lastResults.push(viewResult.textContent);
  viewResult.textContent = -viewResult.textContent;
}

function clear(e) {
  viewResult.innerHTML = 0;
  preResult.innerHTML = "";
  lastResults = [0];
  sqrtOperation = false;
}

function previous(e) {
  if (lastResults.length == 1) {
    return;
  }

  let anterior = lastResults.pop();
  viewResult.innerHTML = anterior;
}

function sqrtOperationIsTrue(e) {
  preResult.innerHTML += " " + e.target.textContent + " ";
  sqrtOperation = false;
}

function operatingGeneric(e) {
  if (verifyOperatorUsage) {
    if (!(previousOperator == e.target.textContent)) {
      previousOperator = e.target.textContent;
      const aba = preResult.textContent.split(``);
      let teste;
      teste = aba.splice(0, aba.length - 3);
      console.log(teste.join(""));

      // teste.map((caractere) => {
      //   console.log(teste1.concat(caractere));
      // });

      preResult.innerHTML = teste.join("") + " " + e.target.textContent + " ";
    }
    return;
  }
  lastResults = [0];

  sqrtOperation
    ? sqrtOperationIsTrue(e)
    : (preResult.innerHTML +=
        viewResult.textContent + " " + e.target.textContent + " ");
  previousOperator = e.target.textContent;
  verifyOperatorUsage = true;
  nextOperation = true;
}

function sqrt(x) {
  return Math.sqrt(eval(x));
}

function total(e) {
  console.log(preResult.textContent);
  if (preResult.textContent == "") return;
  if (sqrtOperation) {
    lastResults = [0];

    const value = eval(preResult.textContent);
    preResult.innerHTML = "";
    viewResult.innerHTML = value;
    nextOperation = true;
  } else {
    preResult.innerHTML += viewResult.textContent;
    lastResults = [0];
    console.log;
    const value = eval(preResult.textContent);
    preResult.innerHTML = "";
    viewResult.innerHTML = value;
    nextOperation = true;
  }
}
