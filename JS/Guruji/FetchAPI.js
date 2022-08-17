// line number          115



// const url = "https://jsonplaceholder.typicode.com/users";
// const url = "http://localhost:3004/users";

// // Fetch using Promises (then/catch)

// // fetch(url).then(function (response) {
// //     // console.log(response.json());
// //     if(response.status === 200)
// //     return response.json();
// //     else throw new Error("Something Wrong");
// //     // console.log("Error");
// // }).then(function (result) {
// //     console.log(result);
// // }).catch(function (err) {
// //     console.log(err.message);
// // })



// // ++++++++++++++++++++++++++++++++++++++++++++++++++++=
// // Fetch using Async / Await

// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// // CREATE ElEMENT
// const p = document.getElementById('parent');
// function createElement(id,name,email,address){
//             const li = document.createElement('li');
//             const up = document.createElement('button')
//             const del = document.createElement('button')
//             const brk = document.createElement('br')

//             li.setAttribute('id',id);
//             li.setAttribute('class','completed');

//             up.setAttribute('id',id);
//             up.setAttribute('onClick',`update()`)
//             del.setAttribute('id','delete');

//             up.textContent="UPDATE";
//             del.textContent="DELETE";
//             li.textContent=`id ${id} -> Name : ${name} ->Email : ${email} -> Address : ${address}`;
//             p.append(li,up,brk,del);
//     }
// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// // ********************************************     
// // GET
// const promise = fetch(url);
// async function body()
// {
//     try{
//     const get = await(promise);
//     if(get.status !== 200) throw new Error("Error occured");

//     let val =await get.json();
//     for(data of val){
//         createElement(data.id,data.name,data.email,data.address)
//     }
//     }
//     catch(err) {
//         console.log(err.message);}
// }
// body();
// // ******************************************************

// // ####################################################
// // POST
// let inp1 = document.getElementById('inp1');
// let inp2 = document.getElementById('inp2');
// let inp3 = document.getElementById('inp3');
// let btn = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     newPost(inp1.value, inp2.value, inp3.value);
// })

// async function newPost(name,email,address){
//     const reqObj = {
//         method:"POST",
//         headers:{
//             'content-type':"application/json"
//         },
//         body:JSON.stringify({name,email,address})
//     }
//     try{
//         const res = await fetch(url,reqObj);
//         if(res.ok)
//         {
//             let result =await res.json();
//             // console.log(result);
//             createElement(result.id,result.name,result.email,result.address)
//             inp1.value="";inp2.value="";inp3.value="";
//             inp1.focus();
//         }
//         else throw new Error("No POST Created ")
//     }
//     catch (ex)
//     {
//         console.log(ex.message);
//     }
// }
// ####################################################

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 






// VALUE FROM USER
const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
inp.addEventListener('keypress',function(e){
    if(e.key === "Enter") sendPost();
})
const url = "http://localhost:3004/posts";
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
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
            updatePost(parent,newVal,pre);
        }
        else console.log("not updated");
            
    })

    const delbtn = document.createElement('button');
    delbtn.setAttribute('id','delbtn');
    delbtn.textContent="delete";

    delbtn.addEventListener("click",function(e){
        let parent = e.target.parentElement;
        deletePost(parent);
    })

    
    div.append(data,updbtn,delbtn);
    p.append(div);
}
// ****************************************************************
// GET &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
async function getPost(){
    try{
        const pro =await fetch(url);
        if(!pro.ok) throw new Error("Invalid")
        let result =await pro.json();
        for(data of result) {
            show(data.id,data.post);
        }
    }
    catch (err){console.log(err.message);}
}
getPost();
// ****************************************************************
// POST ********************************************************
btn.addEventListener("click",sendPost);
async function sendPost() {
    const obj = JSON.stringify({post:inp.value});
    const postObj = {
        method: "POST",
        headers: {
                    'content-type':"application/json"
                },
        body:obj
    }
    try{
        const pro =await fetch(url,postObj);
        if(!pro.ok) throw new Error("Invalid Post")
        const result = await(pro).json();
        show(result.id,result.post);
        inp.value="";
        inp.focus();
    }
    catch (err){console.log(err.message);}
}
// **********************************************************
// UPDATE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function updatePost(postid,value,ele)
{
    const obj = JSON.stringify({id:postid,post:value});
    const updObj = {
        method:"PUT",
        headers:{
            "content-type": "application/json"
        },
        body:obj
    }
    try{
        const promise =await fetch(`${url}/${postid}`,updObj)
        if(!promise.ok) throw new Error("Invalid UPDATE")
        ele.textContent = value;
    }
    catch (err){console.log(err.message);}
}
// **********************************************************
// DELETE ***********************************
async function deletePost(ele){
    const delObj = {
        method:"DELETE"
    }
    try{
        const promise =await fetch(`${url}/${ele.id}`,delObj)
        if(!promise.ok) throw new Error("Invalid DELETE")
        ele.remove();
    }
    catch (err){console.log(err.message);}
}
// ************************************************************************************************




