var arr="";
var operator=[];
let firstNumber=[];
let secondNumber=[];
let z;

$(document).ready(function(){
    $(".button").on("click",function(){
        arr+=$(this).text();
       $(".the-field").val(arr);
      
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



//THE SUM
let i = 0;
$(document).ready(function(){
    $(".result").on("click",function(){
             
             if(operator.length==1&&operator[0]=="+"){
                let equationTerms= arr.split(operator[0]);
                firstNumber[0]=equationTerms[0];
                secondNumber[0]=equationTerms[1];
                z=parseFloat(firstNumber[0])+parseFloat(secondNumber[0]);
                $(".the-field").val(z);
              arr="";
              firstNumber=[];
               secondNumber=[];
               operator=[];
               arr+=z;
               
             }
        
    })
})



//(-)
$(document).ready(function(){
    $(".result").on("click",function(){
        if(operator.length==1&&operator[0]=="-"){
            let equationTerms= arr.split(operator[0]);
            firstNumber[0]=equationTerms[0];
            secondNumber[0]=equationTerms[1];
            z=parseFloat(firstNumber[0])-parseFloat(secondNumber[0]);
            $(".the-field").val(z);
          arr="";
          firstNumber=[];
           secondNumber=[];
           operator=[];
           arr+=z;
           
         }
    })
})

//("*")
$(document).ready(function(){
    $(".result").on("click",function(){
        if(operator.length==1&&operator[0]=="*"){
            let equationTerms= arr.split(operator[0]);
            firstNumber[0]=equationTerms[0];
            secondNumber[0]=equationTerms[1];
            z=parseFloat(firstNumber[0])*parseFloat(secondNumber[0]);
            $(".the-field").val(z);
          arr="";
          firstNumber=[];
           secondNumber=[];
           operator=[];
           arr+=z;
           
         }
    })
})


//("/")
$(document).ready(function(){
    $(".result").on("click",function(){
        if(operator.length==1&&operator[0]=="/"){
            let equationTerms= arr.split(operator[0]);
            firstNumber[0]=equationTerms[0];
            secondNumber[0]=equationTerms[1];
            z=parseFloat(firstNumber[0])/sparseFloat(secondNumber[0]);
            $(".the-field").val(z);
          arr="";
          firstNumber=[];
           secondNumber=[];
           operator=[];
           arr+=z;
           
         }
    })
})


console.log("operator",operator);
console.log("arr",arr);
console.log("firstNumber",firstNumber);
console.log("secondNumber",secondNumber);