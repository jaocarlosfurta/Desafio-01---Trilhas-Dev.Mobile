function verificarResposta(resposta) {
  if (
    resposta === null ||
    resposta.trim() === "" ||
    isNaN(Number(resposta))
  ) {
    alert(
      "Resposta inválida. A simulação foi encerrada. Clique em Simular compra para começar novamente."
    );

    return false;
  }

  var quantidade = Number(resposta);

  return quantidade === 0 ? null : quantidade;
}

function simularCompra() {
  var produtos = [
    { nome: "Super Nintendo", preco: 320 },
    { nome: "Nintendo Gamecube", preco: 450 },
    { nome: "Sony PlayStation", preco: 250 },
    { nome: "Pepsiman", preco: 60 },
    { nome: "Resident Evil 4 (Gamecube)", preco: 50 },
    { nome: "Super Mario RPG", preco: 60 }
  ];

  for (var produto of produtos) {
    var resposta = prompt(
      "Quantos " + produto.nome + " deseja comprar? (R$ " + produto.preco + " cada)"
    );

    produto.quantidade = verificarResposta(resposta);

    if (produto.quantidade === false) {
      return;
    }
  }

  var produtosSelecionados = produtos.filter(function (produto) {
    return produto.quantidade !== null;
  });

  if (produtosSelecionados.length === 0) {
    alert("Nenhum produto foi selecionado.");
    return;
  }

  var totalCompra = produtosSelecionados.reduce(function (total, produto) {
    return total + produto.quantidade * produto.preco;
  }, 0);

  var resumoCompra = produtosSelecionados.map(function (produto) {
    var valorProduto = produto.quantidade * produto.preco;

    return (
      produto.nome +
      ": " +
      produto.quantidade +
      " unidade(s) - R$ " +
      valorProduto
    );
  }).join("\n");

  alert(
    "Resumo da compra:\n" +
    resumoCompra +
    "\n\nTotal da compra: R$ " +
    totalCompra
  );
}
