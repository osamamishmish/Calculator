var numbers="";
var operator=[];
let firstNumber=[];
let secondNumber=[];
let z;

$(document).ready(function(){
    $(".button").on("click",function(){
        numbers+=$(this).text();
       $(".the-field").val(numbers);
      
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
$(document).ready(function(){
    $(".result").on("click",function(){
             
             if(operator.length==1&&operator[0]=="+"){
                let equationTerms= numbers.split(operator[0]);
                firstNumber[0]=equationTerms[0];
                secondNumber[0]=equationTerms[1];
                z=parseFloat(firstNumber[0])+parseFloat(secondNumber[0]);
                $(".the-field").val(z);
              numbers="";
              firstNumber=[];
               secondNumber=[];
               operator=[];
               numbers+=z;
               
             }
        
    })
})



//(-)
$(document).ready(function(){
    $(".result").on("click",function(){
        if(operator.length==1&&operator[0]=="-"){
            let equationTerms= numbers.split(operator[0]);
            firstNumber[0]=equationTerms[0];
            secondNumber[0]=equationTerms[1];
            z=parseFloat(firstNumber[0])-parseFloat(secondNumber[0]);
            $(".the-field").val(z);
          numbers="";
          firstNumber=[];
           secondNumber=[];
           operator=[];
           numbers+=z;
           
         }
    })
})

//("*")
$(document).ready(function(){
    $(".result").on("click",function(){
        if(operator.length==1&&operator[0]=="*"){
            let equationTerms= numbers.split(operator[0]);
            firstNumber[0]=equationTerms[0];
            secondNumber[0]=equationTerms[1];
            z=parseFloat(firstNumber[0])*parseFloat(secondNumber[0]);
            $(".the-field").val(z);
          numbers="";
          firstNumber=[];
           secondNumber=[];
           operator=[];
           numbers+=z;
           
         }
    })
})


//("/")
$(document).ready(function(){
    $(".result").on("click",function(){
        if(operator.length==1&&operator[0]=="/"){
            let equationTerms= numbers.split(operator[0]);
            firstNumber[0]=equationTerms[0];
            secondNumber[0]=equationTerms[1];
            z=parseFloat(firstNumber[0])/parseFloat(secondNumber[0]);
            $(".the-field").val(z);
          numbers="";
          firstNumber=[];
           secondNumber=[];
           operator=[];
           numbers+=z;
           
         }
    })
})


//long equation
$(document).ready(function(){
    
        $(".result").on("click",function(){
            if(operator.length>1){
            z=eval(numbers);
        $(".the-field").val(z);
        numbers="";
           operator=[];
           numbers+=z;
           
       
    }
})
    
})




//Deleting by DEL button
$(document).ready(function(){
    $(".delete").on("click",function(){
    let theLast=numbers.slice(0,-1);
     $(".the-field").val(theLast);
    $(".button").on("click",function(){
        theLast+=$(this).text();
        $(".the-field").val(theLast);
        
        
    })
    $(".result").on("click",function(){
        z=eval(theLast);
        $(".the-field").val(z);
        numbers="";
        theLast="";
        firstNumber=[];
        secondNumber=[];
        operator=[];
        theLast+=z;
        
    })
    })
    
})


//RESET
$(document).ready(function(){
    $(".reset").on("click",function(){
        numbers="";
        theLast="";
        firstNumber=[];
        secondNumber=[];
        operator=[];
      return  $(".the-field").val("");
    })
})

console.log("operator",operator);
console.log("numbers",numbers);
console.log("firstNumber",firstNumber);
console.log("secondNumber",secondNumber);