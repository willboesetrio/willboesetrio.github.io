const buttons = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener('click', (event) => {
        let operand1 = parseInt(document.getElementById('operand1').value);
        let operand2 = parseInt(document.getElementById('operand2').value);
        let output = document.getElementById('output');
        let operandDisplay = document.getElementById('operand-display');
        let error = document.getElementById('error');
        if (!isNaN(operand1) && !isNaN(operand2)) {
            switch(event.target.id) {
                case 'add':
                    error.textContent = '';
                    output.textContent = operand1 + operand2
                    operandDisplay.textContent = '+';
                    break;
                case 'subtract':
                    error.textContent = '';
                    output.textContent = operand1 - operand2
                    operandDisplay.textContent = '-';
                    break;
                case 'multiply':
                    error.textContent = '';
                    output.textContent = operand1 * operand2
                    operandDisplay.textContent = '*';
                    break;
                case 'divide':
                    error.textContent = '';
                    operand2 === 0? 
                    error.textContent = "error: cannot divide by zero":
                    output.textContent = operand1 / operand2;
                    operandDisplay.textContent = '/';
                    break;
            }
        } else {
            error.textContent = "error: enter two operands";
        }
    })
}