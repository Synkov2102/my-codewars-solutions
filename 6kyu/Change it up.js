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