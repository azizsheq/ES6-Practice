const firstName = "Justin";
const lastName = "TimberLake"

const fullName = firstName + " " + lastName + " is a good boy";
console.log(fullName);

// using ES6 template
const fullName2 = `${firstName} ${lastName} is a good boy.`;
console.log(fullName2);

// using template we can do any math or codes inside the curly braces
const doingMath = `Sum is ${20+30+40+60*100}`;
console.log(doingMath); 

const multiLine = "Hello,\n"
                + "I am here,\n"
                + "See you soon.";
console.log(multiLine); 

const multiLine2 = `Hello,
I am here,
See you soon`;
console.log(multiLine2); 