// ASYNC/AWAIT , CALLBACK , PROMISES

// *************************  Asynchronous EXP is setTimeout 
// not wait for next processes execution
// console.log("111");
// function Async(){
//     setTimeout(function() {
//         console.log("222");
//         return {name:"Async"}
//     },2000);
//     // this function return the value before the asynchronous
// }
// console.log("333");
// const wait = Async();
// console.log(wait);




// *************  CALLBACK  
// (wait until the asynchronous process executes )
// console.log("111");
// function Async(e,p,callback){
//     setTimeout(function() {
//         console.log("222");
//         callback({name:"SURYA"})
//     },2000);
//     // this function return the value before the asynchronous
// }
// function getUserDetails(name,callback){
//     setTimeout(function() {
//         callback({username:name,password:"1234"})
//     },2000)
// }

// console.log("333");
// const wait = Async("email","pw",function(obj)
// {
//     console.log(obj);
//     getUserDetails(obj.name,function(details){
//         console.log("user data - ",details);
//     });
// });






// *****************  PROMISES function called Automatically 
// ...... (Resolve (Sucess),
//     Reject(Failed,problems,Error))

// function One(uname,uid){
//     const pro = new Promise(function(resolve,reject)
//     {
//         setTimeout(function(){
//             console.log("one");
//             resolve({name:uname,id:uid})
//             // reject("Your Req is rejected");
//         },2000)
//     })
//     return pro;
// }
// function Two(id,name){
//     const pro = new Promise(function(resolve,reject)
//     {
//         setTimeout(function(){
//             console.log("two");
//             resolve(id,name);
//         },2000)
//     })
//     return pro;
// }

// One("surya",444). // response part
// then(function(Userval){
//     console.log(Userval);
//     return Two(Userval); // call another function
// }).then(function(details)
// {
//     console.log(details.id,details.name);
// })//reject part
// .catch(function(err){
//     console.log(err);
// })

// pro.then(function(val){ // for get the resolve value
//     console.log(val);
// }).catch(function(err){ // for get the reject value
//     console.log(err);
// })
// console.log("three");




// *****************    ASYNC / AWAIT 
// easy way to call
function One(uname,uid){
    const pro = new Promise(function(resolve,reject)
    {
        setTimeout(function(){
            console.log("one");
            resolve({name:uname,id:uid})
            // reject("Your Req is rejected");
        },2000)
    })
    return pro;
}
function Two(id,name){
    const pro = new Promise(function(resolve,reject)
    {
        setTimeout(function(){
            console.log("two");
            resolve({id,name});
            // reject("There is problem")
        },2000)
    })
    return pro;
}
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
async function body(){
    // this is called synchronous style code
    try{
    const data1 = await One("surya",4444);
    console.log(data1);
    const data2 = await Two(data1.name,data1.id)
    console.log(data2);
    }
    catch(e){
        console.log(e);
    }
}
body();
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX




