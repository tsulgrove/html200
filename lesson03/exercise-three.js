console.log('Use a for loop to console log all of the elements plus the index and a comma');
let arr = [];
arr = ['one', 'two', 'three', 'four', 'five'];
for (let i = 0; i < arr.length; i ++) {
  console.log([i, ',', arr[i]].join(''));
}