function checkLeapYear() {
  var date = document.getElementById('date').value;
  var year = new Date(date).getFullYear();
  var divide_by_4 = year%4
  var divide_by_100 = year%100
  var divide_by_400 = year%400
  if(divide_by_4 === 0){
    if(divide_by_100 === 0){
      if(divide_by_400 === 0){
        result = date + ' is Leap year.'
      }else{
        result = date + ' is not Leap year.'
      }
    }else{
      result = date + ' is Leap year.'
    }
  }else{
    result = date + ' is not Leap year.'
  }

  document.getElementById("result").innerHTML = result
}