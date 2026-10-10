/*

1st, display all the numbers inside the number pad in flex with the format of
1	2	3
4	5	6
7	8	9
	0	
2nd: display all the Operators inside the operator pad:
+	-	*
/	%	
			

When someone clicks something (unless it is =) start adding it a list of “clicked_elements”. after the user presses “=”, split the clicked element based on the operator using regex. Now pass that to the function called “calculate”.
What happens in “calculate” function is, it will take the array and convert the numbers that are in string to number and do the calculate based on the operator.
After everything return the result. 
After the final result is received stringify it if necessary and replace whatever the input.value by the final result.

*/

const container = document.querySelector(".container");
const input = document.querySelector(".input");
const num_operator = document.querySelector(".num_operator");
const numPad = document.querySelector(".num-pad");
const operatorPad = document.querySelector(".operator-pad");

let num = [1,2,3,4,5,6,7,8,9,0];
let operator = ["+", "-", "x", "/", "%", "=", "<-"];

//Displays all the numbers
for(let i=0; i<num.length; i++){
    let button = document.createElement("button");
    button.classList = "num_button";
    button.classList.add(num[i]);
    button.textContent = num[i];
    numPad.appendChild(button);
}

// Displays all the Operators +, -, /, *, %
for(let i=0; i<operator.length; i++){
    let operator_btn = document.createElement("button");
    operator_btn.classList = "operator_btn";
    operator_btn.textContent = operator[i]
    numPad.appendChild(operator_btn);
}

// getting and storing numbers and operators from numPad.
let clicked = []
numPad.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.textContent)
    if(e.target.textContent === "<-"){
        clicked.pop();
        input.value = clicked.join("");
    }else if(e.target.textContent === "="){
        input.value = clicked.join("");
        input.value = '';
        let result = calculate(clicked);
        console.log(`result: ${result}`)
        input.value = result;
    }
    else{
        clicked.push(e.target.textContent);
        input.value = clicked.join("");
    }
    
    
})

//const result = arr.join(',').replace(/(?<=\d),(?=\d)/g, '').split(',');
function calculate(...clicked){
    console.log(clicked);
    let splited = clicked.join(",").replace(/(?<=\d),(?=\d)/g, '').split(',');
    let firstNum = Number(splited[0]);
    let secondNum = Number(splited[2]);

    if (splited[1] === "+"){
        return firstNum + secondNum;
    }else if (splited[1] === "-"){
        return firstNum - secondNum;
    }else if (splited[1] === "x"){
        return firstNum * secondNum;
    }else if (splited[1] === "/"){
        return firstNum / secondNum;
    }
}