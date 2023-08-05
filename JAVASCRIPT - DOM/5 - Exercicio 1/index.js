function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  const confirmation = confirm(
    "Escalar " + name + " como " + position + " com o número " + number
  );

  if (confirmation) {
    const teamList = document.getElementById("teamList");
    const ul = document.createElement("ul");
    ul.id = "player -" + number

    const nameLi = document.createElement("li");
    nameLi.innerText = "Nome: " + name;
    ul.appendChild(nameLi);

    const positionLi = document.createElement("li");
    positionLi.innerText = "Posição: " + position;
    ul.appendChild(positionLi);

    const numberLi = document.createElement("li");
    numberLi.innerText = "Número: " + number;
    ul.appendChild(numberLi);

    ul.appendChild(document.createElement("hr"));
    teamList.append(ul);
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value
  const playerToRemove = document.getElementById("player -" + number)

  const confirmation = confirm(
    "Deseja remover o número " + number + "?"
  )

  if(confirmation) {
    playerToRemove.remove()
  } else {

  }
}
