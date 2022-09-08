//Lista de Pedidos
let pedidos = [
  {'id': 420, 'nome':'Dener', 'alimento': 'Sandubão de Bacon', 'bebida': 'Suco Limão' },
  {'id': 152, 'nome':'Naiady', 'alimento': 'Sandubão Vegano', 'bebida': 'Suco de Laranja' },
  {'id': 29, 'nome':'Marcio', 'alimento': 'Coxinha', 'bebida': 'Suco de Uva' },
  {'id': 33, 'nome':'Isabel', 'alimento': 'Sandubão de Picanha', 'bebida': 'Refrigerante' },
  {'id': 55, 'nome':'José', 'alimento': 'Pizza', 'bebida': 'Refrigerante' }
];

//Iterador forEach
pedidos.forEach( ( pedido, index ) => {
  let { nome, alimento, bebida } = pedido;
  console.log(`${index} - O Cliente: ${nome} fez o pedido do alimento: ${alimento} e a bebida: ${bebida}.`);
})