const person = { name: "Jack William", age: 17, job: "Programmer", gfName: "Ema Watson", phone: "011711232852", address: "Dhaka"  };

// const gfName = person.gfName;
// const phone = person.phone;

const { address, phone, gfName} = person; //this is called destructure ... to get values from obj / array

console.log(gfName);
console.log(address, phone);

const nameArray = ["Sakib", "Rakib", "Nakib", "jamal", "Kamal"];
const [firstName, ...restNames] = nameArray;
console.log(firstName);
console.log(restNames);


const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'tiger leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);
