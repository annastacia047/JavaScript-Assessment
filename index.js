//1.Question 1
 let a=-5;
 let b=-2;
 let c=-6;
 let d= 0;
 let e=-1;
if (a>b && a>c && a>d && a>e)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>e)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>e)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>e)
{
    console.log(d);
}
else
{
    console.log(e);
} 

 //2.
for ( let  i = 1; i <= 100; i++ )
 {
   if ( i%3 === 0 && i%5 === 0 )
   {
     console.log( i + " FizzBuzz" );
   }
   else if ( i%3 === 0 ) 
   {
     console.log(i+ " Fizz" );
   }
   else if ( i%5 === 0 ) 
   {
     console.log(i+ " Buzz" );
   }
   else
   {
     console.log(i);
   }
 }

 


//3.
 
let str = "1"; 
str = + !str; 
Console.log(typeof str ); 

// when you run the code, you get uncaught reference error in the console 
//as the datatype of our variable has not been assigned a value