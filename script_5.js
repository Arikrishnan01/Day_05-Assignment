// Using the anonymous functions
1.Print the odd number using the anonymous function on array:

let array=[1,2,3,4,5,6,7,8,9,10];       // Input array
let odd_number=function(array){           // Using Anonymous function
   for(let i=0;i<array.length;i++)
   {
       if(array[i] % 2 !=0)         // Checking the condition
       {
            console.log(array[i]);
       }
   }
}
odd_number(array);                  // Function calling

Output:

1
3
5
7
9

2.Every string is capitalize anonymous function on array:


    // User Input Array here

    let  array=["ari","ram","sam"];
    let arr_capital=function(array){          //anonymous function
        for(var i=0;i<array.length;i++)     //Using the normal for loop
        {
            array[i]=array[i].charAt(0).toUpperCase() + array[i].slice(1);
           
        }
        let array_2=array.join(" ");
        console.log(array_2);
    }
    arr_capital(array);                 // Invoking the function or  calling

    Output:

    Ari Ram Sam

    3. Print the sum of the array using anonymous function:

    let array=[10,20,30,40,50];         //Input Array values
   var sum=0;
   let sum_array=function(array){             //Using anonymous Function
     
       for(let i=0;i<array.length;i++)
       {
           
           sum=sum+array[i];            // sum of array values
           
       }
       console.log(sum);
   }
   sum_array(array);                    // Function calling

   Output:

   150          // 10 + 20 + 30 + 40 + 50 =150


   4.Return the all string plindrom n a array using the anonymous function:

   var array=["nayan","mam"];                 //userInput of array String
    var array_01=array[0];
    let array_02=array[1];
    var arr_split_01=array_01.split("");        //Split the perticular array  
    var arr_reversed=arr_split_01.reverse();    //reverse the splited string values
    let arr_split_02=array_02.split("");
    let arr_reversed_02=arr_split_02.reverse();
    var arr_polidrom=function(arr_reversed,arr_reversed_02){  //Using the anonymous function
        console.log(`${arr_reversed.join("")}  ${ arr_reversed_02.join("")}`); 
    }
    
    
    //console.log(arr_reversed_02.join(""));
    arr_polidrom(arr_reversed,arr_reversed_02); // Invoking or calling the function
    

    Output:

    nayan  mam





3. Using the Arrow Function:

1.Print the odd Number an Array:

let array=[1,2,3,4,5,6,7,8,9,10];       // Input array
    let odd_number=(array)=>{           // Using arrow function
       for(let i=0;i<array.length;i++)
       {
           if(array[i] % 2 !=0)         // Checking the condition
           {
                console.log(array[i]);
           }
       }
    }
    odd_number(array);                  // Function calling

    Output :
    1
    3
    5
    7
    9   


    2.Every string is capitalize on array:


    // User Input Array here

    let  array=["ari","ram","sam"];
    let arr_capital=(array)=>{          //Arrow function
        for(var i=0;i<array.length;i++) //Using the normal for loop
        {
            array[i]=array[i].charAt(0).toUpperCase() + array[i].slice(1);
           
        }
        let array_2=array.join(" ");
        console.log(array_2);
    }
    arr_capital(array);                 // Invoking the function or  calling

    Output:

    Ari Ram Sam  
   

    3. Print the sum of the array using Arrow function:

    let array=[10,20,30,40,50];         //Input Array values
   var sum=0;
   let sum_array=(array)=>{             //Using Arrow Function
     
       for(let i=0;i<array.length;i++)
       {
           
           sum=sum+array[i];            // sum of array values
           
       }
       console.log(sum);
   }
   sum_array(array);                    // Function calling

   Output:

   150          // 10 + 20 + 30 + 40 + 50 =150


   4.Return the all string plindrom n a array:

   var array=["nayan","mam"];                 //userInput of array String
    var array_01=array[0];
    let array_02=array[1];
    var arr_split_01=array_01.split("");        //Split the perticular array  
    var arr_reversed=arr_split_01.reverse();    //reverse the splited string values
    let arr_split_02=array_02.split("");
    let arr_reversed_02=arr_split_02.reverse();
    var arr_polidrom=(arr_reversed,arr_reversed_02)=>{  //Using the arrow function
        console.log(`${arr_reversed.join("")}  ${ arr_reversed_02.join("")}`); 
    }
    
    
    //console.log(arr_reversed_02.join(""));
    arr_polidrom(arr_reversed,arr_reversed_02); // Invoking or calling the function
    

    Output:

    nayan  mam