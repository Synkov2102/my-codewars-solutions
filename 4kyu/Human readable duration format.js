// Ваша задача для завершения этой Ката — написать функцию, которая форматирует продолжительность,
// заданную в виде количества секунд, удобным для человека способом..

// Функция должна принимать неотрицательное целое число. Если он равен нулю, он просто возвращает "now".
// В противном случае продолжительность выражается как комбинация years, days, hours, minutes а также seconds.

function formatDuration (inputSeconds) {
    let second = inputSeconds
    let minute = Math.trunc(second/60)
    let hour = Math.trunc(minute/60)
    let day = Math.trunc(hour/24)
    let year = Math.trunc(day/365)
    day %= 365
    hour %= 24
    minute %= 60
    second %= 60

    let string = ''
    let nameArr= ['year', 'day', 'hour', 'minute', 'second']
    let numberArr= [year, day, hour, minute, second]

    for(let i=0; i < numberArr.length; i++){
        if(numberArr.slice(0, i).length != 0){
            if(((numberArr.slice(0, i).reduce((previos, current)=> previos+current))!=0)&& numberArr[i]!=0){
                if(numberArr.slice(i+1, numberArr.length).length != 0){
                    if((numberArr.slice(i+1, numberArr.length).reduce((previos, current)=> previos+current))!=0){
                        string+=', '
                    }
                    else {
                        string+=' and '
                    }
                }
                else {
                    string+=' and '
                } 
            }
        }
        
        string += `${(numberArr[i]>0) ?`${numberArr[i]} ${nameArr[i]}${(numberArr[i]>1) ? "s" : ""}`:''}`
    }
    if(inputSeconds===0){
        string='now'
    }
    return string
}
console.log(formatDuration(366200))