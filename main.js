/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  // Challenge 1 Code

  let index1 = 0;

  while (index1 < students.length)
    {
      console.log(students[index1]);
      index1++;
      
    }


  console.log("\n");
  console.log("Challenge 2");
  // Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  const grades = [100, 80, 110, 75, 83, 64];
  //Challenge 2 Code

  let myGrades = grades.reverse();
  let index2 = 0;

  while (index2 < grades.length)
  {
    console.log(myGrades[index2]);
    index2++;
  }


  console.log("\n");
  console.log("Challenge 3");
  // Challenge 3
  // Console.log out only the even numbers in the following array.
  const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
  // Challenge 3 Code


  let numPos = positiveNumbers.filter((n) => n % 2 == 0)
  let index3 = 0;
  

  while (numPos.length > index3)
      {
      console.log(numPos[index3]);
      index3++;
       }      
  

  console.log("\n");
  console.log("Challenge 4");
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
  const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  // Challenge 4 Code

  let numPos1 = mixedSignNumbers.filter((n) => n % 2 == 0)
  let index4 = 0;
  

  while (numPos1.length > index4)
      {
      console.log(numPos1[index4]);
      index4++;
       }     



  
  console.log("\n");
  console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
  const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  // Challenge 5 Code


  symmetricalCapitals.shift();
  symmetricalCapitals.shift();
  symmetricalCapitals.pop();
  let index5 = 0;

  while (symmetricalCapitals.length > index5)
  {
  console.log(symmetricalCapitals[index5]);
  index5++;
  }




  console.log("\n");
  console.log("Challenge 6");
  // Challenge 6
  // Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
  const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  // Challenge 6 Code


  let index6 = 0;
  let fib = fibonacciNumbers
  fib.unshift(0);
  fib.push(21);
  fib.push(34);
  

  while(fib.length > index6)
   {
    console.log(fib[index6]);
    index6++;
   }




  console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  // Challenge 7 Code
  const newArray = [5, 4, 5, 7, 4]
  let index7 = 0;

  while(newArray.length > index7)
   {
    console.log(newArray[index7]);
    index7++;
   }




  console.log("\n");
  console.log("Challenge 8");
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  const emptyArray = [];
  // Challenge 8 Code



  let newArray2 = emptyArray
  newArray2.push(5,3,2)
  newArray2.unshift(3,2,2)
  let index8 = 0;
  while(newArray2.length > index8)
  {
   console.log(newArray2[index8]);
   index8++;
  }






  console.log("\n");
  console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  // Challenge 9 Code
  

 let students2 = students.slice(3, 10)
 let index9 = 0;

 while(students2.length > index9)
 {
  console.log(students2[index9]);
   index9++;
 } 







  
  console.log("\n");
  console.log("Challenge 10");
  // Challenge 10
  // Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
  // Do NOT use slice, you will be using that for the next challenge!
  // Challenge 10 Code

 let cut1 = students.splice(0,3)
 let cut2 = students.splice(10)
 let finalCut = cut1.concat(cut2);
 let index10 = 0;
 
 while (finalCut.length > index10)
{
  console.log(finalCut[index10]);
  index10++;
}
 


  console.log("\n");
  console.log("Challenge 11");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  // Challenge 11 Code
  
  let index11 = 0;
  let newSlice = students.slice(3,10);

  while (students.length > index11)
     {
       console.log(newSlice[index11]);
       index11++;
       while (students.length > index11)
    {
      console.log(students[index11])
      index11++;
    }
     }
    


  console.log("\n");
  console.log("Challenge 12");
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  // Challenge 12 Code

  let index12 = 0;
  let spliceDino = dinosaurs.splice(4,6);
  while(index12 < dinosaurs.length)
  {
    
    console.log(spliceDino[index12] + " " + dinosaurs[index12]);
    index12++;
    
  }
  
  
  
  
  
  console.log("\n");
  console.log("Challenge 13");
  // Challenge 13
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  // Challenge 13 Code

  
 
  console.log(dinosaurs.join("*"));
  
  

  
  console.log("\n");

  console.log("Challenge 14");
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 14 Code
   let index14 = 0;

   
      console.log(`this is the original array: ${dinosaurs} `);
      console.log (` this is the array reversed ${dinosaurs.reverse()}`)
    


  
  console.log("\n");
  console.log("Challenge 15");
  // Challenge 15
  // Create two new arrays.
  // Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  // Challenge 15 Code

 let arrayNew1 = ["cat", "mouse", "turtle", "horse", "dog"]
 let arrayNew2 = ["cheese", "milk", "apples", "eggs", "ham"]
 let index15 = 0;
 let arrayNew3 = [];
  
 while(index15 < arrayNew2.length)
 {
  arrayNew3 = arrayNew1.concat(arrayNew2[index15]);
  console.log(arrayNew2[index15]);
  index15++;
 }
  index15 = 0;
  while (index15 < arrayNew3.length)
  
  {
   console.log(arrayNew3[index15]);
   index15++;

  } 
