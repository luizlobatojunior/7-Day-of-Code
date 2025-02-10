function jogoAdivinhacao() {
    // Gera um número aleatório entre 0 e 10
    const numeroSecreto = Math.floor(Math.random() * 11);
    let tentativas = 3;
    let numeroInicial = numeroSecreto; // Guarda o número inicial para exibir no final
  
    alert("Bem-vindo ao Jogo de Adivinhação!");
    alert("Tente adivinhar o número secreto entre 0 e 10.");
  
    // Loop principal do jogo
    while (tentativas > 0) {
      try {
        // Solicita um palpite ao jogador
        let palpite = parseInt(prompt("Digite seu palpite:"));
  
        // Valida o palpite
        if (isNaN(palpite) || palpite < 0 || palpite > 10) {
          alert("Por favor, digite um número entre 0 e 10.");
          continue; // Pula para a próxima iteração do loop
        }
  
        // Verifica se o jogador acertou
        if (palpite === numeroSecreto) {
          alert("Parabéns! Você adivinhou o número secreto.");
          return; // Sai do jogo
        }
  
        // Informa se o palpite é maior ou menor e decrementa as tentativas
        if (palpite < numeroSecreto) {
          alert("O número secreto é maior.");
        } else {
          alert("O número secreto é menor.");
        }
        tentativas--;
  
        // Informa quantas tentativas restam
        if (tentativas > 0) {
          alert(`Você tem ${tentativas} tentativas restantes.`);
        }
      } catch (error) {
        alert("Entrada inválida. Por favor, digite um número inteiro.");
      }
    }
  
    // Se o jogador não acertar, informa o número inicial
    alert(`Você não conseguiu adivinhar o número secreto. O número era ${numeroInicial}.`);
  }
  
  jogoAdivinhacao();




