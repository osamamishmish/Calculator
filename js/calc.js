var arr=[];
var operator=[];
let arr2;
let firstNumber;
let secondNumber;
let z;
//let secondNumber=[];
$(document).ready(function(){
    $(".button").on("click",function(){
        arr.push($(this).text());
      arr2=  arr.join(" ");
       $(".the-field").val(arr2);
       
      if($(this).text()=="+"){
        operator.push("+");
        
    } if($(this).text()=="-"){
        operator.push("-");
    } if($(this).text()=="*"){
        operator.push("*");
        
    } if($(this).text()=="/"){
        operator.push("/");
       
    }
    })
    
})

$(document).ready(function(){
    $(".result").on("click",function(){
      for(let index=0 ;index<operator.length;index++){
        var numbers= arr2.split(operator[index]);
        firstNumber=numbers[index];
        secondNumber=numbers[index+1];
       console.log(firstNumber);
       console.log(secondNumber);
        if(operator[0]=="+"){
            z=parseInt(firstNumber)+parseInt(secondNumber);
           return $(".the-field").val(z);

        }  
       
      
      }
        
            
            
    })
})
console.log(arr2);
console.log("operator",operator);
console.log("arr",arr);

