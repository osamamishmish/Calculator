var numbers="";
var operator=[];
let firstNumber=[];
let secondNumber=[];
let m=[0];
let d=[0];
let p=[0];
let s=[0];
let theLast=[];
let theFirst=[];
let z;
m.length=1;
d.length=1;
p.length=1;
s.length=1;
$(document).ready(function(){
    $(".button").on("click",function(){
        numbers+=$(this).text();
       $(".the-field").val(numbers);
    })

    
})

$(document).ready(function(){
    $(".operator").on("click",function(){
        numbers+=$(this).text();
       $(".the-field").val(numbers);
      operator.push($(this).text());
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




//THE SUM
$(document).ready(function(){
    $(".result").on("click",function(){
             
             if(operator.length==1&&operator.indexOf("+")!==-1){
                let equationTerms= numbers.split("+");
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
        if(operator.length==1&&operator.indexOf("-")!==-1){
            let equationTerms= numbers.split("-");
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






//("*") in long equations
$(document).ready(function(){
       
        
            $(".operator").on("click",function(){
                this.clicked=false;
               let  indexOfOperator=operator.indexOf("*");
                if(operator.length>1&&indexOfOperator==0){  
                    let theMultiple=operator.indexOf("*");
                    let theMultipleSlice=numbers.slice(0,numbers.indexOf(operator[theMultiple+1]));
                    console.log(theMultipleSlice);
                    let  equationTerms=theMultipleSlice.split("*");
                    firstNumber[0]=equationTerms[0];
                    secondNumber[0]=equationTerms[1];
                    m[0]=parseFloat(firstNumber[0])*parseFloat(secondNumber[0]);
                     let multipleIndex=operator.indexOf("*");
                     operator.splice(multipleIndex,1);
                     numbers="";
                     firstNumber=[];
                     secondNumber=[];
                  numbers+=m[0]+operator[0];
                  
                  $(".the-field").val(numbers);
               m=[0];
                }else if(operator.length>2&&indexOfOperator>0&&$(this).text()!=="*"){

                let sliceStart=numbers.indexOf(operator[indexOfOperator-1]);
                let sliceEnd=numbers.indexOf(operator[-1]);
                let theSlice=numbers.slice(sliceStart+1,sliceEnd);
                console.log(theSlice);
               let   equation=theSlice.split("*");
                firstNumber[0]=equation[0];
                secondNumber[0]=equation[1];
                m[0]=parseFloat(firstNumber[0])*parseFloat(secondNumber[0]);
           let preMultiple=numbers.slice(0,numbers.indexOf(operator[indexOfOperator-1])+1);
            console.log(preMultiple);
                 let indexOfMultiple=operator.indexOf("*");
                 operator.splice(indexOfMultiple,1);
                
                  z= preMultiple+m[0]+operator[operator.length-1];
                  numbers="";
                  numbers+=z;
                 $(".the-field").val(numbers);
                 firstNumber=[];
                 secondNumber=[];
                   m=[0];
                   
            
           
                }
     
    })
    })






// division in long equations
$(document).ready(function(){
    $(".operator").on("click",function(){
        this.clicked=false;
        let indexOfDivide=operator.indexOf("/");
        if(operator.length>1&&indexOfDivide==0){
           
                    let theDivisionSlice=numbers.slice(0,numbers.indexOf(operator[1]));
                    let equationTerms=theDivisionSlice.split("/");
                    firstNumber[0]=equationTerms[0];
                    secondNumber[0]=equationTerms[1];
                     d[0]=parseFloat(firstNumber[0])/parseFloat(secondNumber[0]);
                     console.log(d);
                     let divideIndex=operator.indexOf("/");
                     operator.splice(divideIndex,1);
                        numbers="";
                        numbers=d[0]+operator[0];
                        firstNumber=[];
                        secondNumber=[];
                        $(".the-field").val(numbers);   
                        d=[0]; 
                   }else if(operator.length>2&&indexOfDivide>0&&$(this).text()!=="/"){

                            let sliceStart=numbers.indexOf(operator[indexOfDivide-1]);
                let sliceEnd=numbers.indexOf(operator[-1]);
                let theSlice=numbers.slice(sliceStart+1,sliceEnd);
                console.log(typeof(theSlice));
                console.log(theSlice);
               let  equation=theSlice.split("/");
                firstNumber[0]=equation[0];
                secondNumber[0]=equation[1];
                 d[0]=parseFloat(firstNumber[0])/parseFloat(secondNumber[0]);
                
                    let preDivision=numbers.slice(0,numbers.indexOf(operator[indexOfDivide-1])+1);
                     divideIndex=operator.indexOf("/");
                    operator.splice(divideIndex,1);
                    z=preDivision+d[0]+$(this).text();
                    console.log($(this).text());
                    numbers="";
                    numbers+=z;

                    $(".the-field").val(numbers);
                    firstNumber=[];
                    secondNumber=[];
                      d=[0];
                      
       
        }    
    })
})




//sum in long equations
$(document).ready(function(){
    $(".operator").on("click",function(){
        if(operator.length>1&&operator[0]=="+"&&$(this).text()=="+"){
            let end=numbers.indexOf(operator[-1]);
            let theSlice=numbers.slice(0,end);
            let theSumEquation=theSlice.split("+");
            firstNumber[0]=theSumEquation[0];
            secondNumber[0]=theSumEquation[1];
                z=parseFloat(firstNumber[0])+parseFloat(secondNumber[0]);

                
                operator.splice(operator.indexOf(operator[0]),1);
                numbers="";
                numbers+=z
                numbers+=operator[0];
                
                $(".the-field").val(numbers);
                firstNumber=[];
                secondNumber=[];
        }
    })
})




//sum  in long equations
$(document).ready(function(){
    $(".operator").on("click",function(){
        if(operator.length>1&&operator[0]=="+"&&$(this).text()=="-"){
            let end=numbers.indexOf(operator[-1]);
            let theSlice=numbers.slice(0,end);
            let theSumEquation=theSlice.split("+");
            firstNumber[0]=theSumEquation[0];
            secondNumber[0]=theSumEquation[1];
                z=parseFloat(firstNumber[0])+parseFloat(secondNumber[0]);

                
                operator.splice(operator.indexOf(operator[0]),1);
                numbers="";
                numbers+=z
                numbers+=operator[0];
                
                $(".the-field").val(numbers);
                firstNumber=[];
                secondNumber=[];
        }
    })
})





//difference in long equations
$(document).ready(function(){
    $(".operator").on("click",function(){
        if(operator.length>1&&operator[0]=="-"&&$(this).text()=="-"){
            let end=numbers.indexOf(operator[-1]);
            let theSlice=numbers.slice(0,end);
            let theSumEquation=theSlice.split("-");
            firstNumber[0]=theSumEquation[0];
            secondNumber[0]=theSumEquation[1];
                z=parseFloat(firstNumber[0])-parseFloat(secondNumber[0]);

                
                operator.splice(operator.indexOf(operator[0]),1);
                numbers="";
                numbers+=z
                numbers+=operator[0];
                
                $(".the-field").val(numbers);
                firstNumber=[];
                secondNumber=[];
        }
    })
})






//difference in long equations
$(document).ready(function(){
    $(".operator").on("click",function(){
        if(operator.length>1&&operator[0]=="-"&&$(this).text()=="+"){
            let end=numbers.indexOf(operator[-1]);
            let theSlice=numbers.slice(0,end);
            let theSumEquation=theSlice.split("-");
            firstNumber[0]=theSumEquation[0];
            secondNumber[0]=theSumEquation[1];
                z=parseFloat(firstNumber[0])-parseFloat(secondNumber[0]);

                
                operator.splice(operator.indexOf(operator[0]),1);
                numbers="";
                numbers+=z
                numbers+=operator[0];
                
                $(".the-field").val(numbers);
                firstNumber=[];
                secondNumber=[];
        }
    })
})




//result of long equations
$(document).ready(function(){
    $(".result").on("click",function(){
        if(operator.length==2&&operator[0]=="+"){
            let sliceStart=numbers.indexOf("+");
            let sliceEnd=numbers.length;
            let theSlice=numbers.slice(sliceStart+1,sliceEnd);
            if(operator[1]=="*"){
                let multiple=theSlice.split("*");
                firstNumber[0]=multiple[0];
                secondNumber[0]=multiple[1];
                let theLast=parseFloat(firstNumber[0])*parseFloat(secondNumber[0]);
                firstNumber=[];
                secondNumber=[];
                secondNumber[0]=theLast;
            }if(operator[1]=="/"){
                let division=theSlice.split("/");
                firstNumber[0]=division[0];
                secondNumber[0]=division[1];
                let theLast=parseFloat(firstNumber[0])/parseFloat(secondNumber[0]);
                firstNumber=[];
                secondNumber=[];
                secondNumber[0]=theLast;
            }
            let theFirst=numbers.slice(0,numbers.indexOf("+"));
            firstNumber[0]=theFirst;
            
            z=parseFloat(firstNumber[0])+parseFloat(secondNumber[0]);
            numbers="";
            numbers+=z;
            $(".the-field").val(numbers);
            firstNumber=[];
            secondNumber=[];
            operator=[];
            
            
        }
    })
})





//result of long equations
$(document).ready(function(){
    $(".result").on("click",function(){
        if(operator.length==2&&operator[0]=="-"){
            let sliceStart=numbers.indexOf("-");
            let sliceEnd=numbers.length;
            let theSlice=numbers.slice(sliceStart+1,sliceEnd);
            if(operator[1]=="*"){
                let multiple=theSlice.split("*");
                firstNumber[0]=multiple[0];
                secondNumber[0]=multiple[1];
                let theLast=parseFloat(firstNumber[0])*parseFloat(secondNumber[0]);
                firstNumber=[];
                secondNumber=[];
                secondNumber[0]=theLast;
            }if(operator[1]=="/"){
                let division=theSlice.split("/");
                firstNumber[0]=division[0];
                secondNumber[0]=division[1];
                let theLast=parseFloat(firstNumber[0])/parseFloat(secondNumber[0]);
                firstNumber=[];
                secondNumber=[];
                secondNumber[0]=theLast;
            }
            let theFirst=numbers.slice(0,numbers.indexOf("-"));
            firstNumber[0]=theFirst;
            
            z=parseFloat(firstNumber[0])-parseFloat(secondNumber[0]);
            numbers="";
            numbers+=z;
            $(".the-field").val(numbers);
            firstNumber=[];
            secondNumber=[];
            operator=[];
            
            
        }
    })
})







//Deleting by DEL button
$(document).ready(function(){
    $(".delete").on("click",function(){
    if(numbers.length>1){
         var theLast=numbers.slice(0,-1);
         console.log(theLast);
        numbers="";
        numbers+=theLast;
        $(".the-field").val(numbers);
    }if(numbers.length=="1"){
        numbers="";
        firstNumber=[];
        secondNumber=[];
        operator=[];
        $(".the-field").val(numbers);
    }
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


//THEMES
$(document).ready(function(){
    document.body.style.background="hsl(222, 26%, 31%)";
            $(".buttons").css("background","hsl(223, 31%, 20%)");
            $(".the-field").css({
                "background":"hsl(224, 36%, 15%)",
                "color":"white",
                "fontSize":"20px",
                "paddingLeft":"20px",
            });
            $(".button").css({
                "color":"hsl(224, 36%, 15%)",
                "background":"white",
                "fontSize":"20px",
            })
            $(".operator").css({
                "color":"hsl(224, 36%, 15%)",
                "background":"white",
                "fontSize":"20px",
            })
            $(".delete, .reset").css({
                "background":"hsl(225, 21%, 49%)",
                "color":"white",
            });
            $(".the-header").css({
                "color":"white",
                "fontSize":"20px",
            });
            $(".result").css({
                "background":"darkred",
                "color":"white",
            })
           
    $(".form-range").on("click",function(){
        if($(".form-range").val()==2){
            document.body.style.background="hsl(0, 0%, 90%)";
            $(".buttons").css("background","hsl(0, 5%, 81%)");
            $(".the-field").css({
                "background":"hsl(0, 0%, 93%)",
                "color":"black",
                "fontSize":"20px",
                "paddingLeft":"20px",
            });
            $(".button,.delete ,.operator").css({
                "color":"black",
                "background":"white",
                "fontSize":"20px",
            });
          
            
            $(".the-header").css({
                "color":"black",
                "fontSize":"20px",
            });
            $(".reset,.delete").css({
                "background":"hsl(185, 42%, 37%)",
                "color":"white",
            })
            $(".result").removeClass("btn-danger").css({
                "background":"hsl(25, 98%, 40%)",
                "color":"white",
            })
        }if($(".form-range").val()==1){
            document.body.style.background="hsl(222, 26%, 31%)";
            $(".buttons").css("background","hsl(223, 31%, 20%)");
            $(".the-field").css({
                "background":"hsl(224, 36%, 15%)",
                "color":"white",
                "fontSize":"20px",
                "paddingLeft":"20px",
            });
            $(".button ,.operator").css({
                "color":"hsl(224, 36%, 15%)",
                "background":"white",
                "fontSize":"20px",
            })
            $(".delete, .reset").css({
                "background":"hsl(225, 21%, 49%)",
                "color":"white",
            });
            $(".the-header").css({
                "color":"white",
                "fontSize":"20px",
            });
            $(".result").css({
                "background":"darkred",
                "color":"white",
            })
        
            
        }if($(".form-range").val()==3){
            document.body.style.background="hsl(268, 75%, 9%)";
            $(".buttons").css("background","hsl(268, 71%, 12%)");
            $(".the-field").css({
               "background":"hsl(268, 71%, 12%)",
                "color":"hsl(52, 100%, 62%)",
                "fontSize":"20px",
                "paddingLeft":"20px",
            })
            $(".button , .delete ,.operator").css({
                "color":"hsl(52, 100%, 62%)",
                "background":"hsl(281, 89%, 26%)",
                "fontSize":"20px",
            })
            $(".the-header").css({
                "color":"hsl(52, 100%, 62%)",
                "fontSize":"20px",
            })
            $(".reset").removeClass("btn-secondary");
            $(".result").removeClass("btn-danger").css({
                "background":"hsl(176, 100%, 44%)",
                "color":"white",
            })
            $(".reset,.delete").css({
                "background":"hsl(281, 89%, 26%)",
                "color":"hsl(52, 100%, 62%)",
            })
        }
    })
    
})



//add the equation terms by keyboard
$(document).ready(function(){
    $(".the-field").on("keyup",function(e){
        if(e.keyCode===96||e.keyCode===48){
            numbers+="0";
        }if(e.keyCode===97||e.keyCode===49){
            numbers+="1";
        }if(e.keyCode===98||e.keyCode===50){
            numbers+="2";
        }if(e.keyCode===99||e.keyCode===51){
            numbers+="3";
        }if(e.keyCode===100||e.keyCode===52){
            numbers+="4";
        }if(e.keyCode===101||e.keyCode===53){
            numbers+="5";
        }if(e.keyCode===102||e.keyCode===54){
            numbers+="6";
        }if(e.keyCode===103||e.keyCode===55){
            numbers+="7";
        }if(e.keyCode===104||e.keyCode===56){
            numbers+="8";
        }if(e.keyCode===105||e.keyCode===57){
            numbers+="9";
        }if(e.keyCode===110||e.keyCode==190){
            numbers+=".";
        }
   if(e.keyCode===107||e.keyCode===187){
        return $(".plus").click();
    }if(e.keyCode===111||e.keyCode===220){
        return $(".divide").click();
        
    }if(e.keyCode===106){
        return $(".multiple").click();
        
    }if(e.keyCode===109||e.keyCode===189){
        return $(".subtract").click();
    }else{
        numbers+=$(this).text();
        numbers.replace($(this).text(),"");
        $(".the-field").val(numbers)
    }
    
   })
})







//calculate result by Enter
var theResult=document.querySelector(".result");
var theField=document.querySelector(".the-field");

$(document).ready(function(){
    theField.addEventListener("keypress",function(event){
        if(event.keyCode===13){
        return    theResult.click(); 
        }
        
    })
})




//DELETE BY backspace
var del=document.querySelector(".delete");
$(document).ready(function(){
    $(theField).on("keyup",function(event){
        if(event.keyCode===8){
        return    del.click(); 
        }
        
    })
})



console.log("operator",operator);
console.log("numbers",numbers);
console.log("firstNumber",firstNumber);
console.log("secondNumber",secondNumber);