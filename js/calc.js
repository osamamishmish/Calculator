var arr="";
var operator=[];
let firstNumber=[];
let secondNumber=[];
let z;
//let secondNumber=[];
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
    var numbers= arr.split(operator[0]);
    firstNumber[0]=numbers[0];
    secondNumber[0]=numbers[1];
    })
    
})


/*$(document).ready(function(){
    $(".operator").on("click",function(){
        if(firstNumber.length==1&&secondNumber.length==1){

        }

    })
})*/
//THE SUM

$(document).ready(function(){
    $(".result").on("click",function(){
        if(operator=="+"){
           z=parseFloat(firstNumber[0])+parseFloat(secondNumber[0]);
            $(".the-field").val(z.toFixed(2));
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
        if(operator=="-"){
            z=parseFloat(firstNumber[0])-parseFloat(secondNumber[0]);
            $(".the-field").val(z.toFixed(2));
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
        if(operator=="*"){
            z=parseFloat(firstNumber[0])*parseFloat(secondNumber[0]);
            $(".the-field").val(z.toFixed(2));
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
        if(operator=="/"){
            z=parseFloat(firstNumber[0])/parseFloat(secondNumber[0])
            $(".the-field").val(z.toFixed(2));
          arr="";
          firstNumber=[];
           secondNumber=[];
           operator=[];
           arr+=z;
            

        }   
    })
})

/*$(document).ready(function(){
    
    $(".operator").on("click",function(){
        if(firstNumber.length==1&&secondNumber.length==1){
     arr+=$(".operator").text();
     operator.push($(".operator").text());   
    if(operator[0]=="+"){
        z=parseFloat(firstNumber[0])+parseFloat(secondNumber[0]);
        $(".the-field").val(z,operator[1]);
        operator.shift();
        arr="";
        firstNumber=[];
         secondNumber=[];
         arr+=z;
         arr+=operator[1] 
         $(".the-field").val(arr);
    }
    if(operator[0]=="-"){
        z=parseFloat(firstNumber[0])-parseFloat(secondNumber[0]);
        $(".the-field").val(z);
        operator.shift();
        arr="";
        firstNumber=[];
         secondNumber=[];
         arr+=z;
         arr+=operator[0] 
    }
    if(operator[0]=="*"){
        z=parseFloat(firstNumber[0])*parseFloat(secondNumber[0]);
        $(".the-field").val(z);
        operator.shift();
        arr="";
        firstNumber=[];
         secondNumber=[];
         arr+=z;
         arr+=operator[0] 
    }
    if(operator[0]=="/"){
        z=parseFloat(firstNumber[0])/parseFloat(secondNumber[0]);
        $(".the-field").val(z);
        operator.shift();
        arr="";
        firstNumber=[];
         secondNumber=[];
         arr+=z;
         arr+=operator[0]
    }
        
       
         
}     
})

})*/
console.log("operator",operator);
console.log("arr",arr);
console.log("firstNumber",firstNumber);
console.log("secondNumber",secondNumber);