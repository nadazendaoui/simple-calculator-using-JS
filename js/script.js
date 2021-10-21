
$(document).ready(function() {
    var firstNumber =0;
    var secondNumber = 0;
    var displayedNumber = ""; 
    var opreation = "";
    var result = "";
    $("button").click(function(){
        
        var btn = $(this).attr("value");
        switch(btn){
            case "ac" :
                 firstNumber = 0;
                 secondNumber = 0;
                displayedNumber = 0; 
                opreation = "";
                $('p').html(displayedNumber);

            break;
            case "del":
                displayedNumber = $("p").html();
                $("p").html(displayedNumber.substring(0, displayedNumber.length - 1));
            break;
            case "+":
                firstNumber = $("p").html();
                opreation = "+";
                $("p").html("0");
                console.log(firstNumber+" "+opreation);
            break;
            
            case "-":
                firstNumber = $("p").html();
                opreation = "-";
                $("p").html("0");
                console.log(firstNumber+" "+opreation);
            break;
            
            case "/":
                firstNumber = $("p").html();
                opreation = "/";
                $("p").html("0");
                console.log(firstNumber+" "+opreation);
            break;
            case "*":
                firstNumber = $("p").html();
                opreation = "*";
                $("p").html("0");
                console.log(firstNumber+" "+opreation);
            break;
            case "=":
                secondNumber = $("p").html();
                result =eval( firstNumber+opreation+secondNumber);
                console.log(firstNumber+opreation+secondNumber)
                $("p").html(result);
                
            break;
            default:
              var value = $("p").html();
              if(value.length>1 && value[0]=="0"){
                while(value.charAt(0) === '0')
                {
                    value = value.substring(1);
                }
              }
               displayedNumber=value+ btn;
               $('p').html(displayedNumber);
            break;
                
            
            
            
            
                

            

        }
    }); 
});