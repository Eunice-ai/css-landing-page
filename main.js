
// function fullname(firstname, lastname) {
//     console.log(`My fullname is ${firstname} ${lastname}`)
// }
// fullname('clarence', 'peters');

// function addNumbers(num1, num2) {
//     let sum = num1 + num2;
//     return sum
// }

// let d = addNumbers(1200, 56)
// console.log(d)

function bmi(weight, height) {
    let bmi = Math.floor(weight/ (height * height))
    // console.log(bmi)

    if (bmi < 18.5) {
        console.log(bmi + ' underweight')
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log(bmi + ' normal weight');
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log(bmi + ' overweight');
    } else {
        console.log(bmi + ' obese');
    }
}

bmi(55, 1.58)