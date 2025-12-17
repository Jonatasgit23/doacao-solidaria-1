function sugerirBrinquedo() {
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const resultado = document.getElementById("resultado");
  
    if (idade < 2 || idade > 14 || isNaN(idade)) {
      resultado.innerText = "Idade inválida.";
      return;
    }
  
    const brinquedos = {
      menino: {
        pequeno: ["Carrinho", "Blocos de montar", "Bola"],
        medio: ["Boneco de ação", "Pista de corrida", "Quebra-cabeça"],
        grande: ["Jogo de tabuleiro", "Kit científico", "Lego"]
      },
      menina: {
        pequeno: ["Boneca", "Blocos coloridos", "Pelúcia"],
        medio: ["Casinha", "Quebra-cabeça", "Kit de desenho"],
        grande: ["Jogo de tabuleiro", "Kit de artes", "Livro interativo"]
      }
    };
  
    let faixa;
    if (idade <= 5) faixa = "pequeno";
    else if (idade <= 9) faixa = "medio";
    else faixa = "grande";
  
    const lista = brinquedos[sexo][faixa];
    const escolha = lista[Math.floor(Math.random() * lista.length)];
  
    resultado.innerText = `Brinquedo sugerido: ${escolha}`;
  }
  