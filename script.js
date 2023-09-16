const data = [
        { name: "john", age: 24, profession: "developer" },
        { name: "jane", age: 27, profession: "admin" },
      ];

// 1. Print Developers
function printDeveloper() {
    let found=false;
    for (let person of data) {
        if (person.profession === "developer") {
            found=true;
            console.log("Name : " + person.name + ", Age : " + person.age);
        }
    }
    if(found===false)
        console.log("No developer found");
}

// 2. Add Data
function addData() {
    let new_data = {};
    new_data.name = prompt("Enter Name : ");
    new_data.age = parseInt(prompt("Enter Age : "));
    new_data.profession = prompt("Enter Profession : ");
    data.push(new_data);
    // display entered data
    console.log(new_data);
}

// 3. Remove Admins
function removeAdmin() {
    let Admin = [];
    let notAdmin = [];

    for (let person of data) {
        if (person.profession === "admin") {
            Admin.push(person);
        } else {
            notAdmin.push(person);
        }
    }
    data.length = 0;
    data.push(...notAdmin);
    console.log("Removed Admins : ", Admin);
}

// 4. Concatenate Array
function concatenateArray() {
    let dummy = [{
            name: "Aditi",
            age: 23,
            profession: "developer"
        },
        {
            name: "Akash",
            age: 29,
            profession: "admin"
        }
    ];
    let concatenatedArray = data.concat(dummy);
    console.log("Concatenated Array : ",concatenatedArray);
}

// 5. Average Age
function averageAge() {
    let ageSum=0;
    for(let i =0;i<data.length;i++){
        ageSum+=data[i].age;
        }
    const avg = ageSum/data.length;
    console.log("Average Age :",avg);
}

// 6. Age Check
function checkAgeAbove25() {
    if (data.some((person) => person.age>25)) {
        console.log("Person above age 25 found");
    } 
    else {
        console.log("No one is above age 25");
    }
}

// 7. Unique Professions
function uniqueProfessions() {
    let person = [];
    for(let i=0;i<data.length;i++){
        if(person.includes(data[i].profession) === true) {
            continue;
        }
        else {
            person.push(data[i].profession);
        }
    }
    console.log(person);
}

// 8. Sort by Age
function sortByAge() {
    data.sort((x, y) => x.age - y.age);
    console.log("Sorted in Ascending Age : ",data);
}

// 9. Update Profession
function updateJohnsProfession() {
    data.forEach((person) => {
        if (person.name === "john") {
            //Updated John's Position
            console.log(`Updated ${person.name}'s profession to 'manager'`);
            person.profession = "manager";
        }
    });
}

// 10. Profession Count
function getTotalProfessions() {
    let proCount = {};
    data.forEach((person) => {
        if (proCount[person.profession]) {
            proCount[person.profession]++;
        } else {
            proCount[person.profession] = 1;
        }
    });
    console.log("Profession Counts :", proCount);
}
