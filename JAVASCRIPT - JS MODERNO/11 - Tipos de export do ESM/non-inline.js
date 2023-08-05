function group() {
  console.log("Export nomeado não-inline (agrupado)");
}

function exportDefault() {
  console.log("Export default não-inline");
}

export { group };
// Pode ter várias funções dentro do export

export default exportDefault;
// Apenas uma função pode ser default
