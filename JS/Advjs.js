// function declaration
// function sk(){
//     console.log("1");
// }
// sk();
// sk();
// function expression (we can only declare before calling)

// const speak = function(name="sk",id=4){
//     console.log(`Name : ${name} , id : ${id}`);
// }; 
// speak();
// speak("surya",508);

// function return

// const pi=3.14;
// function area(radius) {
//    return  pi * radius ** 2;  
// }
// let res = area(5);
// console.log(res);

// arrow function with parameters
// const area = (radius,pi) => {
//     return pi * radius **2;
// }
// let res = area(5,3.14);

// arrow function with parameters
// const area = radius => 3.14* radius ** 2;
// let res = area(5);
// console.log(res);

// without parameters
// const area = () => 'helllo all';
// console.log(area());

// without arrow function
//  const calc = function(product,tax){
//     let total=0;
//     console.log(total , product , tax);
//     for(let i=0;i<product.length;i++){
//         console.log('product '+product[i]);
//         console.log("calculation : ",total += product[i] + product[i] * tax); 
//         console.log("total " + total);
//     }
//     return total;

//  };
//  console.log(calc([10,15,30],0.2));

// with arrow function 
// const bill = (product,tax) => {
//     let total = 0;
//     for (let i = 0; i < product.length; i++){
//         console.log('product '+product[i]);
//         console.log("calculation : ",total += product[i] + product[i] * tax); 
//         console.log("total " + total);
//     }
//     return total;     
// }
// console.log(bill([10,15,30],0.2));

// ************** callback & forEach

// const func = (callbackfunc) => {
//     let val = 4;
//     callbackfunc(val)
// };
// func(value => console.log(value));

//  let arr=['a', 'b', 'c', 'd', 'e']
//  arr.forEach((value,index) =>{
//     console.log(index+1 ," hello ", value)}); 

// same as above
// const log = (arr,index) =>{
//     console.log(`${index+1} - hello - arr`)
// }
// arr.forEach(log);

// object
//  let user = {
//      name:'surya',
//      id:508,
//      dept:'cse',
//      year:3,
//      college:'KSRCE',
//      skills:['js','java','python','c','c++'],
     //login:function(){ // or
    //  login(){
    //      console.log("Login success...");
    //  },
     // logout:function(){ //or
    //  logout(){
    //     console.log("Logout success...");
    //  },
     // logskills:function(){ // or
    //  logskills(){
        // 1.. console.log(this);
        // console.log(this.skills);
        // this user skills are
//         this.skills.forEach(skills => console.log(skills))
//      }
//  };
//  user.login();
//  user.logout();
//  user.logskills();
//1..  console.log("this")

// array inside object
// const arr=[{name: 'John', age:20},
// {name: 'surya', age:22}];
// console.log(arr[0]);

// ***********  random number always gives the float between 0 and 1
//const rand = Math.random();
// console.log(rand);
// so we want random number between 100 
// console.log(Math.round(rand*100));


// ******** primitive values copy
// let one = 100;
// let two = one;
// console.log(one,two);
// one = 111;
// console.log(one,two);

// ************* referrence values copy
// const one = {name:'surya',id:4};
// const two = one;
// console.log(one,two);
// one.id=44;
// console.log(one,two);


//  array find method
// let scores = [10,2,33,5,44,0,10,100,444];
// let first_big = scores.find((first_max) => first_max > 30);
//  console.log(first_big);



// DATES and TIMES
// const now = new Date();
// let d = document.querySelector('h3');
// // d.textContent = now;
// console.log(now);
// // console.log(typeof now);

// console.log("Fullyear is "+now.getFullYear());
// console.log("Month is "+now.getMonth());
// console.log("Date is "+now.getDate());
// console.log("Day is "+now.getDay());
// console.log("Hours is "+now.getHours());
// console.log("Min is "+now.getMinutes());
// console.log("Sec is "+now.getSeconds ());

// let a = now.getHours();
// let b = now.getMinutes();
// let c = now.getSeconds();
// d.textContent = a +" : "+ b+ " : "+c;

// // Timestamps
// console.log('timestamp', now.getTime());

// // date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());



function onClick(){
    let a= document.querySelector('h3').innerHTML="surya";
}

