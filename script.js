// const data = [
//     { name: "john", age: 24, profession: "developer" },
//     { name: "jane", age: 27, profession: "admin" },
//   ];
  
//   // 1. Print Developers
//   function printDeveloper() {}
  
//   // 2. Add Data
//   function addData() {}
  
//   // 3. Remove Admins
//   function removeAdmin() {}
  
//   // 4. Concatenate Array
//   function concatenateArray() {}
  
//   // 5. Average Age
//   function averageAge() {}
  
//   // 6. Age Check
//   function checkAgeAbove25() {}
  
//   // 7. Unique Professions
//   function uniqueProfessions() {}
  
//   // 8. Sort by Age
//   function sortByAge() {}
  
//   // 9. Update Profession
//   function updateJohnsProfession() {}
  
//   // 10. Profession Count
//   function getTotalProfessions() {}






// let arr = [
//     { id: 1, name: 'Anuj', age: 22, profession: 'developer' },
//     { id: 2, name: 'Shikha', age: 25, profession: 'developer' },
//     { id: 3, name: 'Anushka', age: 20, profession: 'admin' },
//   ];
  
//   // Don't worry about consoling these functions, they are already being called on the button clicks.
//   // Please don't change anything in the index.html file.
  
//   function PrintDeveloper() {
//     //Write your code here , just console.log
//     const developers = arr.filter(person => person.profession === 'developer');
//     const developerNames =  developers.map(person => person.name);
//     console.log('Developer Name:', developerNames);
//   }
  
//   function addData() {
//     //Write your code here, just console.log
//     const newData = {id: 3, name: 'Harry', age: 22, profession: 'HR'};
//     arr.push(newData);
//     console.log('New Data Added:', newData);
//   }
  
//   function removeAdmin() {
//     //Write your code here, just console.log
//     const filteredData = arr.filter(person => person.profession !== 'admin');
//     console.log('Array with Admins removed:', filteredData);
    
//   }
  
//   function concatenateArray() {
//     //Write your code here, just console.log
//     const newArr = [
//       {id: 5, name: 'Ashish', age: 23, profession: 'lawyer'},
//       {id: 6, name: 'Sagar', age: 26, profession: 'IAS'}
//     ];
  
//     const concatenatedArray = arr.concat(newArr);
//     console.log('Concatanated Array:', concatenatedArray);
//   }
  
//   // Here is an example of how functions work,
//   // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
//   // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
//   function consoleArr() {
//     console.log('Consoling Array Variable', arr);
//     // Over here I can directly access the variable.
//   }






let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    //   way1: using only map and if condition
    arr.map((item) => {
      item.profession == "developer" ? console.log(item) : null;
    });
    // Way2: using filter and then map
    const developers = arr.filter((item) => item.profession == "developer");
    developers.map((item) => console.log(item));
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((item) => {
      item.profession == "developer" ? console.log(item) : null;
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    const newemployee={id:4,name:"susan",age:"20",profession:"intern"};
    //way1
    arr.push(newemployee);
    //way2
    const updatedlist=[...arr,newemployee];
   
    console.log(updatedlist);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    //Shubham's code
    const update = arr.filter(item =>item.profession!="admin");
    arr = update;
    console.log(arr);
  
    //prince's code
    console.log(
      (arr = arr.filter((value) => {
        return value.profession !== "admin";
      }))
    );
  //Deepak's code
  arr=arr.filter((person)=>person.profession!=="admin");
  console.log(arr);
  
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newemployess = [
      { id: 1, name: "Deepak", age: "18", profession: "SDE" },
      { id: 2, name: "Prince", age: "22", profession: "Designer" },
      { id: 3, name: "Samiriddhi", age: "19", profession: "CEO" },
    ];
  
    const concatenatedArray=arr.concat(newemployess);
    console.log(concatenatedArray);
    arr=concatenatedArray;
  }
  
  //   Difference between Map, foreach, filter
  
  // Map method is used for tranforming elements into a new array
  // forEach method is used for performing operations on each element without creating a new array
  // Filter method is used for creating a new array with elements that meet a specific condition
  
  // Example of map function
  const names = [
    "Samiriddhi Kumari",
    "shubham Sharma",
    "Vishal pandey",
    "Deepak Kumar",
  ];
  const UppercaseNames = names.map((name) => name.toUpperCase());
  console.log(UppercaseNames);
  
  //Example of forEach function
  const expenselist = [120, 150, 100, 6000, 6700];
  let sum = 0;
  expenselist.forEach((item) => {
    sum += item;
  });
  console.log(sum);
  
  //Examples of filter function
  // condition: all expenses greater than 5000
  
  let higherexpense = expenselist.filter((item) => item < 5000);
  console.log(higherexpense);
  
  let expenseLit = [120, 150, 100, 6000, 670];
  
  expenseLit = expenseLit.filter((value) => {
    return value >= 5000;
  });
  console.log(expenseLit);
  
  const expences = expenselist.filter((item) => item >= 5000);
  console.log(expences);
  
  const newlist = expenselist.filter((item) => item > 5000);
  
  let newarr = expenselist.filter((item) => item >= 500);
  