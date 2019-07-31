// assign a value to x for finding the factorial of a number using javascript
var x=52;


//pass the value of x to the function factorial by calling it.
factorial(x);

// function to calculate the factorial of a number using javascript
function factorial(y) {
   var num=0,i=0,fact=1;// variables
    num=y; 
    for(i=1;i<=num;++i){//for loop from 1 to less than the x value.
        fact=fact*i;    //logic
       
        
    };
    console.log(fact); //output on console.
}
