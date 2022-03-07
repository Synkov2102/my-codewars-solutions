// В супермаркете очередь к кассам самообслуживания. Ваша задача — написать функцию для расчета общего времени, необходимого всем покупателям для оформления заказа.!

// Вход
// клиенты: массив положительных целых чисел, представляющих очередь. Каждое целое число представляет покупателя, а его значение — количество времени, которое ему требуется для оформления заказа..
// n: положительное целое число, количество касс.
// Выход
// Функция должна возвращать целое число, общее требуемое время.

function queueTime(customers, n) {
    let cashRegistersArr = new Array(n).fill(0)
    for(let i =0; i < customers.length; i++){
        cashRegistersArr[cashRegistersArr.indexOf(Math.min.apply(null, cashRegistersArr))]+=customers[i];
    }
    
    return Math.max.apply(null, cashRegistersArr)  
}

console.log(queueTime([2,2,3,3,4,4], 2)) //9