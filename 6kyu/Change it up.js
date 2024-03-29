// Создайте функцию, которая принимает строку в качестве параметра и выполняет следующие действия в указанном порядке.:

//1. Заменяет каждую букву буквой, следующей за ней в алфавите (см. примечание ниже).)
//2. Делает любые гласные заглавными
//3. Делает любые согласные строчными

function changer(str) { 
    let unicodeArr = str.toLowerCase().split('').map((item)=>{
        return item.charCodeAt(0);
    })

    
    let newArr = (unicodeArr.map((number)=>{
        if (97<=number && number <= 122){
            if(number==122){
                return String.fromCharCode(97)
            }

            return String.fromCharCode(number+=1)
        }
        else {
            return String.fromCharCode(number)
        }
    }))

    return newArr.map((item)=>{
        if ((item === 'a') || (item === 'e') || (item === 'i') || (item === 'o') || (item === 'u')){
            return item.toUpperCase()
        }
        return item
    }).join('')

}

console.log(changer('Cat30'))