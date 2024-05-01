// Задание 1

const arr = [0, null, NaN, 0, 1, 2, 4, "str"]

function getEvenOddElements(arr) {
    let even = 0,
        odd = 0,
        zero = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zero += 1;
            } else if (arr[i] % 2 === 0) {
                even += 1;
            } else {
                odd += 1;
            }
        } 
    }
   
    return `Количество четных элементов: ${even}\nКоличество нечетных элементов: ${odd}\nКоличество нечетных элементов: ${odd}`;
}


let result_1 = getEvenOddElements(arr);

console.log('Задание 1')
console.log(result_1)


// Задание 2

num = 2;


function isSimpleNumber(number) {
    if (number > 1000 && typeof number != 'number' && number <= 1) {
        return 'Данные неверны';
    } else if (number === 2) {
        return `Число ${number} простое`;
    } else {
        for (let i = 2; i <= number; i++){
            if (number % i === 0) {
                return `Число ${number} не простое`;
            } else {
                return `Число ${number} простое`;
            }
        }
    }
}


let result_2 = isSimpleNumber(num);

console.log('Задание 2')
console.log(result_2)


// Задание 3

function firstNumber(num1) {
    return function(num2) {
        return num1+num2
    }
}

let sum_numbers = firstNumber(1);
let result_3 = sum_numbers(2);

console.log('Задание 3')
console.log(result_3)


// Задание 4

function countNumInterval(start, end) {
    let current_number = start;

    let timerId = setInterval(function() {
        console.log(current_number);
        if (current_number == end) {
            clearInterval(timerId);
        }
        current_number++;
    }, 1000);
}

console.log('Задание 4')
countNumInterval(5, 15);


// Задание 5

const getX = (x, y) => {
    const result = x**y;
    return result;
}

let funcX = getX(2, 5);

console.log('Задание 5')
console.log(funcX)