

function randonNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1 ))
}

const num1 = randonNumber(1, 100)

console.log(num1)