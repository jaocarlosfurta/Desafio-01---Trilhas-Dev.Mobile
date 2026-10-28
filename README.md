# Banana Game Store — Simulador de Compras

## Identificação

- **Aluno:** João Carlos Furtado
- **Trilha:** Desenvolvimento Mobile — Trilhas Inova
- **Desafio:** Minha Loja: Simulador de Compras

## Sobre a loja

A Banana Game Store é uma loja fictícia de jogos e consoles clássicos. O catálogo apresenta seis itens com fotos, descrições e preços.

## Catálogo

| Produto | Descrição | Preço |
| --- | --- | ---: |
| Super Nintendo | Console com caixa, fios e entradas originais; bloqueado | R$ 320,00 à vista |
| Nintendo Gamecube | Console com fonte e controle paralelos; desbloqueado | R$ 450,00 à vista |
| Sony PlayStation | Sem caixa; controles e cabos originais; Memory Card de brinde; desbloqueado | R$ 250,00 |
| Pepsiman | Jogo de ação e corrida | R$ 60,00 |
| Resident Evil 4 (Gamecube) | Jogo de ação e terror | R$ 50,00 |
| Super Mario RPG | Jogo de RPG com Mario e seus amigos | R$ 60,00 |

## Requisitos do desafio

### Página da loja

- [x] Nome e breve descrição da loja.
- [x] Pelo menos três produtos, com nome, descrição curta e preço.
- [x] Instruções de uso e botão “Simular compra”.
- [x] Rodapé com o nome do aluno.
- [x] Estilização com CSS e imagens do catálogo armazenadas na pasta `assets`.

### Simulação de compra

- [x] O botão chama uma função JavaScript com `onclick`.
- [x] `prompt()` pergunta a quantidade de cada produto.
- [x] `Number()` converte as respostas em números.
- [x] O programa calcula preço × quantidade para cada item.
- [x] `alert()` mostra quantidades, valores dos itens e total.
- [x] A quantidade `0` pode ser usada para não comprar um produto.
- [x] Se todas as quantidades forem `0`, informa que nenhum produto foi selecionado.
- [x] Resposta vazia, cancelada ou não numérica encerra a simulação e orienta a reiniciar pelo botão.
- [x] Os preços usados no JavaScript correspondem aos preços do catálogo.
- [ ] Aplicar desconto: o enunciado menciona verificar o direito ao desconto, mas não especifica a regra, o valor mínimo ou o percentual. A regra precisa ser definida antes de implementar esse item.

### Arquivos e documentação

- [x] Projeto organizado em `index.html`, `style.css` e `script.js`.
- [x] Pasta `assets` contém as imagens usadas no catálogo.
- [x] README apresenta nome do projeto, aluno, trilha, loja, produtos, preços, tecnologias e instruções de execução.
- [ ] Adicionar uma captura de tela da página em `assets/captura.png`.
- [ ] Registrar os testes realizados.
- [ ] Preencher a dificuldade encontrada e o que foi aprendido.

## Tecnologias e execução

- **HTML5:** estrutura da página e catálogo.
- **CSS3:** cores, layout dos cartões, fotos e adaptação para telas menores.
- **JavaScript:** perguntas com `prompt()`, conversão com `Number()`, cálculos, validação simples e resultado com `alert()`.

Para executar, abra `index.html` em um navegador. Não é necessário instalar dependências.

## Captura de tela

Depois de capturar a página no navegador, salve a imagem como `assets/captura.png` e descomente a linha abaixo:

<!-- ![Captura da Banana Game Store](assets/captura.png) -->

## Testes realizados

Marque os itens após executá-los:

- [ ] Abrir a página no navegador e confirmar que o CSS e as imagens carregam.
- [ ] Fazer uma simulação com quantidades positivas e conferir cada subtotal e o total.
- [ ] Digitar `0` para um produto e confirmar que a compra continua.
- [ ] Digitar `0` para todos os produtos e confirmar a mensagem de nenhum produto selecionado.
- [ ] Enviar uma resposta vazia, cancelar ou digitar texto e confirmar que a simulação para e pode ser reiniciada pelo botão.
- [ ] Conferir a página em uma tela estreita de celular.

## Dificuldade e aprendizado

- **Dificuldade encontrada:** [Preencha com uma dificuldade que você teve ao desenvolver o projeto.]
- **O que aprendi:** [Conte o que aprendeu sobre HTML, CSS ou lógica com JavaScript.]
