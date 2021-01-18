var container = document.querySelector("#app ul")
var inputElement = document.querySelector("#inpt")
var inputElement1 = document.querySelector("#inpt1")
var buttonElement = document.querySelector("#app button")


var msgs = ['']


function render(){
    container.innerHTML = ''
    for(msg of msgs){
        var newElement = document.createElement('li')
        var msgtext = document.createTextNode(msg)

        var linkElement = document.createElement('a')
        var linktext = document.createTextNode('Excluir')

        linkElement.setAttribute('href','#')
        var pos = msgs.indexOf(msg)

        linkElement.setAttribute('onclick','deleteMsg(' + pos +')')
        linkElement.appendChild(linktext)
        
        newElement.appendChild(msgtext)
        newElement.appendChild(linkElement)
        container.appendChild(newElement)
    }
}

render()
function adicionarMsg(){
    
    var msgText = inputElement.value
    var msgText1 = inputElement1.value

    msgs.push(msgText  + ' ' + msgText1)
    inputElement.value = ''
    inputElement1.value = ''
    render()
    
}
buttonElement.onclick = adicionarMsg

function deleteMsg(pos){
    msgs.splice(pos,1)
    render()

}
render()

var btnCredito = document.querySelector("#btnCreditos")

btnCredito.onclick = function() {
    var pop = document.getElementById('pop-js')
    pop.classList.add('mostrar')
    pop.addEventListener('click', (e) => {
        if(e.target.id == 'pop-js' || e.target.id == 'btnFechar'){
            pop.classList.remove('mostrar')
        }
    })
}
