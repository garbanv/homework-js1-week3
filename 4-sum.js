/*
Sum
If we sum all even numbers between 50 and 100 what is the result?
Build a function, that calculates the sum of all even numbers between a start number and end number
*/
const numbers = [1,2,3,4,5,6,7,8,9];
let valor=0;
function sum(arr){

for(x=0; x < arr.length; x++){
    if(arr[x] % 2 === 0){
        valor += arr[x];
    }
}
  return valor;
  console.log (valor);
}

sum(numbers);