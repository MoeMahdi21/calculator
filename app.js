let num1 = '';
let num2 = '';
let operator = '';
let endOfcalcuation = false;
let result = null;

let btn = document.querySelectorAll('.calc-buttons button');
btn.forEach((item) => {
  item.addEventListener('click', () => {
    const display = document.querySelector('.display');

    if (!isNaN(item.id)) {
      if (endOfcalcuation === true) {
        display.textContent = `${item.id}`;
        endOfcalcuation = false;
      } else {
        display.textContent += `${item.id}`;
      }
    } else if (item.id !== 'clear' && item.id !== '=') {
      if (operator === '') {
        num1 = Number(display.textContent);
        operator = item.id;
        display.textContent = '';
      } else {
        num2 = Number(display.textContent);
        num1 = operate(num1, operator, num2);
        operator = item.id;
        display.textContent = `${num1}`;
      }
    } else if (item.id === '=') {
      num2 = Number(display.textContent);
      result = operate(num1, operator, num2);
      display.textContent = `${result}`;
      endOfcalcuation = true;
    } else if (item.id === 'clear') {
      display.textContent = '';
      num1 = '';
      num2 = '';
      operator = '';
      endOfcalcuation = false;
      result = null;
    }
  });
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operator, num2) {
  console.log(num1, operator, num2);
  if (operator === '+') {
    return add(num1, num2);
  } else if (operator === '-') {
    return subtract(num1, num2);
  } else if (operator === '*') {
    return multiply(num1, num2);
  } else if (operator === '/') {
    return divide(num1, num2);
  }
}
