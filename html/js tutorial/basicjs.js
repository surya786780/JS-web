// document.write("SURYA");
// console.log("Welcome");

// objects // key,value 
// let obj1= {id:4,
//     name:"surya",
//     dept:"CSE",
//     address:{
//         place:"cauvery rs",
//         city:"pallipalayam"
//     }    
// };
// console.log(obj1.address.city);

// arrays
// let fav=[]; // empty array
// let f_color = ["blue","black","white"];
// f_color[3] = "green"; 
// console.log(f_color);

// function
// function user(name,age){        // func declaration
//     let msg = "i am "+name+" age is "+age;
//     console.log(msg);
// }
// function mark(m1,m2){ // func declaration
//     let marks = " mark 1 is "+m1+" m2 is "+m2;
//     console.log(marks);
// }
// user("surya",22);
// mark(99,98);   // func call
// user("kumar",21);
// mark(95,94);

// operator
// Arithmetic
// +,-,*,/,%,**(pow),++(increment),--(decrement)
// let a=2;
// let b=4;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(b/a);
// console.log(b%a);
// console.log(a**b);
// console.log(++a);
// console.log(--b);

// assignment opt (=)
// console.log(a+=b);
// console.log(a-=b);
// console.log(a*=b);
// console.log(a/=b);

// comparison opt (<,>,<=,>=) returns boolean(true or false)
// let val = 4;
// console.log(val==4); // or use ==  
// console.log(val!=4); // or use != 

// ----------string comparison
// console.log('sc' <= 'sb');
// console.log('A' > 'A ');
// console.log('15' < 20); // converts char 15 to num 15
// console.log(true == 0); // boolean comparison //op is false

// ----------equality comparision
// strict equality ( === ) operand 1 and 2 have the same value and data type
// console.log(1===1); // both 1 same data type and value // true
// console.log('1'===1); // both 1 diff data type but same value // false
// lose equality ( == )
// console.log(1==1); // all gives true
// console.log('1'==1);
// console.log(true=='1');

// --------ternary operator 
// console.log(5>10 ? 5 : 10); 
// let age = 18;
// console.log(age>=18 ? "adult" : "not adult"); //

// -----------logical operator 
// (|| - logical or) , (&& - logical and) , (! - not)
// console.log(true && true); // both true
// console.log(true || false); // any one is true
// console.log(!true); 

// -------falsy // both operand is boolean gives bool value 
// else check 
// undefined, null ,0 ,false ,"" , '' ,NaN(not a number)
// console.log('surya' || false ); // gives the value
// console.log(false || 3);

//------- truthy // both operand is boolean gives bool value 
// else check 
// anything that is not in falsy is truthy
// console.log(true || 'surya'); // gives the boolean
// console.log(true || 3); 

// ----------DOM in js
// function first() {
//    var first = document.getElementById("one").innerHTML;
//    document.write(first="welcome");
// //    alert(first="welcome");
// }

//--------- complex object & for in loop using object
// let detail ={
//     name1:'sk',
//     id:4,
//     address:{
//         place:'cauvery',
//         city:'pallipalayam'
//     }
// }
// delete id;
// console.log(detail.name1);
// console.log(detail.name?.lenght);

// --------for in loop 
// for(let x in detail){
//     console.log(x,detail[x]);
// }
// for(let i in detail.address){
//     console.log(i+"--"+detail.address[i]);
// }

// ------ function return and arguments
// function enjoy(n){
// //    return "hello "+n;
//     return `hell0 ${n}`;
// }
// let name='suryakumar';
// let x = enjoy(name);
// console.log(x);

//------- function expression(exp means evaluate and assign)
// let add = function(num1,num2) // evaluate and assign to add var
// {
//     return num1 + num2; // expression
// } 
// // let b = add(4,3); or assign to another variable
// let b = add; 
// let x = b(4,2); // call function 
// console.log(x);

// ----- arrow function
//  let greed = () => {
//     console.log("hi");
//  }
// greed();
// we use this function in one line too
// let fun =(num1,num2) => num1+Math.abs(num2); // this is only for one line of code
// console.log(fun(10,-4)); // no need return and {}


// construction function
// function Stud(name,id){
//     this.name=name;
//     this.id=id;
//     this.dept=function(){
//         console.log("CSE");
//     }
// }
// let a = new Stud("sk",4);       // new is a constructor function using this we create a object is (a).
// // a.id=508;      //change values
// console.log(a);
// console.log(a.dept());

//-------  arrays operations  --------------------------------
// let array_opr = [];
// array_opr.push(0); // push ele in front of array
// array_opr.push(1);
// array_opr.push(2);
// array_opr.push(3);
// console.log(array_opr);
// array_opr.pop(); // remove end element from the array
// console.log(array_opr);
// // console.log(array_opr.reverse());
// console.log(array_opr.slice(1,array_opr.length));   // slice all the value using start and end

// ------- array multiple values -----------------------
// let all = [508,"surya",place={area:"cauvery",city:"pallipalayam"},
//     function(){console.log("hello all")}];

// console.log(all);
// all[3]();

// ------- array methods -----------------------
// let arr = [1,2,3,4,5,6,7,8,9];
// arr.shift(); // left shift so remove first element
// arr.unshift(5,6); // right shift not remove element but add element frontside
// arr.splice(1,2);     // remove element using index value 
// arr.splice(2,2,  44,41,40,33,42,54); //add multiple elements in the deleted ele positions
// console.log(arr);

// for of loop only for arrays
// for(let i in arr) {
//     console.log(i); // gives index value
//     console.log(arr[i]); // gives array values
// }
// for(let i of arr) {
//     console.log(i); // gives array values
// }

// ------- destructure arrays -----------
// let nums = [5,4,3,2,1];
// let [a,b,c,d] = nums;
// console.log(a,b,c,d);

// let a=4,b=3,c=2,d=1;
// [a,b,c,d]=[d,c,b,a]; // right side array assign to left side array
// console.log(a,b,c,d);

// let words = "i am surya kumar cse".split(" ");
// let [a,b,...c] = words; // ... is print rest of the elements
// console.log(a,b,c);

//------- for each ----------------------------
// let nums = [3,4,0,2,1]; 
// nums.forEach(i => console.log(i)); // print only values
// nums.forEach((i,n,a) => console.log(i,n,a[i]));  // print (i)values,(n)index,(a)full array or we modify something
// nums.forEach((i,n,a) => console.log(i,n,a)); 
// nums.forEach(i => {
//     console.log(i+i);   // we do some operations like
// })
// nums.forEach(n => {     // normal method
//     if(n%2==0)
//         console.log(n);
// });

// --------- filter method ---------    
// console.log(nums.filter(n => n%2!=0)); // or use below method

// nums.filter(n => n%2!=0)    // using filter methods and foreach to print onebyone
//     .forEach(i => {
//         console.log(i);
// });

//------------------ map method ------------------------------
// nums.map(a => a*4)
// .forEach(q => {
//     console.log(q);
// })

//------------- reduce method ------------------------
// let res = nums.reduce((a, b) => a+b);
// console.log(res);

// ------- filter,map,reduce -----------------------
// let nums = [1,2,3,4,5];
// let res = nums.filter(f => f%2!=0)   //1,3,5
//               .map(m => m*2)         //2,6,10
//               .reduce((a, b) => a+b);    //2+6+10

// console.log(res);        // 18


// filter using array

let companies = [
    {company:'one',type:'finance',start:1960,end:1973},
    {company:'two',type:'retail',start:1992,end:2008},
    {company:'three',type:'auto',start:1986,end:1996},
    {company:'four',type:'technology',start:1881,end:2003},
    {company:'five',type:'finance',start:1987,end:1990}
];
let arr = [12,43,2,56,6,88,31,1,44,63,4];

// for each
// companies.forEach(function(name){
//     console.log(name.company + " -> " + name.type);
// });

// arr.forEach(iterator => {
//     console.log(iterator);
// })

// let fit = arr.filter(fill => {
//     if(fill > 2)
//         return true;    
// });

// let fit = arr.filter(fill => fill > 2);
// console.log(fit);

// const retailcompanies = companies.filter(c => c.type==='retail');
// console.log(retailcompanies);

// const years10 = companies.filter(c => c.end - c.start > 10);
// console.log(years10);

// map function
// create array of company name
// const names = companies.map(c => {
//     return c.company;
// })
// console.log(names);

// const details = companies.map(det => det.company +' -> '+ det.start);

// const details = companies.map(det => `${det.company}  <-  ${det.start}  -> ${det.end}`);
// console.log(details);

// sqrt and square of the number
// const age = arr
//     .map(ages => Math.sqrt(ages))
//     .map(ages => ages * 2);
// console.log(age);


// companies by sort year

// let ascending = arr.sort( function(val1 , val2){
//     if(val1 > val2){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });

// let ascending = arr.sort((x,y) => x-y);
// console.log(ascending);
// let decending = arr.sort((x,y) => y-x);
// console.log(decending);


// let decending = companies.sort( function(val1 , val2){
//     if(val1.start < val2.start){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });
// console.log(decending);

// let ascending = companies.sort((val1,val2) => val1.start > val2.start ? 1 : -1);
// console.log(ascending);


// reduce for add all element in an array

// let sums = arr.reduce( function (total,age){
//     return total= total+age;
// });

// let sums = arr.reduce((total,age) => total+age);
// console.log(sums);

// let totalyears = companies.reduce(function (total,com)
// {
//     return total + (com.end - com.start);
// },0 );
// console.log(totalyears);

// let total = companies.reduce ((years,company) => years+(company.end - company.start),0);
// console.log(total);


// combine methods
// let combine = arr
//     .filter(a => a>18)
//     .map(a => a/2)
//     .sort((a,b) => a-b)
//     .reduce((a,b) => a+b,0);
// console.log(combine)


function ascending(){
    let asc = arr.sort((a,b) => a-b);
    asc.forEach( iterator => console.log(iterator));
    
    // console.log(asc)
}

function descending(){
    let des = arr.sort((a,b) => b-a);
    des.forEach( iterator => console.log(iterator));
    // console.log(des)
}
