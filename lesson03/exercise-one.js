let arr = [];
arr = ['one', 'two', 'three', 'four', 'five'];

console.log('Create an array, with at least 5 strings');
console.log(arr);

console.log('Add an element to the end of the array');
arr.push('six');
console.log(arr);

console.log('Remove the third element');
arr.splice(2, 1);
console.log(arr);

console.log('Create a string from the elements and comma separate them');
const arrString = arr.join(', ');
console.log(arrString);