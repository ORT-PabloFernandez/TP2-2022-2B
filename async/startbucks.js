function pedidoStarbucks(pedido, callbackCliente) {
  switch (pedido.tipo) {
    case "Late":
      setTimeout(() => {
        callbackCliente(pedido.cliente);
      }, 4000);
      break;
    case "Té helado":
      setTimeout(() => {
        callbackCliente(pedido.cliente);
      }, 2000);
      break;
    default:
      break;
  }
}

const pedido1 = { tipo: "Late", cliente: "Juan" };
const pedido2 = { tipo: "Té helado", cliente: "Pedro" };

pedidoStarbucks(pedido1, (cliente) => {
  console.log(`Pedido listo llamar a: ${cliente}`);
});

pedidoStarbucks(pedido2, (cliente) => {
  console.log(`Pedido listo llamar a: ${cliente}`);
});
