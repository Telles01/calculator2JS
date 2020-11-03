function getHistoty(){
  return document.getElementById("history-value").innerText;

}
function printHistory(num){
  document.getElementById("history-value").innerText=num;
}

function printOutput(num){
  return document.getElementById("output-value").innerText;
}

function printOutput(num){
  if(num==""){
    document.getElementById("output-value").innerText=num
  }
  else{
    document.getElementById("output-value").innerText=getFormattedNumber(num);
  }
  
}

function getFormattedNumber(num){
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

printOutput("98765433567");
function reverNumberFormat(num){
  return Number(num.replace(/,/g,''));
}
alert(reverNumberFormat(getOutput()));