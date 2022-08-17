
// VALUE FROM USER
const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const url = "http://localhost:3004/posts";
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// UPDATE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function updatePost(postid,value,ele)
{
    const obj = {id:postid,post:value};
    const str =JSON.stringify(obj);
    const xhr = new XMLHttpRequest();
    xhr.onload = function (){
        if(xhr.status >= 200 && xhr.status < 300){
            ele.textContent = value;
        }
        else console.log(("ERROR! PAGE NOT FOUND"))
    }
    xhr.open('PUT', `${url}/${postid}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(str);
    // console.log(str);
}
// DELETE ***********************************
function deletePost(ele){
    const xhr = new XMLHttpRequest();
    xhr.onload = function (){
        if(xhr.status === 200){
            ele.remove();
        }
        else console.log(("ERROR! DELETE NOT WORK"))
    }
    xhr.open('DELETE', `${url}/${ele.id}`, true);
    // xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}



// POST ********************************************************
btn.addEventListener("click",sendPost);
function sendPost() {
    const obj = {post:inp.value};
    const str = JSON.stringify(obj);
    const xhr = new XMLHttpRequest();
    xhr.onload = function (){
        if(xhr.status >= 200 && xhr.status < 300){
            const arr = JSON.parse(xhr.response);
            show(arr.id,arr.post)
            // console.log(arr.post);
        }
        else console.log(("ERROR! PAGE NOT FOUND"))
    }
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(str);

    // show(inp.value);
    inp.value="";
    inp.focus();
}
// ****************************************************************
// GET OR POST
function fetchPost(){
const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.send();
xhr.onload = function (){
        if(xhr.status === 200){
        const arr = JSON.parse(xhr.response);
        // console.log("COMPLETED.....!");
        for(data of arr){
            show(data.id,data.post);
        }
        // console.log(arr);
        
    }
    else{
        console.log(("ERROR! PAGE NOT FOUND"))
        } 
}
}
fetchPost();
// ****************************************************************
// CREATE ELEMENT
/*
    <div id="123" class="post completed">
        <h4>Content</h4>
        <button id="updbtn">update</button>
        <button id="delbtn">delete</button>
    </div>
*/
const p = document.getElementById('parent');
function show(id,name){
    const div = document.createElement('div');
    div.setAttribute('id',id);
    div.setAttribute('class','post completed');
    const data = document.createElement('h4');
    data.textContent = name;
    
    const updbtn = document.createElement('button');
    updbtn.setAttribute('id','updbtn');
    updbtn.textContent = "update";
    updbtn.addEventListener('click',function(e){
        // console.dir(e);
        let pre = e.target.previousElementSibling;
        let value = pre.textContent;
        // let value = e.target.previousElementSibling.outerText;
        // let data = e.target.previousSibling.outerText;
        const newVal = prompt("Current POST  "+`${value}`, value);
        let parent = e.target.parentElement.id;
        if
        (newVal.replace(/[\s+]/, "").length>0 &&
        newVal !== null && 
        newVal !== value)
        {
            // console.log("updated");
            // console.log(parent,newVal);
            updatePost(parent,newVal,pre);
        }
        else console.log("not updated");
            
    })


    const delbtn = document.createElement('button');
    delbtn.setAttribute('id','delbtn');
    delbtn.textContent="delete";

    delbtn.addEventListener("click",function(e){
        // console.dir(e.target.parentElement.id);
        let parent = e.target.parentElement;
        // let id = parent.id;
        // console.log(id);
        deletePost(parent);
    })

    
    div.append(data,updbtn,delbtn);
    p.append(div);
}
// **********************************************************

