let player = "X"
const td2 = document.querySelectorAll("td") //puxar o td do index
function marcar(td2){ 
    if(td2.innerHTML) return //retornar  o que tem no td
    td2.innerHTML == player
    player = player === "X" ? "O" : "X" //se o player for igual X, então substitua o X por O, se não, subtitua por O
}