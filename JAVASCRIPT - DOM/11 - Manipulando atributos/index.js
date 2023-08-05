const input = document.getElementById("input")

document.getElementById("value").addEventListener("click", function() {
    // input.value = input.value === "" ? "Olá, mundo!" : ""
    input.value = "Olá, mundo!"

    console.log(input.value)
    console.log(input.getAttribute("value"))
})

document.getElementById("type").addEventListener("click", function() {
    // input.type = input.type !== "radio" ? "radio" : "text"
    input.setAttribute("type", "radio")
})

document.getElementById("placeholder").addEventListener("click", function() {
    input.placeholder = "Digite algo"
})

document.getElementById("disable").addEventListener("click", function() {
    input.setAttribute("disabled", !input.disabled)
})

document.getElementById("data").addEventListener("click", function() {
    var data = input.dataset.somethingElse
    console.log("O valor do atributo data-something-else é: " + data)
    input.dataset.something = "Algum outro valor"
    data = input.dataset.somethingElse
    console.log("O valor do atributo data-something-else agora é: " + data)
})