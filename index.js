// Applying default styles for all elements in document
document.body.style.cssText = 'margin:0;padding:0;box-sizing: border-box;';

// Applying common styles to all <button> elements
var style = document.createElement('style');
style.innerText = 'button { outline: none; cursor: pointer; }';
document.body.appendChild(style);

// var btns = document.getElementsByTagName('button');
// btns.style.cssText = 'outline: none; cursor: pointer;';

// root element
var root = document.createElement('div');
document.body.append(root);
root.style.cssText =
   'display: grid; place-items: center; width: 100vw; height: 100vh; resize: both; overflow: auto;';

// app element as a child of root
var app = document.createElement('div');
root.append(app);
app.style.cssText =
   'height: 500px; width: 400px; background-color: lightblue; text-align: center; border-radius: 20px;';

// calculator screen
var screen = document.createElement('div');
app.append(screen);
screen.style.cssText =
   'height: 100px; background-color: ivory; margin: 10px; border-radius: 10px; position: relative; overflow: hidden; direction: rtl;';

// screen space while giving inputs
var screenInputs = document.createElement('div');
screen.append(screenInputs);
screenInputs.style.cssText =
   'position: absolute; bottom: 0; right: 10px; font-family: myriad pro; color: #2e302f; font-size: 35px;';

// digit buttons area
var digits = document.createElement('div');
app.append(digits);
digits.style.cssText =
   'float: left; width: 270px; height: 290px; margin: 0 10px 10px 10px; border-radius: 10px; background-color: orange; display: flex; flex-wrap: wrap;';

// operators area
var symbols = document.createElement('div');
app.append(symbols);
symbols.style.cssText =
   'float: right; width: 100px; height: 370px; background-color: seagreen; margin: 0 10px 10px 0;  border-radius: 10px; display: flex; flex-wrap: wrap;';

// clear and equals area
var results = document.createElement('div');
app.append(results);
results.style.cssText =
   'float: left; width: 270px; height: 70px; background-color: mediumpurple; margin: 0 0 10px 10px;  border-radius: 10px;';

// buttons for digits to press
var one = document.createElement('button');
one.innerText = '1';
var two = document.createElement('button');
two.innerText = '2';
var three = document.createElement('button');
three.innerText = '3';
var four = document.createElement('button');
four.innerText = '4';
var five = document.createElement('button');
five.innerText = '5';
var six = document.createElement('button');
six.innerText = '6';
var seven = document.createElement('button');
seven.innerText = '7';
var eight = document.createElement('button');
eight.innerText = '8';
var nine = document.createElement('button');
nine.innerText = '9';

// appending all buttons to digits
digits.append(one, two, three, four, five, six, seven, eight, nine);

// applying styles to all digit buttons
var buttonStyle =
   'width: 70px; height: 75px; border-radius: 5px; background-color: #fcba03; border: none; margin: 10px; font-size: 40px;font-family: myriad pro; color: white;';

one.style.cssText = buttonStyle;
two.style.cssText = buttonStyle;
three.style.cssText = buttonStyle;
four.style.cssText = buttonStyle;
five.style.cssText = buttonStyle;
six.style.cssText = buttonStyle;
seven.style.cssText = buttonStyle;
eight.style.cssText = buttonStyle;
nine.style.cssText = buttonStyle;

// buttons for operators
var plus = document.createElement('button');
plus.innerText = '+';
var minus = document.createElement('button');
minus.innerText = '-';
var divide = document.createElement('button');
divide.innerText = '/';
var product = document.createElement('button');
product.innerText = 'x';
var percentage = document.createElement('button');
percentage.innerText = '%';

// appending all operators to symbols area
symbols.append(plus, minus, product, divide, percentage);

// adding styles to all opeartor buttons
var symbolButtonStyle =
   'width: 80px; height: 50px; border-radius: 5px; background-color: #44bd79; border: none; margin: 10px; font-size: 40px;font-family: myriad pro; color: white;';

plus.style.cssText = symbolButtonStyle;
minus.style.cssText = symbolButtonStyle;
divide.style.cssText = symbolButtonStyle;
product.style.cssText = symbolButtonStyle;
percentage.style.cssText = symbolButtonStyle;

// buttons for clear and equals
var clear = document.createElement('button');
clear.innerText = 'Clear';
var equal = document.createElement('button');
equal.innerText = '=';

// appending clear and equal to results area
results.append(clear, equal);

// style to clear button
clear.style.cssText =
   'width: 100px; height: 50px; border-radius: 5px; background-color: #b295f0; border: none; position: relative; bottom: 5px; margin: 10px 10px 10px 10px; font-size: 25px;font-family: myriad pro; color: white;';

// clear button implementation
clear.addEventListener('click', function () {
   screenInputs.innerText = '';
});

// style to equal button
equal.style.cssText =
   'width: 130px; height: 50px; border-radius: 5px; background-color: #b295f0; border: none; margin: 10px; font-size: 40px;font-family: myriad pro;font-weight: bold; color: white;';

// adding click implementations to all digits
one.addEventListener('click', function () {
   screenInputs.innerText += '1';
});
two.addEventListener('click', function () {
   screenInputs.innerText += '2';
});
three.addEventListener('click', function () {
   screenInputs.innerText += '3';
});
four.addEventListener('click', function () {
   screenInputs.innerText += '4';
});
five.addEventListener('click', function () {
   screenInputs.innerText += '5';
});
six.addEventListener('click', function () {
   screenInputs.innerText += '6';
});
seven.addEventListener('click', function () {
   screenInputs.innerText += '7';
});
eight.addEventListener('click', function () {
   screenInputs.innerText += '8';
});
nine.addEventListener('click', function () {
   screenInputs.innerText += '9';
});

// variables for calculations
var firstInput = null;
var secondInput = null;
var operator = null;

// operators implementations
function addition() {
   firstInput = parseInt(screenInputs.innerText);
   screenInputs.innerText = '';
   operator = '+';
}
plus.addEventListener('click', addition);

function subtraction() {
   firstInput = parseInt(screenInputs.innerText);
   screenInputs.innerText = '';
   operator = '-';
}
minus.addEventListener('click', subtraction);

function multiplication() {
   firstInput = parseInt(screenInputs.innerText);
   screenInputs.innerText = '';
   operator = '*';
}
product.addEventListener('click', multiplication);

function division() {
   firstInput = parseInt(screenInputs.innerText);
   screenInputs.innerText = '';
   operator = '/';
}
divide.addEventListener('click', division);

function modulus() {
   firstInput = parseInt(screenInputs.innerText);
   screenInputs.innerText = '';
   operator = '%';
}
percentage.addEventListener('click', modulus);

equal.addEventListener('click', result);

// final result implementation
function result() {
   secondInput = parseInt(screenInputs.innerText);
   var result = null;
   switch (operator) {
      case '+':
         result = firstInput + secondInput;
         break;
      case '*':
         result = firstInput * secondInput;
         break;
      case '-':
         result = firstInput - secondInput;
         break;
      case '/':
         result = firstInput / secondInput;
         break;
      case '%':
         result = firstInput % secondInput;
         break;
   }

   screenInputs.innerText = result;
}
