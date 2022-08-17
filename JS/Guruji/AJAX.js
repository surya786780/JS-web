/* 
    old API'S

*/

// ************************************************************************
const xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/photos";
// console.log(xhr);
xhr.open('GET', url, true);
xhr.send();
// *****************************************************

// console.log(xhr.readyState);
xhr.onreadystatechange = function (){
    if(xhr.readyState === 4)
    {
        if(xhr.status === 200){
        const arr = JSON.parse(xhr.response);
        show(arr);
        // console.log(arr);
        // console.log(xhr.readyState);
        // console.log(arr[0].url);
        console.log("COMPLETED.....!");
    }
    else{
        console.log("ERROR! PAGE NOT FOUND")
        }
    } 
}
// ****************************************************************
const p = document.getElementById('parent');
function show(arr){
    for(index in arr){
        if(index == 10){
        break;}
        else
        {
            // console.log(arr[index]);
            const link = document.createElement('img');
            link.setAttribute('src',arr[index].thumbnailUrl);
            link.setAttribute('class','apiimg');
        // const li = document.createElement('li');
        // li.textContent=arr[index].url;
        // link.textContent=index;
        p.append(link);
        // console.log(li);
        }
        // console.log(index);
    }
}
// ************************************************************************************************
