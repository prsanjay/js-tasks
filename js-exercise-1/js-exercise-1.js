var result = ''
function displayResult(button) {
  var num1 = document.getElementById('number1').value;
  var num2 = document.getElementById('number2').value;
  var operation = button.value
  if(operation === 'add'){
    result = (parseInt(num1)+ parseInt(num2))
  }else if(operation === 'subtract'){
    result =  (num1 - num2)
  }else if(operation === 'multiply'){
    result = (num1 * num2)
  }else if(operation === 'divide'){
    result = (num1 / num2)
  }
  if(isNaN(result)){
    result = "Enter correct value."
  }
  document.getElementById("result").innerHTML = result
}