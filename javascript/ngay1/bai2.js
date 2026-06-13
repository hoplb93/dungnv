//bai 2: chuyen doi tuong thanh mang va sap xep theo gia tri
const obj = {
    apple: 3,
    banana: 1,
    orange: 2
}

let convertObjectToArray = (input = {}) => {
    const convertedArray = []
    for (const [key, value] of Object.entries(input)) 
        convertedArray.push([key, value])

    convertedArray.sort((a,b) => b[1] - a[1] )
    console.log(convertedArray)
}

convertObjectToArray(obj)