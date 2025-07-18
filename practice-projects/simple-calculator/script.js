let a = document.getElementById("op1").value;
let b = document.getElementById("op2").value;
let resultEl = document.getElementById("result")

function divide(){
  if (b==0){
        resultEl.textContent = "Number can't be divided by zero!";
  }

  else{
    resultEl.textContent = a / b;
  }
}

function add(){
  resultEl.textContent = a + b;
}

function subtract(){
  resultEl.textContent = a - b;
}

function multiply(){
  resultEl.textContent = a * b;
}