function nota(){
    const button = document.querySelector("body")

    let input = document.querySelector("input")
    let number = input.value
    

    const p = document.createElement("p")
    if(number >= 90){
        
        p.innerText = "sua nota é A"
        
    }else if (number>= 80 && number<=89){
        
        p.innerText = "sua nota é B"
       
    }else if (number>= 70 && number<=79){
        
        p.innerText = "sua nota é C"
      
    }else if (number>= 60 && number<=69){
        
        p.innerText = "sua nota é D"
        
    }
    button.appendChild(p)
}
