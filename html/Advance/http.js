// 
//  response status
// status 200 is okk if req.open is wrong address the request not show XMLHttpRequest
//  so we put status === 200 that is the url is correct show the request type in console 

// request.readystate types
// 0	UNSENT -	Client has been created. open() not called yet.
// 1	OPENED -	open() has been called.
// 2	HEADERS_RECEIVED -	send() has been called, and headers and status are available.
// 3	LOADING	- Downloading; responseText holds partial data.
// 4	DONE -	The operation is complete.


const callbackfun = ( callback )=> {
    const request = new XMLHttpRequest(); // create a request object
    let text = document.querySelector('#text');
    request.addEventListener('readystatechange',() => {
    // console.log(request, request.readyState);

    if(request.readyState === 4 && request.status === 200){
        //  console.log(request, request.responseText); // property for response data or text
        // text.textContent = request.responseText;
        callback(undefined,request.responseText); // not have error so undefined
    }
    else if(request.readyState === 4 ){
        // console.log("not fetch the data");
        callback ("could not fetch data",undefined);
    }
});

request.open('GET','https://jsonplaceholder.typicode.com/todos/') // type of req is get(we need some data using get we got , end point which place we want data from)
request.send(); // send the request
};


// callbackfun((err,data) => {
//     console.log('callback fired');
//     // console.log(err,data);
//     err = err ? console.log(err) : console.log(data);
//     // if(err){
//     //     console.log(err);
//     // }
//     // else{
//     //     console.log(data);
//     // }
// });


console.log("1");
console.log("2");

callbackfun((err,data) => {
    console.log('callback fired');
    err = err ? console.log(err) : console.log(data);
});
// asynchronous code (not block the code execution so called asynchronous code) that take some time to execute in that time other belowed process is running 

console.log("3");
console.log("4");

;