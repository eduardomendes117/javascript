let num = [5, 8, 4, 2, 1]
num[5] = 7
num.push(9)
num.sort()
console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro vetor é ${num[0]}`)
let pos = num.indexOf(7)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}