console.log("storage...");

/* 
    1.cookies (difference) - document depend , small size
    (
        same browser accessible,
        4kb size,
        window close data won't be delete
        user browsing tracking
        send with server as request,
        session management
        )
    
    (the both session and local storage are same functionality name only change)
    2.Local Storage - window is close
        (10mb size,
         one browser accessible,
         browser is closed once that the data is stored)

    3.Session Storage- (Temprory data) 
    (login to logout that time is called one session,
        onlu work in one browser cant get to another browser, 5mb size
        only the browser is open that time only take the data else removed)
*/

// all are here objects
const obj={
    name:"sk"
}


//  #################    Session Storage

// Item Set in sessionStorage (key and value use for this)
// sessionStorage.setItem("ID ",24);
// sessionStorage.setItem("Name","surya");

// Item get in sessionStorage , only use key for get
// let name1 = sessionStorage.getItem("ID");
// console.log(name1);


// Remove Item from sessionStorage
// sessionStorage.removeItem("Name")

// length of the sessionStorage
// let l = sessionStorage.length;
// console.log(l);

// clear sessionStorage
// sessionStorage.clear();




// #####################  LOCAL STORAGE

// localStorage.setItem("age",22);
// localStorage.clear();
// let a = localStorage.getItem("age");
// console.log(a);
// let l = localStorage.length;
// console.log(l);
// localStorage.removeItem("age");






//  ####################   COOKIES
// all are string =
// document.cookie = "name=surya";
// document.cookie = "age=22"
// console.log(document.cookie);

// set expire time for cookie
// const expire = new Date(2022,06,14).toUTCString();
// console.log(expire);
// document.cookie = "id=4;expires=" + expire;








//  ####################        TODO WITH LOCAL STORAGE

let inp = document.getElementById('inp');
// let btn = document.getElementById('btn');
let value = document.getElementById('list');
const arr= [];


function btn(){
    // console.log(inp.value);
    Myfunction(inp.value);
}

function Myfunction(P){
    // console.log(P,P.length);
    const li = document.createElement('li');
    if(P.length === 0) return;  
    arr.push(P);

    localStorage.setItem(`Name`,JSON.stringify(arr));

    // console.log(this);
    // li.innerHTML =`<h3 style="border: 2px solid black;">${P}</h3>`;
    li.textContent=P;
    li.setAttribute('class','failed completed');
    li.addEventListener('click',itemClick)
    li.addEventListener('dblclick',itemremove);
    value.append(li);
};


function showItems() {
    // local storage
        let val = localStorage.getItem(`Name`) 
        if(!val) return;

        val = JSON.parse(val);
    for(index in val) {
        Myfunction(val[index]);
        // console.log(index);
    }
}
showItems();

function itemClick(){
    // this.style.border = "2px solid white";
    // this.style.color = "black";
    // this.style.opacity = "0.4"
    // console.log(this);
    this.classList.toggle('completed');
}
function itemremove(){
    this.remove();
}
