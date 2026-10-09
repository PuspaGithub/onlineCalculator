const numPad = document.querySelector(".num-pad");
const operatorPad = document.querySelector(".operator-pad");
const numberOprator = document.querySelector(".num_operator");
const input = document.querySelector(".input");

let num = [1,2,3,4,5,6,7,8,9,0];
let operators = ["+", "-", "/", "x", "="]


for(let i=0; i<num.length; i++){
 const numBtn = document.createElement('button')
 numBtn.textContent = num[i];
 numBtn.classList = 'number';
 numPad.appendChild(numBtn);   
}

for(let i=0; i<operators.length; i++){
  const operatorBtn = document.createElement("button");
  operatorBtn.textContent = operators[i];
  operatorBtn.classList = "operator";
  operatorPad.appendChild(operatorBtn);
}

let clicked = [];
let first_num;
let second_num;
let oprtr;

numberOprator.addEventListener("click", (e)=>{
  e.preventDefault();
  const button = e.target.closest('button');
  if (operators.includes(button.textContent)){
    let oprtr = button.textContent;
    console.log(oprtr);
  }
  clicked.push(button.textContent)
  console.log(clicked)
  for(let i=0; i<clicked.length; i++){
    input.value = clicked.join("")
  }
})