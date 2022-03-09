class Roman {
    constructor(){
        this.exampleLettersArr = {
            M: 1000,
            D: 500,
            C: 100,
            L: 50,
            X: 10,
            V: 5,
            I: 1
        }

        this.exampleNumbersArr = [
            {0:"", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9:"IX"},
            {0:"", 1: "X", 2: "XX", 3: "XXX", 4: "XL", 5: "L", 6: "LX", 7: "LXX", 8: "LXXX", 9:"XC"},
            {0:"", 1: "C", 2: "CC", 3: "CCC", 4: "CD", 5: "D", 6: "DC", 7: "DCC", 8: "DCCC", 9:"CM"},
            {0:"", 1: "M", 2: "MM", 3: "MMM"}
        ]
    }

    toRoman(numbers){
        this.numbersArr=String(numbers).split('').reverse('');
        for (let i = 0; i < this.numbersArr.length; i++){
            this.numbersArr[i]=this.exampleNumbersArr[i][this.numbersArr[i]]
        }
        return this.numbersArr.reverse().join('')
    }

    fromRoman(letters){
        this.lettersArr=letters.split('');
        for (let i = 0; i < this.lettersArr.length; i++){
            this.lettersArr[i]=this.exampleLettersArr[this.lettersArr[i]]
        }
        for (let i = 0; i < this.lettersArr.length; i++){
            if(this.lettersArr[i]<this.lettersArr[i+1]){
                this.lettersArr[i+1]-=this.lettersArr[i]
                this.lettersArr[i]=0;

            }
        }
        return this.lettersArr.reduce((previos, current)=> previos+current)
    }
}

let RomanNumerals = new Roman

 console.log(RomanNumerals.fromRoman('M'))
 console.log(RomanNumerals.toRoman('1000'))