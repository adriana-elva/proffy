//procurar botao 
document.querySelector("#add-time")
// quando clicar no botão
.addEventListener('click', cloneField)

// executar uma ação 
function cloneField(){
    console.log("cheguei aqui")

    //Duplicaros campos. que campo?
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Limpar os campos. que campos?
    const fields = newFieldsContainer.querySelectorAll('input')
    console.log(fields)

    //para cada campo, limpar

//para cada cada field
    fields.forEach(function(field){
        //pegar o field do momento  e limpar
        console.log(field)
        field.value=""

    })
    // fields[0].value = ""
    // fields[1].value = ""
  
    //Colocar na página. onde?
    document.querySelector("#schedule-itens").appendChild(newFieldsContainer)
}
