var numbers="";
var operator=[];
let firstNumber=[];
let secondNumber=[];
let m=[];
let d=[];
let p=[];
let s=[];
let theLast=[];
let theFirst=[];
let z;

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
               m=[];
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
                   m=[];
                   
            
           
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
                     let divideIndex=operator.indexOf("/");
                     operator.splice(divideIndex,1);
                        numbers="";
                        numbers=d[0]+operator[0];
                        firstNumber=[];
                        secondNumber=[];
                        $(".the-field").val(numbers);   
                        d=[]; 
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
                      d=[];
                      
       
        }    
    })
})




//sum in long equations
/*$(document).ready(function(){
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
        }else if(operator.length>2&&)
    })
})*/




$(document).ready(function(){
    $(".result").on("click",function(){
        if(operator.length>2&&operator[0]=="+"&&operator[1]=="-"){
            
            let sliceStart=numbers.indexOf(operator[operator.length-2]);
            let theSlice=numbers.slice(sliceStart+1,numbers.length);
            let theLastEqu=theSlice.split(operator[operator.length-1]);
            firstNumber[0]=theLastEqu[0];
            secondNumber[0]=theLastEqu[1];
            console.log(firstNumber[0]);
            console.log(secondNumber[0]);
           if(operator[operator.length-1]=="*"){
                theLast[0]=parseFloat(firstNumber[0])*parseFloat(secondNumber[0]);
               operator.splice(-1,1);
               firstNumber=[];
               secondNumber=[];
            }if(operator[operator.length-1]=="/"){
                theLast[0]=parseFloat(firstNumber[0])/parseFloat(secondNumber[0]);
                operator.splice(-1,1);
                firstNumber=[];
               secondNumber=[];
            }
            let theFirstSlice=numbers.slice(0,numbers.indexOf(operator[-1]));
            let theFirstEqu=theFirstSlice.split("+");
            firstNumber[0]=theFirstEqu[0];
            secondNumber[0]=theFirstEqu[1];
             theFirst[0]=parseFloat(firstNumber[0])+parseFloat(secondNumber[0]);
            numbers="";
            z=parseFloat(theFirst)-parseFloat(theLast[0]);
            numbers+=z;
            $(".the-field").val(numbers);
          firstNumber=[];
          secondNumber=[];
          operator=[];
          theLast=[];
          theFirst=[];

            
        }
        
    })
})



$(document).ready(function(){
    $(".result").on("click",function(){
        if(operator.length>2&&operator[0]=="+"&&operator[1]=="+"){
            
            let sliceStart=numbers.lastIndexOf(operator[1]);
            let theSlice=numbers.slice(sliceStart+1,numbers.length);
            console.log(theSlice);
            
            console.log(firstNumber[0]);
            console.log(secondNumber[0]);
           if(operator[operator.length-1]=="*"){
            let theLastEquation=theSlice.split("*");
            firstNumber[0]=theLastEquation[0];
            secondNumber[0]=theLastEquation[1];
                theLast[0]=parseFloat(firstNumber[0])*parseFloat(secondNumber[0]);
               operator.splice(-1,1);
               firstNumber=[];
               secondNumber=[];
            }if(operator[operator.length-1]=="/"){
                let theLastEquation=theSlice.split("/");
            firstNumber[0]=theLastEquation[0];
            secondNumber[0]=theLastEquation[1];
                theLast[0]=parseFloat(firstNumber[0])/parseFloat(secondNumber[0]);
                operator.splice(-1,1);
                firstNumber=[];
               secondNumber=[];
            }
            console.log(operator);
            let theFirstSlice=numbers.slice(0,numbers.indexOf(operator[-1]));
            let theFirstEqua=theFirstSlice.split("+");
            firstNumber[0]=theFirstEqua[0];
            secondNumber[0]=theFirstEqua[1];
             theFirst[0]=parseFloat(firstNumber[0])+parseFloat(secondNumber[0]);
            console.log(theFirst);
            numbers="";
            z=parseFloat(theFirst[0])+parseFloat(theLast[0]);
            numbers+=z;
            $(".the-field").val(numbers);
          firstNumber=[];
          secondNumber=[];
          operator=[];
          theLast=[];
          theFirst=[];

            
        }
        
    })
})

console.log(theLast);


$(document).ready(function(){
    $(".result").on("click",function(){
        if(operator.length>2&&operator[0]=="-"&&operator[1]=="-"){
            
            let sliceStart=numbers.lastIndexOf(operator[1]);
            let theSlice=numbers.slice(sliceStart+1,numbers.length);
            console.log(theSlice);
            
            console.log(firstNumber[0]);
            console.log(secondNumber[0]);
           if(operator[operator.length-1]=="*"){
            let theLastEquation=theSlice.split("*");
            firstNumber[0]=theLastEquation[0];
            secondNumber[0]=theLastEquation[1];
                theLast[0]=parseFloat(firstNumber[0])*parseFloat(secondNumber[0]);
               operator.splice(-1,1);
               firstNumber=[];
               secondNumber=[];
            }if(operator[operator.length-1]=="/"){
                let theLastEquation=theSlice.split("/");
            firstNumber[0]=theLastEquation[0];
            secondNumber[0]=theLastEquation[1];
                theLast[0]=parseFloat(firstNumber[0])/parseFloat(secondNumber[0]);
                operator.splice(-1,1);
                firstNumber=[];
               secondNumber=[];
            }
            console.log(operator);
            let theFirstSlice=numbers.slice(0,numbers.indexOf(operator[-1]));
            let theFirstEqua=theFirstSlice.split("-");
            firstNumber[0]=theFirstEqua[0];
            secondNumber[0]=theFirstEqua[1];
             theFirst[0]=parseFloat(firstNumber[0])-parseFloat(secondNumber[0]);
            console.log(theFirst);
            numbers="";
            z=parseFloat(theFirst[0])-parseFloat(theLast[0]);
            numbers+=z;
            $(".the-field").val(numbers);
          firstNumber=[];
          secondNumber=[];
          operator=[];
          theLast=[];
          theFirst=[];

            
        }
        
    })
})





$(document).ready(function(){
    $(".result").on("click",function(){
        if(operator.length>2&&operator[0]=="-"&&operator[1]=="-"){
            
            let sliceStart=numbers.lastIndexOf(operator[1]);
            let theSlice=numbers.slice(sliceStart+1,numbers.length);
            console.log(theSlice);
            
            console.log(firstNumber[0]);
            console.log(secondNumber[0]);
           if(operator[operator.length-1]=="*"){
            let theLastEquation=theSlice.split("*");
            firstNumber[0]=theLastEquation[0];
            secondNumber[0]=theLastEquation[1];
                theLast[0]=parseFloat(firstNumber[0])*parseFloat(secondNumber[0]);
               operator.splice(-1,1);
               firstNumber=[];
               secondNumber=[];
            }if(operator[operator.length-1]=="/"){
                let theLastEquation=theSlice.split("/");
            firstNumber[0]=theLastEquation[0];
            secondNumber[0]=theLastEquation[1];
                theLast[0]=parseFloat(firstNumber[0])/parseFloat(secondNumber[0]);
                operator.splice(-1,1);
                firstNumber=[];
               secondNumber=[];
            }
            console.log(operator);
            let theFirstSlice=numbers.slice(0,numbers.indexOf(operator[-1]));
            let theFirstEqua=theFirstSlice.split("-");
            firstNumber[0]=theFirstEqua[0];
            secondNumber[0]=theFirstEqua[1];
             theFirst[0]=parseFloat(firstNumber[0])-parseFloat(secondNumber[0]);
            console.log(theFirst);
            numbers="";
            z=parseFloat(theFirst[0])-parseFloat(theLast[0]);
            numbers+=z;
            $(".the-field").val(numbers);
          firstNumber=[];
          secondNumber=[];
          operator=[];
          theLast=[];
          theFirst=[];

            
        }
        
    })
})





$(document).ready(function(){
    $(".result").on("click",function(){
        if(operator.length>2&&operator[0]=="-"&&operator[1]=="+"){
            
            let sliceStart=numbers.lastIndexOf(operator[1]);
            let theSlice=numbers.slice(sliceStart+1,numbers.length);
            console.log(theSlice);
            
            console.log(firstNumber[0]);
            console.log(secondNumber[0]);
           if(operator[operator.length-1]=="*"){
            let theLastEquation=theSlice.split("*");
            firstNumber[0]=theLastEquation[0];
            secondNumber[0]=theLastEquation[1];
                theLast[0]=parseFloat(firstNumber[0])*parseFloat(secondNumber[0]);
               operator.splice(-1,1);
               firstNumber=[];
               secondNumber=[];
            }if(operator[operator.length-1]=="/"){
                let theLastEquation=theSlice.split("/");
            firstNumber[0]=theLastEquation[0];
            secondNumber[0]=theLastEquation[1];
                theLast[0]=parseFloat(firstNumber[0])/parseFloat(secondNumber[0]);
                operator.splice(-1,1);
                firstNumber=[];
               secondNumber=[];
            }
            console.log(operator);
            let theFirstSlice=numbers.slice(0,numbers.indexOf(operator[-1]));
            let theFirstEqua=theFirstSlice.split("-");
            firstNumber[0]=theFirstEqua[0];
            secondNumber[0]=theFirstEqua[1];
             theFirst[0]=parseFloat(firstNumber[0])-parseFloat(secondNumber[0]);
            console.log(theFirst);
            numbers="";
            z=parseFloat(theFirst[0])+parseFloat(theLast[0]);
            numbers+=z;
            $(".the-field").val(numbers);
          firstNumber=[];
          secondNumber=[];
          operator=[];
          theLast=[];
          theFirst=[];

            
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
            $(".delete ,.reset").css({
                "background":"hsl(222, 26%, 31%)",
                "color":"white",
            });
            $(".the-header").css({
                "color":"white",
                "fontSize":"20px",
            });
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
            $(".button,.delete").css({
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
            $(".button").css({
                "color":"hsl(224, 36%, 15%)",
                "background":"white",
                "fontSize":"20px",
            })
            $(".delete,.reset").css({
                "background":"hsl(222, 26%, 31%)",
                "color":"white",
            });
            $(".the-header").css({
                "color":"white",
                "fontSize":"20px",
            });
            $(".result").addClass("btn-danger");
        }if($(".form-range").val()==3){
            document.body.style.background="hsl(268, 75%, 9%)";
            $(".buttons").css("background","hsl(268, 71%, 12%)");
            $(".the-field").css({
               "background":"hsl(268, 71%, 12%)",
                "color":"hsl(52, 100%, 62%)",
                "fontSize":"20px",
                "paddingLeft":"20px",
            })
            $(".button , .delete").css({
                "color":"hsl(52, 100%, 62%)",
                "background":"hsl(281, 89%, 26%)",
                "fontSize":"20px",
            })
            $(".the-header").css({
                "color":"hsl(52, 100%, 62%)",
                "fontSize":"20px",
            })
            $(".reset,.delete").css({
                "background":"hsl(185, 42%, 37%)",
                "color":"white",
            })
            $(".result").removeClass("btn-danger").css({
                "background":"hsl(25, 98%, 40%)",
                "color":"white",
            })
        }
    })
    
})


//add the equation terms by keyboard
$(document).ready(function(){
    $(".the-field").on("keyup",function(e){
        if(e.keyCode===96){
            numbers+="0";
        }if(e.keyCode===97){
            numbers+="1";
        }if(e.keyCode===98){
            numbers+="2";
        }if(e.keyCode===99){
            numbers+="3";
        }if(e.keyCode===100){
            numbers+="4";
        }if(e.keyCode===101){
            numbers+="5";
        }if(e.keyCode===102){
            numbers+="6";
        }if(e.keyCode===103){
            numbers+="7";
        }if(e.keyCode===104){
            numbers+="8";
        }if(e.keyCode===105){
            numbers+="9";
        }
   if(e.keyCode===107){
        operator.push("+");
        numbers+="+";
    }if(e.keyCode===111){
        operator.push("/");
        numbers+="/";
    }if(e.keyCode===106){
        operator.push("*");
        numbers+="*";
    }if(e.keyCode===109){
        operator.push("-");
        numbers+="-";
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