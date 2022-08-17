// conditional statements
// let bmi1 = 78 / (1.69 * 1.69)
// let bmi2 = 92 / (1.95 * 1.95)
// if (bmi1 > bmi2)
//     console.log(`mark is high (${bmi1}) than john ${bmi2}`);
// else
//     console.log(`john is high, ${bmi2} than mark ${bmi1}`);

// type conversion
// value is string print in white color or value is number purple color
// let a=444;
// console.log(String(a), a);

// type coersion
// anywhere a string before or after any int values are there that converts to string
// only + operator do this
// console.log('i am ' + 23 + 1 + ' years old'); // i am 231 years old but
// console.log(2 + 3 + 4 + '5'); // 95 add the num ,before string will concat
// console.log('10' - '2' - 3 + '4'); // 54 (String)
// console.log('23' - '3' - 10); // 10 (convert in number)
// console.log('2' * '4'); // 8
// console.log('16' / '4'); // 4
// console.log('2' > '4'); // false

// **********  TRUTHY AND FALSY
// falsy is = 0, '', undefined, null, NaN
// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))
// console.log(Boolean({})) // true
// console.log(Boolean('surya')) // true
// let a = {};
// // console.log(a);
// if (a)
//     console.log("defined");
// else
//     console.log("not defined");

// &&&&&&&&&&&&&    Input get from user
// const ans = prompt("tell me anything");     // basically a string
// console.log(typeof ans,ans);

// const ans1 = Number(prompt("tell me the number"))
// console.log(typeof ans1, ans1);
// if (ans1 === 44)
//     document.write(ans1, " is a good number")
// else
//     document.write("you are bad in guessing")

//  simple program
// var a = Number(987654321);
// var arr = [];
// while (a > 0) {
//     var b = a % 10;
//     arr.push(b);
//     a = Math.floor(a / 10);
// }
// console.log(arr.toString(b))
// document.write(arr)

// 🌊:-D for Emoji  ( windows . (dot key)  )
// template litrel and ternary operator
// var age = 10;
// var age = prompt("Enter your age ")
// console.log(`you need to drink ${age >= 18 ? "wine 🍷" : "juice 🧃"}`)
// document.write(`you need to drink ${age >= 18 ? "wine 🍷" : "juice 🧃"}`)

// task
// document.write("<h1>Bill Calculator</h1>")
// var bill = Number(prompt("Enter your bill amount"))
// bill > 50 && bill < 300
//     ? document.write(`<h4> Amount is 😊: ${bill += bill * 0.15}</h4>`)
//     : document.write(`<h4> Amount is 🤞: ${bill += bill * 0.20}
// </h4>`);
