var conteudoAcordeon = document.querySelectorAll("div[class='acordeon-content']")
console.log(conteudoAcordeon)

let setaCinza = document.querySelectorAll("img[src='./src/images/seta_cinza.png']");
console.log(setaCinza)

setaCinza.forEach(function(element, indice){
    console.log(element)
    element.addEventListener('click', function() {
        console.log(element.src)
        if(element.src.endsWith('seta_cinza.png')) {
            element.src = './src/images/seta_aberta.png';
            conteudoAcordeon[indice].innerHTML = `<p class='description-acordeon'>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                             Vivamus quis egestas ex, a elementum est. 
                             Mauris auctor nunc quis erat.
                             </p>`
        } else {
            element.src = './src/images/seta_cinza.png'
            conteudoAcordeon[indice].innerHTML = ''
        }
    })
}) 