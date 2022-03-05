//Учитывая строку слов, вам нужно найти слово с наивысшим баллом.
//Каждая буква слова оценивается в баллах в соответствии с ее положением в алфавите.: a = 1, b = 2, c = 3 так далее.

function high(x){
    let arrOfWords = x.split(' ')
    
    let arrOfScore = arrOfWords.map(word => word.split('').map(letter =>{
        return letter.charCodeAt(0) - 96
    }).reduce((previos, current)=> previos+current))

    const indexOfMaxWord = arrOfScore.indexOf(Math.max.apply(null, arrOfScore))

    return arrOfWords[indexOfMaxWord];
}

console.log(high('man i need a taxi up to ubud'))