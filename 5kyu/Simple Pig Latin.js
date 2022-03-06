//Переместите первую букву каждого слова в конец, 
//а затем добавьте «ay» в конец слова. Оставьте знаки препинания нетронутыми.

function pigIt(str){
    let arr = str.split(' ').map(word => word.split(''));

   return arr.map((word)=>{
       let newWord = []
        if (!((97 <= word[word.length-1].charCodeAt(0) && word[word.length-1].charCodeAt(0)  <= 122)||(65 <= word[word.length-1].charCodeAt(0) && word[word.length-1].charCodeAt(0) <= 90))){
            if (word.length == 1) {
                return word.join('')
            }
            Array.prototype.push.apply(newWord, word.slice(1, word.length-1))
            newWord.push(word[0], 'a', 'y', word[word.length-1])
            return newWord.join('')
        }
        else {
            Array.prototype.push.apply(newWord, word.slice(1, word.length))
            newWord.push(word[0], 'a', 'y')
            return newWord.join('')
        }
    }).join(' ')
}


console.log(pigIt('Pig latin is cool'))