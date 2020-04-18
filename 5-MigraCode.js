/*
MigraCode

Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Migra" instead of the
number, and for numbers divisible by 5 (and not 3), print "Code" instead.

When you have that working, modify your program to print "MigraCode" for
numbers that are divisible by both 3 and 5 (and still print "Migra" or "Code"
for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)
*/
//Complete

function printnumber(){
    for(x=1; x <=100; x++){
     if(x % 3 ===0 && x % 5 === 0 ){
       console.log(x + " Migracode")
     } else if(x % 3 ===0){
       console.log(x + " Migra")
     } else if( x % 5 === 0){
       console.log(x + " Code")
     }
   }
   }

printnumber()