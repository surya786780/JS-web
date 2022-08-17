// fundamentals 2

// for activate strict mode
// help to handle certain errors

"use strict";
// let check = false;
// if (true) check = true;
// console.log(check)

// let interface = 'hi'; // gives error -> strict mode is used else not show error
// console.log(interface);
// var private = 23;
// console.log(private);

// // because interface,private is keywords

//  Function (declarations)
// var year = document.getElementById('agecal').value;
// function age() {

//     if (year > 2022) {
//         document.getElementById('res').innerText = "you're not born 😒 still now";
//     }
//     else {
//         var res = 2022 - year;
//         document.getElementById('res').innerText = "Your Age is : "+res;
//     }
// }
// document.write(2022 - year);

// ************ ordinary function

// let age = findAge(2000);
// function findAge(year) {
//     return year * 2;
// }
// console.log(age);

// ***************      Anonymous function (function expression)
// const cal = function (year) {
//     return year;
// }
// let age2 = cal(2000);
// console.log(age, age2);

// ^^^^^^^^^^^^^        Arrow Function

// var age3 = birthyear => 2022 - birthyear;
// console.log(age3(2000));

// var age4 = birthyear => {
//     var loss_job = 2022 - birthyear;
//     // console.log(65 - loss_job);
//     return 65 - loss_job;
// }
// var retire_in = age4(2000);
// console.log("you retire in: ",retire_in);

// function myFunction() {
//     document.getElementById("fname").value=document.getElementById("fname").value.toUpperCase();
// }

// **********   function call inside another function
// function one(num)
// {
//     return num*num;
// }
// function two(o,t)
// {
//     let val1 = one(o); // one function call with value
//     let val2 = one(t);
//     return val1+val2;
// }
// console.log(two(2,4));

// ************      ARRAYS
// const arr = new Array(1, 2, 3, 4)
// console.log(one);
// one[0] = 0;
// // console.log(one);
// const all = ["surya", "mugesh", 4444, arr];
// console.log(all);

//  **************`     store value in array using function
// function userAges()
// {
//     var ul = document.createElement("ol");
//     ul.style.cssText = 'height: 100px; width: 100px; border: 1px solid goldenrod; margin:5px; padding-top:15px';
//     document.body.appendChild(ul);
//     const calAge = birthage => {return 2022 - birthage};
//     const birthyear=[1999,2000,2002,1998]
//     const ages = new Array();
//     for(let i=0;i<birthyear.length;i++)
//     {
//         var li = document.createElement("li");
//         li.innerHTML = ages[i]=calAge(birthyear[i]);
//         ul.appendChild(li);
//     }
//     // ages[4]=4;
//     // console.log(ages);

// }

//  *******************   OBJECTS
// const obj = {
//     fname : 'surya',
//     lname : 'kumar',
//     age : 22,
//     study : ['dipl','BE'],
//     dept : {
//         dipl:"CE",
//         be:"CSE"
//     }
// }

// // dot notation
// console.log(obj.study);
// console.log(obj.study[1]);
// console.log(obj.dept.dipl);

// // bracket notation
// console.log(obj['fname']);
// console.log(obj['dept']['be']);

// bracket notation using variable
// const objvar = {
//     firstName:"surya",
//     lastName:"kumar"
// }
// const namevar="Name";
// console.log(objvar['first'+namevar]);
// console.log(objvar['last'+namevar]);

// PROMPT USING OBJECTS
// const surya = {
//         firstName : 'surya',
//         lastName : 'kumar',
//         age : 22,
//         job : "Software Engineer",
//         skills : ["java","JS","python"]
// }
// const intrestedIn = prompt("Do you want to know about surya's firstName, lastName, age, job, skills");

// if(surya[intrestedIn])
//     console.log(surya[intrestedIn]);
// else
//     console.log("Enter correct option");

// retrieve element
// const loc = String(prompt("Enter your location"))
// surya.location=loc;
// const clg = String(prompt("Enter your College name"))
// surya['college'] = clg;
// console.log(surya);

// console.log(surya.firstName+ " has " +surya.skills.length + " skills but well known skill is "+ surya.skills[0]);
// console.log(`${surya.firstName} has ${surya.skills.length} skills but not well in ${surya.skills[2]}`);

//  OBJECT METHOD
// const surya = {
//     firstName : 'surya',
//     lastName : 'kumar',
//     age : 22,
//     job : "Software Engineer",
//     skills : ["java","JS","python"],
//     license:false,

//     calcYear : function(s)
//     {
//         return 2022 - s;
//     },

// calc_age : function()
// {
//     console.log("THIS KEYWORD HAVES \n",this);  // this -> is a whole object
//     return this.calcYear(this.age);
// },

//  store the function values and dont call the function again and again
//     calc_age : function()
//     {
//         this.byear = this.calcYear(this.age); // create a new variable using this keyword and assign a value
//         return this.byear;
//     },

//     getSummary : function()
//     {
//         if(this.age > 18)
//         this.license = true;
//         return `${surya.firstName} is born in ${surya.byear} and he has ${surya.license  ? 'a' : 'no'} license`;
//     }
// }
// console.log(surya.calcYear(22))
// console.log(surya['calcYear'](surya.age))
// console.log("assign year using this in function ",surya.calc_age());
// console.log("birth year is ",surya.byear);
// console.log(surya);

// surya.calc_age();
// console.log(surya.getSummary());
