//Добро пожаловать. В этой ката вас просят возвести в квадрат каждую цифру числа и соединить их..
function squareDigits(num){
    return +String(num).split('').map((item)=>item*item).join('')
}

console.log(squareDigits(9119))