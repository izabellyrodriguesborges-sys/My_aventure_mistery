
const historia = document.getElementById("historia");
const mensagem = document.getElementById("mensagem");
const botaoVoltar = document.getElementById("voltar");
const botaoReiniciar = document.getElementById("reiniciar");

const historiaInicial = historia.innerHTML;

const caminhos = {
  castelo: {
    titulo: "O Castelo das Sombras",
    texto: "Você atravessa os portões. O salão está iluminado por velas negras. Uma escadaria leva à torre, enquanto uma porta dourada revela um corredor secreto.",
    escolhas: [
      { texto: "🕯️ Subir a escadaria", destino: "torre" },
      { texto: "🚪 Abrir a porta dourada", destino: "corredor" }
    ]
  },

  torre: {
    titulo: "A Torre Proibida",
    texto: "O vento sopra pelas janelas quebradas. Sobre uma mesa, há um diário antigo e uma chave de prata.",
    escolhas: [
      { texto: "📖 Ler o diário", destino: "diario" },
      { texto: "🗝️ Pegar a chave", destino: "biblioteca" }
    ]
  },

  corredor: {
    titulo: "O Corredor Secreto",
    texto: "Retratos acompanham cada passo seu. Um deles muda de expressão quando você se aproxima. Ao fundo, uma porta parece respirar.",
    escolhas: [
      { texto: "🖼️ Examinar o retrato", destino: "retrato" },
      { texto: "🚪 Abrir a porta misteriosa", destino: "cripta" }
    ]
  },

  diario: {
    titulo: "O Diário Esquecido",
    texto: "As páginas revelam que o reino desapareceu após um pacto. A última frase está escrita com tinta vermelha: 'Não confie na coroa'.",
    escolhas: [
      { texto: "👑 Procurar a coroa", destino: "salao" },
      { texto: "🔍 Investigar o pacto", destino: "cripta" }
    ]
  },

  biblioteca: {
    titulo: "A Biblioteca Proibida",
    texto: "Livros se movem sozinhos nas prateleiras. Um volume sem título começa a brilhar quando você ergue a chave.",
    escolhas: [
      { texto: "📚 Abrir o livro", destino: "livro" },
      { texto: "🗝️ Procurar uma fechadura", destino: "laboratorio" }
    ]
  },

  retrato: {
    titulo: "O Retrato Vivo",
    texto: "A figura pintada sussurra seu nome. Ela oferece revelar a verdade, mas exige que você entregue algo precioso.",
    escolhas: [
      { texto: "🗣️ Ouvir a figura", destino: "pacto" },
      { texto: "🏃 Sair imediatamente", destino: "jardim" }
    ]
  },

  cripta: {
    titulo: "A Cripta Real",
    texto: "Entre as lápides, você encontra um símbolo idêntico ao desenhado no diário. Uma passagem desce ainda mais fundo.",
    escolhas: [
      { texto: "⬇️ Descer a passagem", destino: "subsolo" },
      { texto: "🕯️ Examinar o símbolo", destino: "pacto" }
    ]
  },

  salao: {
    titulo: "O Salão da Coroa",
    texto: "A coroa repousa sobre um trono vazio. Quando você se aproxima, as portas se fecham e uma voz pergunta quem lhe deu permissão.",
    escolhas: [
      { texto: "👑 Tocar na coroa", destino: "coroa" },
      { texto: "🗣️ Responder à voz", destino: "guardiao" }
    ]
  },

  livro: {
    titulo: "O Livro Sem Título",
    texto: "O livro mostra imagens de acontecimentos que ainda não ocorreram. Em uma delas, você aparece diante de um espelho rachado.",
    escolhas: [
      { texto: "🪞 Procurar o espelho", destino: "espelho" },
      { texto: "🔥 Fechar o livro", destino: "laboratorio" }
    ]
  },

  laboratorio: {
    titulo: "O Laboratório Esquecido",
    texto: "Frascos antigos cobrem as bancadas. Um deles contém uma névoa prateada; outro, uma substância escura que parece absorver a luz.",
    escolhas: [
      { texto: "🌫️ Investigar a névoa", destino: "espelho" },
      { texto: "⚗️ Examinar a substância", destino: "subsolo" }
    ]
  },

  pacto: {
    titulo: "O Pacto das Trevas",
    texto: "Você descobre que o desaparecimento do reino foi causado por uma escolha feita pela família real. Agora, o pacto exige uma nova decisão.",
    escolhas: [
      { texto: "🕊️ Tentar quebrar o pacto", destino: "final_luz" },
      { texto: "🌑 Aceitar o poder oferecido", destino: "final_sombras" }
    ]
  },

  jardim: {
    titulo: "O Jardim das Rosas Negras",
    texto: "As flores se abrem ao luar. Uma estátua segura um medalhão com o brasão real e aponta para uma passagem escondida entre as árvores.",
    escolhas: [
      { texto: "🌹 Pegar o medalhão", destino: "guardiao" },
      { texto: "🌿 Seguir pela passagem", destino: "subsolo" }
    ]
  },

  subsolo: {
    titulo: "O Subsolo do Reino",
    texto: "Você encontra uma máquina antiga que mantém as sombras presas ao castelo. No centro, há um mecanismo que parece controlar tudo.",
    escolhas: [
      { texto: "⚙️ Desativar o mecanismo", destino: "final_luz" },
      { texto: "🔮 Usar o mecanismo", destino: "final_sombras" }
    ]
  },

  espelho: {
    titulo: "O Espelho Rachado",
    texto: "Seu reflexo se move antes de você. Ele revela que existe uma saída, mas somente quem descobrir a verdade poderá atravessá-la.",
    escolhas: [
      { texto: "✨ Revelar a verdade", destino: "final_luz" },
      { texto: "🌑 Aceitar o reflexo", destino: "final_sombras" }
    ]
  },

  guardiao: {
    titulo: "O Guardião Real",
    texto: "Uma armadura ganha vida. O guardião conta que protege o último segredo do reino e pergunta se você veio para salvar ou dominar.",
    escolhas: [
      { texto: "🛡️ Salvar o reino", destino: "final_luz" },
      { texto: "👑 Dominar o reino", destino: "final_sombras" }
    ]
  },

  coroa: {
    titulo: "O Preço da Coroa",
    texto: "A coroa reconhece sua presença. O poder do reino está ao seu alcance, mas você precisa decidir o que fazer com ele.",
    escolhas: [
      { texto: "🌅 Libertar o reino", destino: "final_luz" },
      { texto: "🌘 Governar as sombras", destino: "final_sombras" }
    ]
  },

  final_luz: {
    titulo: "Final: O Reino Renascido",
    texto: "A luz atravessa as janelas do castelo. As sombras desaparecem e as portas se abrem. Você libertou o reino e devolveu a esperança a todos.",
    final: true
  },

  final_sombras: {
    titulo: "Final: A Soberana das Sombras",
    texto: "As velas se apagam. Uma coroa escura surge diante de você. O reino continua envolto em mistério, mas agora é você quem decide seu destino.",
    final: true
  }
};

const nomes = {
  castelo: "Entrada do castelo",
  torre: "Torre proibida",
  corredor: "Corredor secreto",
  diario: "Diário esquecido",
  biblioteca: "Biblioteca",
  retrato: "Retrato vivo",
  cripta: "Cripta real",
  salao: "Salão da coroa",
  livro: "Livro sem título",
  laboratorio: "Laboratório",
  pacto: "Pacto das trevas",
  jardim: "Jardim das rosas",
  subsolo: "Subsolo",
  espelho: "Espelho rachado",
  guardiao: "Guardião real",
  coroa: "Preço da coroa",
  final_luz: "Final: Reino renascido",
  final_sombras: "Final: Soberana das sombras"
};

let caminhoPercorrido = [];
let faseAtual = "castelo";

function mostrarFase(id) {
  const fase = caminhos[id];

  if (!fase) {
    mensagem.textContent = "Algo misterioso aconteceu... Essa passagem não existe.";
    return;
  }

  faseAtual = id;

  document.getElementById("titulo-fase").textContent = fase.titulo;
  historia.textContent = fase.texto;
  document.getElementById("progresso").textContent =
    "Fase " + (caminhoPercorrido.length + 1) + " • " + (nomes[id] || id);

  const escolhas = document.getElementById("escolhas");
  escolhas.innerHTML = "";

  if (fase.final) {
    mensagem.textContent = "🏁 Fim da aventura. Você descobriu um dos finais!";
  } else {
    mensagem.textContent = "Escolha com cuidado... cada decisão pode mudar seu destino.";
  }

  if (fase.escolhas) {
    fase.escolhas.forEach(function(escolha) {
      const botao = document.createElement("button");
      botao.className = "escolha";
      botao.textContent = escolha.texto;

      botao.addEventListener("click", function() {
        caminhoPercorrido.push(faseAtual);
        mostrarFase(escolha.destino);
      });

      escolhas.appendChild(botao);
    });
  }

  botaoVoltar.hidden = caminhoPercorrido.length === 0;
  botaoReiniciar.hidden = false;
}

function iniciarAventura() {
  document.querySelector("main").classList.add("jogando");
  document.getElementById("introducao").hidden = true;
  document.getElementById("jogo").hidden = false;

  caminhoPercorrido = [];
  mostrarFase("castelo");
}

botaoVoltar.addEventListener("click", function() {
  if (caminhoPercorrido.length > 0) {
    const faseAnterior = caminhoPercorrido.pop();
    mostrarFase(faseAnterior);
  }
});

botaoReiniciar.addEventListener("click", function() {
  caminhoPercorrido = [];
  mostrarFase("castelo");
});

document.getElementById("comecar").addEventListener("click", iniciarAventura);
