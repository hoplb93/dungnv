// tim ky tu dau tien khong lap lai trong chuoi cho truoc
const str = 'aabbcdecde'

let getFirstNonRepeatCharacter = (input = '') => {
    let freqMap = new Map()
    for (let char of input) {
        !freqMap.has(char) ? freqMap.set(char, 1) : freqMap.set(char, freqMap.get(char) + 1)
    }

    for (let char of new Set(input)) {
        if (freqMap.get(char) == 1) return char
    }
    return null
}

console.log(getFirstNonRepeatCharacter(str))