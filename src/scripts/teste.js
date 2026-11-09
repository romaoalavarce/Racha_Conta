function totalDoItem(preco, quantidade) {
  return preco * quantidade;
}
function mostrarTotalDoItem(preco, quantidade) {
  console.log(preco * quantidade);
}

const a = totalDoItem(14.5, 2);         // nada aparece; a vale 29
const b = mostrarTotalDoItem(14.5, 2);  // aparece 29; b vale undefined
console.log(a, b);                      // 29 undefined




