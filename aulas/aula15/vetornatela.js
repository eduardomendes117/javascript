let valores = [8, 9 ,2 ,5 ,7 ,1]
valores.sort()

//console.log(valores)
/*
console.log(valores[0])
console.log(valores[0])
console.log(valores[0])
console.log(valores[0])
console.log(valores[0])
console.log(valores[0])

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
