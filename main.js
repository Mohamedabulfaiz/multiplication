// add function to button to create table first 
// get number input from users
// if empty or geather than 10 show error
//else create table with while loop 

var inputElement = document.getElementById("input")
var errorElement = document.getElementById("error")
var resultElement = document.getElementById("result")

function create(){
    var number = parseInt(inputElement.value)
    errorElement.innerHTML = "";
    resultElement.innerHTML = "";
    if (isNaN(number) || number > 10 || number < 1){
        errorElement.innerHTML = "Enter valid Number "
    }else{
        x = 1
        while(x <= 10){
        var multiple = number  * x  
        resultElement.innerHTML += number + " * "  + x + "=" + multiple + "<br>"
        x++
     }  
     inputElement.value =" "
   }
   
}
