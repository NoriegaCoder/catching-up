const btn = document.getElementById('btn')
const colors = ['bluesky','ligthgreen', 'brown', 'black', 'darkblue', 'orange', 'yellowgreen', 'purple']
function randomColor(length) {
    
    return Math.floor(Math.random() * length)
}

btn.onclick = function(){
    let colorDeFondo = colors[randomColor(colors.length)]
    let colorDeLetra;
    do {
        colorDeLetra = colors[randomColor(colors.length)]
    } while (colorDeFondo === colorDeLetra)




    document.body.style.backgroundColor = colorDeFondo
    document.getElementById('titulo').style.color = colorDeLetra
}