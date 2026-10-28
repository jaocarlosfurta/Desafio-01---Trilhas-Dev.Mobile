function simularCompra() {
  var respostaSuperNintendo = prompt(
    "Quantos Super Nintendo deseja comprar? (R$ 320,00 cada)"
  );

  if (
    respostaSuperNintendo === null ||
    respostaSuperNintendo.trim() === "" ||
    isNaN(Number(respostaSuperNintendo))
  ) {
    alert(
      "Resposta inválida. A simulação foi encerrada. Clique em Simular compra para começar novamente."
    );
    return;
  }

  var quantidadeSuperNintendo = Number(respostaSuperNintendo);

  var respostaGamecube = prompt(
    "Quantos Nintendo Gamecube deseja comprar? (R$ 450,00 cada)"
  );

  if (
    respostaGamecube === null ||
    respostaGamecube.trim() === "" ||
    isNaN(Number(respostaGamecube))
  ) {
    alert(
      "Resposta inválida. A simulação foi encerrada. Clique em Simular compra para começar novamente."
    );
    return;
  }

  var quantidadeGamecube = Number(respostaGamecube);

  var respostaPlayStation = prompt(
    "Quantos Sony PlayStation deseja comprar? (R$ 250,00 cada)"
  );

  if (
    respostaPlayStation === null ||
    respostaPlayStation.trim() === "" ||
    isNaN(Number(respostaPlayStation))
  ) {
    alert(
      "Resposta inválida. A simulação foi encerrada. Clique em Simular compra para começar novamente."
    );
    return;
  }

  var quantidadePlayStation = Number(respostaPlayStation);

  var respostaPepsiman = prompt(
    "Quantos jogos Pepsiman deseja comprar? (R$ 60,00 cada)"
  );

  if (
    respostaPepsiman === null ||
    respostaPepsiman.trim() === "" ||
    isNaN(Number(respostaPepsiman))
  ) {
    alert(
      "Resposta inválida. A simulação foi encerrada. Clique em Simular compra para começar novamente."
    );
    return;
  }

  var quantidadePepsiman = Number(respostaPepsiman);

  var respostaResidentEvil = prompt(
    "Quantos Resident Evil 4 (Gamecube) deseja comprar? (R$ 50,00 cada)"
  );

  if (
    respostaResidentEvil === null ||
    respostaResidentEvil.trim() === "" ||
    isNaN(Number(respostaResidentEvil))
  ) {
    alert(
      "Resposta inválida. A simulação foi encerrada. Clique em Simular compra para começar novamente."
    );
    return;
  }

  var quantidadeResidentEvil = Number(respostaResidentEvil);

  var respostaMarioRpg = prompt(
    "Quantos Super Mario RPG deseja comprar? (R$ 60,00 cada)"
  );

  if (
    respostaMarioRpg === null ||
    respostaMarioRpg.trim() === "" ||
    isNaN(Number(respostaMarioRpg))
  ) {
    alert(
      "Resposta inválida. A simulação foi encerrada. Clique em Simular compra para começar novamente."
    );
    return;
  }

  var quantidadeMarioRpg = Number(respostaMarioRpg);

  var valorSuperNintendo = quantidadeSuperNintendo * 320;
  var valorGamecube = quantidadeGamecube * 450;
  var valorPlayStation = quantidadePlayStation * 250;
  var valorPepsiman = quantidadePepsiman * 60;
  var valorResidentEvil = quantidadeResidentEvil * 50;
  var valorMarioRpg = quantidadeMarioRpg * 60;

  if (
    quantidadeSuperNintendo === 0 &&
    quantidadeGamecube === 0 &&
    quantidadePlayStation === 0 &&
    quantidadePepsiman === 0 &&
    quantidadeResidentEvil === 0 &&
    quantidadeMarioRpg === 0
  ) {
    alert("Nenhum produto foi selecionado.");
  } else {
    var totalCompra =
      valorSuperNintendo +
      valorGamecube +
      valorPlayStation +
      valorPepsiman +
      valorResidentEvil +
      valorMarioRpg;

    alert(
      "Resumo da compra:\n" +
      "Super Nintendo: " + quantidadeSuperNintendo + " unidade(s) - R$ " + valorSuperNintendo + "\n" +
      "Nintendo Gamecube: " + quantidadeGamecube + " unidade(s) - R$ " + valorGamecube + "\n" +
      "Sony PlayStation: " + quantidadePlayStation + " unidade(s) - R$ " + valorPlayStation + "\n" +
      "Pepsiman: " + quantidadePepsiman + " unidade(s) - R$ " + valorPepsiman + "\n" +
      "Resident Evil 4 (Gamecube): " + quantidadeResidentEvil + " unidade(s) - R$ " + valorResidentEvil + "\n" +
      "Super Mario RPG: " + quantidadeMarioRpg + " unidade(s) - R$ " + valorMarioRpg + "\n\n" +
      "Total da compra: R$ " + totalCompra
    );
  }
}
