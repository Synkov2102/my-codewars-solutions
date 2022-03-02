// Есть массив с некоторыми числами. Все числа равны, кроме одного. Попробуй найти!
function findUniq(arr) {
    let element 
    arr.map((item)=>{
        if(arr.indexOf(item)===arr.lastIndexOf(item)){
            element = item;
        }
    })
    return element
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));