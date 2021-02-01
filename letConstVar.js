const student = "Abdul Halim";
// student = "Rahman"; //cannot do it because it's declared as const
console.log(student);

// but in term of array
const newArray = [12, 45];
console.log(newArray);

newArray[1] = 99;
console.log(newArray);

newArray.push(12);
console.log(newArray);

// newArray = [1,2,3]; //not possible to change the whole array while it's const

let patientName = "Abdur Rahim";
console.log(patientName);
patientName = "Fatema Khatun";
console.log(patientName);

let sum = 0;
for(var i = 0; i<10; i++){
    sum = sum + i;
}
console.log(i); //while using var i then it's leaking out of the area

let sum = 0;
for(let i = 0; i<10; i++){
    sum = sum + i;
}
// console.log(i); //while using let i then it's NOT leaking out of the area