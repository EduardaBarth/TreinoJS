let family = {
    receitas: [],
    despesas: []
}

function add(){
    const inputEntra = document.getElementById("entra")
    const inputSai = document.getElementById("sai")

    const receita = inputEntra.value
    const despesa = inputSai.value

    family.receitas.push(receita)
    family.despesas.push(despesa)
}
function sum(array){
    let total = 0
    for(let value of array){
        total += value //total = total + value
    }
    return total
}

function total(){
    const entra = sum(family.receitas) //passando o array receita para a função
    const sai = sum(family.despesas)

    const total2 = entra - sai

    const button = document.querySelector("body")
    const p = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")
    p2.innerText = "Sua receita é de " + entra
    p3.innerText = "Sua despesa é de " + sai

    if(total2 >= 0){
        p.innerText = "Seu saldo positivo é: " + total2
    }else{
        p.innerText = "Seu saldo negativo é: " + total2
    }
    button.appendChild(p)
    button.appendChild(p2)
    button.appendChild(p3)
}