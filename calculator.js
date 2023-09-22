document.addEventListener("keydown", function (event) {
            const key = event.key;
            if (/[0-9+\-*/.=%]|Enter|Escape|Backspace/.test(key)) {
            	event.preventDefault();//这一行代码阻止了键盘事件的默认行为。这是因为默认情况下，键盘事件会触发浏览器的默认行为
                if (key === "Enter") {
                    calculateResult();
                } else if (key === "Escape") {
                    	clearDisplay();
		} else if (event.key === 'Backspace') {
                	delToDisplay();
                } 
		  else {
                   	appendToDisplay(key);
                }
            }
        });
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
check();
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
    document.getElementById('display2').value = '';
check();
}

function formatNumber(number) {
    if (Number.isInteger(number)) {
      return number; // 如果是整数，直接返回整数
    } else {
      return parseFloat(number.toFixed(6)); // 如果是小数，保留6位小数并返回
    }
}
function delToDisplay(){
	currentInput = currentInput.slice(0,-1);
	document.getElementById('display').value = currentInput;
check();
}
function calculateResult() {
    try {
        currentInput = eval(currentInput);
        currentInput = formatNumber(currentInput);
        document.getElementById('display2').value = currentInput;
    } catch (error) {
	document.getElementById('display').value = '';
        document.getElementById('display2').value = 'error';
    }
check();
}

function check() {
        currentInput = document.getElementById('display').value;
}
