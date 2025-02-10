// Função principal do programa
function listaDeCompras() {
    // Objeto para armazenar os itens por categoria
    const categorias = {
      Frutas: [],
      Laticínios: [],
      Congelados: [],
      Doces: [],
      Outros: [] // Categoria para alimentos que não se encaixam nas outras
    };
  
    // Loop principal para adicionar itens à lista
    while (true) {
      // Pergunta se o usuário deseja adicionar um item
      const adicionar = prompt("Deseja adicionar um item à lista de compras? (sim/não)");
  
      // Se o usuário responder "não", sai do loop
      if (adicionar.toLowerCase() !== "sim") {
        break;
      }
  
      // Pergunta qual comida o usuário deseja inserir
      const comida = prompt("Qual comida você deseja inserir?");
  
      // Pergunta em qual categoria a comida se encaixa
      const categoria = prompt("Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados, Doces, Outros)"
      );
  
      // Adiciona a comida à categoria correta
      switch (categoria.toLowerCase()) {
        case "frutas":
          categorias.Frutas.push(comida);
          break;
        case "laticínios":
          categorias.Laticínios.push(comida);
          break;
        case "congelados":
          categorias.Congelados.push(comida);
          break;
        case "doces":
          categorias.Doces.push(comida);
          break;
        default:
          categorias.Outros.push(comida); // Se a categoria não for reconhecida, vai para "Outros"
      }
    }
  
    // Exibe a lista de compras
    console.log("Lista de compras:");
  
    // Para cada categoria, exibe os itens
    for (const categoria in categorias) {
      // Se a categoria tiver itens, exibe a categoria e os itens
      if (categorias[categoria].length > 0) {
        console.log(`  ${categoria}: ${categorias[categoria].join(", ")}`);
      }
    }
  }
  
  // Chama a função principal para iniciar o programa
  listaDeCompras();