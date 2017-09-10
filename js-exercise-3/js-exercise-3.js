function wordCount() {
  var inputText = document.getElementById('input-text').value;
  var wordCount = {};
  var inputArray = inputText.split(' ');
  var i,j;
  for (i = 0; i < inputArray.length; i++) {
    var count = 0
    for (j = 0; j < inputArray.length; j++) {
      if(inputArray[i] ===  inputArray[j] ){
        count++;
        wordCount[inputArray[i]] = count;
      }else{
        wordCount[inputArray[i]] = count;
      }
    }
  }
  document.getElementById("result").innerHTML = JSON.stringify(wordCount)
}