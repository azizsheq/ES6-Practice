const age = [12, 14, 15, 16, 17, 13];
const ages = [44, 33, 66];
const ages2 = [21, 25, 23];

const allAges = age.concat(ages);
console.log(allAges);

const allAges2 = age.concat(ages).concat(ages2);
console.log(allAges2);

// using ES6
const allAges3 = [...age, ...ages, ...ages2];
console.log(allAges3);

// using ES6 three dots
const taka = [4500, 3500, 750, 9900];
// const max = Math.max(taka);
const max = Math.max(...taka);
console.log(max);