"use strict";

let a = "44";

// let b = "sdfsdfsd";

let ab = (year,age) => console.log(year,age);

ab(1999,22);

const skills = function () 
{
    const obj = {
        name:"surya",
        age:22,
        height:5.5,
        weight:55
    }
    console.log(obj.name);
    console.warn(obj.age);
    console.error(obj.weight);
    console.table(obj);
}
skills();