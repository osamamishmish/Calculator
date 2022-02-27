var numbers="";
var operator=[];
let firstNumber=[];
let secondNumber=[];
let m=[];
let d=[];
let p=[];
let s=[];
let firstPlus=[];
let secondPlus=[];
let firstSubtract=[];
let secondSubtract=[];
let firstDivide=[];
let secondDivide=[];
let firstMultiple=[];
let secondMultiple=[];
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
    $(".button").on("click",function(){
        if(operator[0]=="*"&&operator.length==2){
            let theMultiple=numbers.indexOf("*");
                let theMultipleSlice=numbers.slice(theMultiple-1,theMultiple+2);
                let  equationTerms=theMultipleSlice.split("*");
                firstNumber[0]=equationTerms[0];
                secondNumber[0]=equationTerms[1];
                m.push(parseFloat(firstNumber[0])*parseFloat(secondNumber[0]));
               numbers.replace(numbers.charAt(numbers.indexOf(firstNumber[0])),"");
                 numbers.replace(numbers.charAt(numbers.indexOf(secondNumber[0])),"");
                 numbers.replace(numbers.charAt(numbers.indexOf(operator[0])),"");
                 let multipleIndex=operator.indexOf("*");
                 //let deleteFromNum=numbers.indexOf("*");
                 
                 operator.splice(multipleIndex,1);
                 firstNumber=[];
                 secondNumber=[];
              // return  $(".the-field").val(m[0]+operator[0]);
              numbers=m[0]+operator[0];
               return  $(".the-field").val(numbers);
        }else{
            let multipleIndex=operator.indexOf("*");
            if(multipleIndex>0&&operator.length>2){
                let theMultiple=numbers.indexOf("*");
                let theMultipleSlice=numbers.slice(theMultiple-1,theMultiple+2);
                let  equationTerms=theMultipleSlice.split("*");
                firstNumber[0]=equationTerms[0];
                secondNumber[0]=equationTerms[1];
                m.push(parseFloat(firstNumber[0])*parseFloat(secondNumber[0]));
            numbers=numbers.slice(0,theMultiple-1);
            console.log(numbers);
                 let multipleIndex=operator.indexOf("*");
                 operator.splice(multipleIndex,1);
                 firstNumber=[];
                 secondNumber=[];
                  z= numbers+m[0]+operator[operator.length-1]
                 $(".the-field").val(z);
                 numbers=z;
                 
            }
        }
    })
})












$(document).ready(function(){
    $(".result").on("click",function(){
            if(operator.length>1){
               
                
                console.log("terms",equationTerms[0]);
                 
                /* firstNumber[0]=m;
                 secondNumber=[];*/
                 console.log("m",m);
                // let multiple=m.toString();
                
                 
                
              /*  }else{
                    m=0;
                    
                }*/
                 
               /* let multipleIndex=operator.indexOf("*");
                operator.splice(multipleIndex,1);*/
                 let theDivision=numbers.indexOf("/");
                 let theDivisionSlice=numbers.slice(theDivision-1,theDivision+2);
                 equationTerms=theDivisionSlice.split("/");
                 firstNumber[0]=m[0];
                 secondNumber[0]=equationTerms[1];
                  d[0]=parseFloat(firstNumber[0])/parseFloat(secondNumber[0]);
                //  let divide=d.toString();
                 numbers.replace(numbers.charAt(numbers.indexOf(firstNumber[0])),d[0]);
                 numbers.replace(numbers.charAt(numbers.indexOf(secondNumber[0])),"");
                 firstNumber=[];
                 secondNumber=[];
                 let divideIndex=operator.indexOf("/");
                 operator.splice(divideIndex,1);
                let theSummation=numbers.indexOf("+");
                    let theSumSlice=numbers.slice(theSummation-1,theSummation+2);
                    equationTerms=theSumSlice.split("+");
                    firstNumber[0]=d[0];
                    secondNumber[0]=equationTerms[1];
                     p[0]=parseFloat(firstNumber[0])+parseFloat(secondPlus[0]);
                     //let plus=p.toString();
                     numbers.replace(numbers.charAt(numbers.indexOf(firstNumber[0])),p[0]);
                     numbers.replace(numbers.charAt(numbers.indexOf(secondNumber[0])),"");
                    firstNumber=[];
                    secondNumber=[];
                    let sumIndex=operator.indexOf("+");
                    operator.splice(sumIndex,1);

                    let theSubstract=numbers.indexOf("-");
                    let theSubstractSlice=numbers.slice(theSubstract-1,theSubstract+2);
                    equationTerms=theSubstractSlice.split("-");
                    firstNumber[0]=p[0];
                    secondNumber[0]=equationTerms[1];
                    // s=parseFloat(firstNumber[0])-parseFloat(secondNumber[0]);
                   //  firstNumber[0]=[s];
                    // secondNumber=[];
                     z=parseFloat(firstNumber[0])-parseFloat(secondNumber[0]);
                     numbers="";
                     firstNumber=[];
                     secondNumber=[];
                     operator=[];
                     numbers+=z;
                     return $(".the-field").val(z);
            }
       
    })
})







//long equation
/*$(document).ready(function(){
        $(".result").on("click",function(){
            if(operator.length>1){
            
            z=m+d-s;
            return $(".the-field").val(z);       
    }
})
    
})*/




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