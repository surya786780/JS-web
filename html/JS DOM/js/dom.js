// console.log("okk");
// document.getElementById(
//     'id1').innerText = "ok";
// document.getElementsByName('sk');
// document.getElementsByName('div');
// document.getElementsByClassName('myclass1');

//----------  dom attribute
// let p=document.getElementById('id2')
// console.log(p);
// p=document.getElementById('id2')
// p.title = "not text";
// p.setAttribute ('title',"i am surya")
// p.getAttribute('title')
// p.hasAttribute('sk')
// console.log(p);

//-------------  DOCUMENT objects
// console.dir(document); // we do operations in this document
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'dom'; // change title of the webpage
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.links); // give all links
// console.log(document.images); 

// ----------- user input from textbox -----------
// function uandp(){
//     let check = document.getElementById("inp").value;
//     let check1 = document.getElementById("pass").value;
//     if(check)
//     if(check1.length < 4){
//         console.log("password is week");
//     }else{
//     if(check===check1){
//        console.log("Username and Password is same");
//     }
//     else{
//         console.log("ok");
//     }
// }}

// ------------ take input from radiobutton
// function rad(){
//     let sel1 = document.getElementById('1');
//     let sel2 = document.getElementById('2');
//     let sel3 = document.getElementById('3');
//     if(sel1.checked==true)
//         alert("your dept is "+sel1.value);
//     else if(sel2.checked==true)
//         alert("your dept is "+sel2.value);
//     else if(sel3.checked==true)
//         alert("your dept is "+sel3.value);
//     else
//         alert("no dept selected");
// }

// ---------- input from selecionbox
// function sel(){
//     var val = document.getElementById('selectbox');
//     alert(val.options[val.selectedIndex].value);  // collection of options in the selection box 
// }

// --------- get element by tag name

// function changestyle(){
//     var ptag = document.getElementsByTagName("p"); // change all p tag in one line
    // ptag[0].style.backgroundColor ="red";
    // ptag[1].style.color = "blue";
    // ptag[2].style.fontWeight="bold";
    // ptag[3].style.fontStyle="italic";
    
// using all tag using index at a time
    // for(let i=0; i<ptag.length; i++){
    //     ptag[i].style.fontWeight="bold";
    //     ptag[i].style.color = "white";
    //     ptag[i].style.backgroundColor ="black";
    // }
// }

// --------- get element by class name 
// function clsname(){
//     var cn = document.getElementsByClassName("details");
//     // cn[0].style.backgroundColor ="yellow";
//     for(var i=0; i<cn.length; i++){
//         cn[i].style.backgroundColor ="yellow";
//     }
// }

// --------  on mouseover & on mouseout on images ----------
// function newimg(){
//     document.getElementById("img1").src="popsicle.jpg";
// }
// function oldimg(){
//     document.getElementById("img1").src="croissant.jpg";
// }

// --------------- form validation
// function formval(){
//     let uname = document.getElementById("name").value;
//     let pword = document.getElementById("pass").value;
//     if(uname.trim() == "" || uname.trim().length <= 2) //trim remove input blank spaces
//     {
//         // alert("Please Enter valid name");
//         document.getElementById("lbu").style.visibility="visible";
//         return false;
//     }
//     else if(pword.trim() == "" ){
//         // alert("Please Enter valid password");
//         document.getElementById("lbp").style.visibility="visible";
//         return false;
//     }
//     else if(pword.length<5){
//         document.getElementById("lbp2").style.visibility="visible";
//         return false;
//     }
//     else{
//         true;}
// }

//  ---------- regular expressions are used to perform powerful 
//  pattern-matching and search and replace function on text -----------

/* function regexp(){
    var uname1=document.getElementById("uname").value;
    // // we give text inside (/ /) (i) is case sensitive -Or-
    // regx = new RegExp("rk" ,"i"); // use this too RegExp is the function
    // var regx = /[sra]k/; // [] character set 
    // var regx = /[a-s]k/i;   // easy way [a-s A-S 0-9] set range
    //var regx = /[0-4]s[a-k]u[0-9]rya/; // use like this also
    // var regx = /[^0ab]sk/; // anything we dont want use in first position
    // var regx = /[^a-z]sk/; // range
    // valid name or not 
    // var regx = /[0-9]{10}/i; // {10} is a num of time repeated and more

    /*  regular expressions special keywords
        \d - match any digit (equal to [0-9])
        \w - match any word character (a-z,A-Z,0-9 & _ )
        \s - match whitespace characters (eg- spaces and tabs)
        \t - match a tab only
    
    // -------------- for mobile num validation ---------------
    //var regx = /^[6-9]\d{9}$/; // (^) before the num is nothing acceptable and ($) after 10 digit num nothing is acceptable
 
    // ------------ for email validation ------------------
    let regx= /^([a-zA-Z0-9\.-]+)@([a-z A-Z 0-9 -]+)\.([a-z]{2,10})(\.[a-z]{2,8})?$/;
    // surya@gmail.com  (or) surya@gmail.co.in
    // [\. for accept (.) only,]+ <- '+' for not specify any length for the regx exp
    // before the (?) is optional expression 
    if(regx.test(uname1) && uname1 != "")
    {
        document.getElementById("lab1").innerHTML="Valid";
        document.getElementById("lab1").style.visibility="visible";
        document.getElementById("lab1").style.color="green";
    }
    else{
        document.getElementById("lab1").innerHTML="InValid";
        document.getElementById("lab1").style.visibility="visible";
        document.getElementById("lab1").style.color="red";
    }
}*/

// ----------- simple add calculator --------------
// function devtools(){
//     let a = document.getElementById("t1").value;
//     let b = document.getElementById("t2").value;
//     // var c = parseInt(a)+parseInt(b);
//     document.getElementById("op").innerHTML="Result = "+a+b;
// }

//---------- timing function -----------
/*
    1.setTimeout() allows you to execute statements ONCE after an interval
    2.clearTimeout() method clears a timer set with the setTimeout() method
    3.setInterval() allows you to execute statements REPEATEDLY after an interval
    4.clearInterval() method clears a timer set with the setInterval() method
*/

// var id=0;
// var sec = 0;
// function printmsg(){
//     var name = document.getElementById("inp").value;
//     document.getElementById("op").innerHTML=sec +" Welcome "+name;
//     sec++;
//     if(sec>5){
//         document.write("<h1>time is out</h1>");
//         stop();
//     }
// }
// function start(){
//     // id=window.setTimeout(printmsg,4000); // function name , millisec(5000)=5sec
//     id=window.setInterval(printmsg,1000);
// }
// function stop(){
//     //window.clearTimeout(id); // id is unique for the start function so we use this id for clear the time
//     window.clearInterval(id);
// }

// ------------ fade in fade out -------------
// var opacity=0;
// var intervalid=0;
// var ids=0;
// function hide(){
//     var img = document.getElementById("img1");
//     opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
//     if(ids==1 && opacity>0){
//         opacity=opacity-0.1;
//         img.style.opacity=opacity;
//         console.log(opacity);
//     }
//     else if(ids==2 && opacity<1){
//         opacity=opacity+0.1;
//         img.style.opacity=opacity;
//         console.log(opacity);
//     }
//     else{
//         clearInterval(intervalid);
//     }
// }
//  function fadeout(){
//         ids=1;
//         clearInterval(intervalid);
//         intervalid=window.setInterval(hide,500);
//     }
//  function fadein(){
//      ids=2;
//      clearInterval(intervalid);
//     intervalid=window.setInterval(hide,500);
//  }

// ---------- zoom in zoom out --------------
// var size = 100;
// var id=0;
// function timer(){
//     clearInterval(id)
//     id=setInterval(zoomin,20);
// }
// function zoomin(){
//     // var imgsize = document.getElementById("img1").style.width=size;
//     if(size<200){
//         size = size+2;
//         document.getElementById("img1").style.width=size+'px';
// }
// else{
//     clearInterval(id)
// }
// }
// function timeout(){
//     clearInterval(id)
//     id=setInterval(zoomout,20);
// }
// function zoomout(){
//     if(size>100){
//         size = size-2;
//         document.getElementById("img1").style.width=size+'px';
// }
// else{
//     clearInterval(id);
//     }
// }

// -------------  Jquery Basics --------------------
// ------------- selectors in jQuery -------------
/* function jqselectors(){
    // $("h2").fadeToggle();   // directly select tag so this is tagselector
    // $("#h22").fadeToggle(); // this is used by id
    // $(".c1").fadeToggle(); // using class selector

    // $("#fdiv,li,p").fadeToggle(); //multiple selectors using at a time
    // $("div > p").fadeToggle(); // or $("div p") is also use, inside all the div para is selected
    // $("div:first").fadeToggle(); // only select the first div 
    // $(".mydiv:last").fadeToggle(); // only select the class last mydivs
    // $("div:even").fadeToggle(); // starts with 0 so 1st and last selected 
    // $("div:odd").fadeToggle(); // odd selected 
    // $("li:odd").fadeToggle(); //select odd list items
} */

// ---------------------- jquery events --------------------
// $(document).ready(function(){
//     $("#btn1").click(fn1);     // anonymous func inside button is clicked time

// function fn1(){
//     $("li").fadeToggle(); //
// }
// });





