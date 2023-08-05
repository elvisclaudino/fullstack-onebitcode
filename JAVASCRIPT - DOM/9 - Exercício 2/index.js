const createForm = document.querySelector("#createForm")

addButton.addEventListener("click", function(ev) {
    ev.preventDefault()

    const newForm = document.querySelector("#newForm")

    const labelInput = document.createElement("label")
    labelInput.htmlFor = "input"
    labelInput.innerText = "Nome da tecnologia: "

    const newInput = document.createElement("input")
    newInput.type = "text"
    newInput.id = "input"
    newInput.name = "input"

    const br = document.createElement("br")

    const labelRadio = document.createElement("label")
    labelRadio.htmlFor = "radio"
    labelRadio.innerText = "Tempo de experiência: "

    const br2 = document.createElement("br")

    const radio1 = document.createElement("input")
    radio1.type = "radio"
    radio1.id = "radio1"
    radio1.name = "radio"

    const br3 = document.createElement("br")

    const radio2 = document.createElement("input")
    radio2.type = "radio"
    radio2.id = "radio2"
    radio2.name = "radio"

    const br4 = document.createElement("br")

    const radio3 = document.createElement("input")
    radio3.type = "radio"
    radio3.id = "radio3"
    radio3.name = "radio"

    const br5 = document.createElement("br")

    const labelRadio1 = document.createElement("label")
    labelRadio1.htmlFor = "radio1"
    labelRadio1.innerText = "0-2 anos "

    const labelRadio2 = document.createElement("label")
    labelRadio2.htmlFor = "radio2"
    labelRadio2.innerText = "3-4 anos "

    const labelRadio3 = document.createElement("label")
    labelRadio3.htmlFor = "radio3"
    labelRadio3.innerText = "5+ anos "

    const buttonAdd = document.createElement("button")
    buttonAdd.innerText = "Adicionar"
    buttonAdd.id = "buttonAdd"
    
    const buttonRemove = document.createElement("button")
    buttonRemove.innerText = "Sair"
    
    newForm.appendChild(labelInput)
    newForm.appendChild(newInput)
    
    newForm.appendChild(br)
    
    newForm.appendChild(labelRadio)

    newForm.appendChild(br2)
    
    newForm.appendChild(radio1)
    newForm.appendChild(labelRadio1)

    newForm.appendChild(br3)
    
    newForm.appendChild(radio2)
    newForm.appendChild(labelRadio2)

    newForm.appendChild(br4)
    
    newForm.appendChild(radio3)
    newForm.appendChild(labelRadio3)

    newForm.appendChild(br5)

    newForm.appendChild(buttonAdd)
    newForm.appendChild(buttonRemove)
})

const buttonAdd = document.querySelector("#buttonAdd")
buttonAdd.addEventListener("submit", function(ev) {
    const name = document.querySelector("#name").value
    const tecnologia = document.querySelector("#input").value
    console.log({name, tecnologia})
})