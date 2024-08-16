function myFunction(){
  let num1 = Number(document.getElementById("first_number").value);
  let num2 = Number(document.getElementById("second_number").value);
  let operation = document.getElementById("validationCustom04").value ;
  let result;
  if(operation == "+"){
    result = num1 + num2
  }else if(operation == "-"){
    result = num1-num2
  }else if(operation == "x"){
    result = num1*num2
  }else{
    result = num1/num2
  }
  document.getElementById("result").value = result
  console.log(result)
}