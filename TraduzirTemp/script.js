const inputC = document.getElementById("C")
const inputF = document.getElementById("F")

const F = inputF.value
const C = inputC.value

function FparaC(){
    let temp =(F - 32)/(9/5)
    const body = document.querySelector("body")
    const p = document.createElement("p")
    p.innerText = "Temperatura em Celsius é " + temp
    body.appendChild(p)
}

function CparaF(){
    try{
        const temp = C*(9/5) + 32
        console.log(temp)
        const body = document.querySelector("body")
        const p = document.createElement("p")
        p.innerHTML = "Temperatura em Fahrenheit é " + temp
        body.appendChild(p)
    }catch(error){
        console.log(error)
    }
}