// let arr = [1, 2, 3, 5];

// let pos_val = arr.filter(function (val) {
//     return val < 0;
// });

// let pos_val = arr.filter((val) => {
//     return val < 0;
// });

// let pos_val1 = arr.filter((val) => ( val >= 0 ));

// console.log(pos_val);
// console.log(pos_val1);

// let mp = arr.map(function (val) {
//     return 'student no' + val;
// });

// console.log(mp);


// let arr = [1, -4, 2, -3];
// let filtered = arr.filter((val) => (val >= 0));

// let mp = filtered.map((val) => ({ value: val }));
// console.log(mp);


// filter give you an output which satisfy your cindition
let arr = [1, -4, 2, -3, 5, 5, 5, 3];
// let output = arr.filter((val) => {
//     return val > 0;
// });

// console.log(output);

//  reduce
let output = arr.reduce((acc, val) => {
    return acc + val
}, 0);
console.log(output);