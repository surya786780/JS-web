// forEach function
// const ul = document.querySelector('.people');

// const people = ["surya",'kumar','mugesh','sekar'];
// let html=``;
// // people.forEach(function(person) { // without arrow
//  people.forEach(person =>{  // with arrow
//     html+=`<li style="color:lightgreen">${person}</li>`
// });
// console.log(html);
// ul.innerHTML = html;

// documents 
// console.log(document.URL); 

//  *********** querySelector (for single element) ***********
// let para = document.querySelector('p'); // p is paragraph tag in html 
// console.log(para.innerHTML="hello");
// console.log(para.innerText="world!");

// let err = document.querySelector('.error');
// console.log(err.innerHTML="not found");

// div have any class call like this
// let err = document.querySelector('div.error');
// console.log(err.innerHTML="not found");

// body and first h1 tag
// let b = document.querySelector('body > h1');
// console.log(b.innerText="welcome");

// ************ queryselectorAll for multiple elements **********
// let para = document.querySelectorAll('p');
// let err = document.querySelectorAll('.error');
// for(let i = 0; i < para.length; i++){
//     console.log(para[i]);
// }
// for_each
// para.forEach(para1 =>{
//     console.log(para1)
// });
// console.log(err);
// @@@@@@@ forEach only use for queryselectorAll method


// ************ get element by id ********************
// cant use forEach on html collection
// let ids = document.getElementById('one'); // no need to use # because this is select id only 
// console.log(ids);

// ************ get element by class name ********************
// cant use forEach on html collection **************** 
// let cls = document.getElementsByClassName("error");
// console.log(cls[0]); 

// ************ get element by tag name ********************
// let tag = document.getElementsByTagName('p');
// console.log(tag);
// -------------- div one ends -------------------


// Add and change page content using INNER TEXT   ****************
// --------------- div two ---------------
// const add = document.querySelector('#two #twop');
// const add = document.querySelector('#two > #twop');
// const add = document.querySelector('#two p');
// add.innerText = "hello para 1"; 
// add.innerText += " hello para 1"; // one + new text

// change all content

// const add = document.querySelectorAll('p');
// add.forEach(change =>{
//     // change.innerText = "hello everyone "
//     change.innerText += " -> hello everyone ";
// });


// @@@@@@@@@@@@@   Add and change page content using INNER HTML **************
// change content
// const add = document.querySelectorAll('.error');
// add.forEach(allquery => {
//     allquery.innerHTML="<h3>InnerHTML for Error class</h3>";
// });

// add content
// const add = document.querySelector('#two > #content');
// let names = ['surya','mugesh','sekar'];
// names.forEach(para=>{
//     add.innerHTML += `<h5>${para}</h5>`;
// });


// ********** getting and setting attributes

// add attributes for the tag ,class and elements
// let set = document.querySelector('#twop');
// using setAttr for change style that overwrite the old style 
// set.setAttribute('style','background-color:green;');
//  change class or id names using setAttr
// set.setAttribute('id','twopara'); // change the id name
// let set = document.querySelector('.content'); // change the class name
// set.setAttribute('class','cont'); 


// ***************** css styles *****************
// let view = document.querySelector('div > #h3id');
// console.log(view.style); // see all style using in js not css type
// console.log(view.style.color);

// view.style.background = 'crimson';
// view.style.fontSize = '25px'; 
// // remove style
// view.style.fontSize = '';

// &&&&&&&&&&&&&&&&&&&&& add and remove class from css and html
// let adds = document.querySelector('p');
// adds.classList.add('error');
// adds.classList.remove('error');
// adds.classList.add('success'); 

// &&&&&&&&&&&  add and remove multiple class 
// let adds = document.querySelectorAll('p');

// adds.forEach(check => {
//     // let charSwap = check.textContent.toLowerCase;
//     if(check.textContent.includes("error")){
//         check.classList.add("error");
//     }
//     if(check.textContent.includes("success")){
//         check.classList.add("success");
//     }
// });


// toggle classes
// let adds = document.querySelector('.adds');
// adds.classList.toggle('okk'); // change class in html
// adds.classList.toggle('okk'); // call again so remove class in class names




// **@@@@@@@%%%%%%%%%$$$$$$$$$$$$$  Regular Expression 

// function regx(){
// let input = document.querySelector("#uservalue");
// let a = document.querySelector("#pass");
// let pattern = /^[a-z]{4,}$/;
// let check = pattern.test(input.value);
// check ? a.textContent="passed" : a.textContent="Not passed";
 

// search the content have matching pattern if have give the position 
// let val = input.value;
// const name = "suryakumar";
// let pattern = /[a-z]{4,}/;
// let have = val.search(pattern);
// console.log(have);
// }

// live feedback
let feed = document.querySelector('#uservalue');
let pattern = /^[a-zA-z]{5,}$/;


feed.addEventListener('keyup', e => {
    
    pattern.test(e.target.value) ? feed.setAttribute('class','success') : feed.setAttribute('class','error');
    console.log(e.target.value);
})