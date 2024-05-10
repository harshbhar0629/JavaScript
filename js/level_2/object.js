const course = {
    courseName: "Cpp",
    price: 1000,
    courseInstructor: "Harsh"
};

// destructuring f
let { courseName: cNm } = course;
console.log(cNm);
// console.log(courseName); invalid anonymous error


function f() {
    let username = "harsh";
    console.log(this.username);
}

f();