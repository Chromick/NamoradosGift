(() => {
  // Código do carrossel
  const imagens = document.querySelectorAll('.carrossel img');
  let index = 0;

  function mostrarProximaImagem() {
    imagens[index].classList.remove('active');
    index = (index + 1) % imagens.length;
    imagens[index].classList.add('active');
  }

  setInterval(mostrarProximaImagem, 3000);
})();

(() => {
  // Código do contador
  function atualizarContador() {
    const inicio = new Date("2017-04-28T00:30:00");
    const agora = new Date();

    let diffMs = agora - inicio;

    const anos = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
    diffMs -= anos * 365.25 * 24 * 60 * 60 * 1000;

    const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    diffMs -= dias * 24 * 60 * 60 * 1000;

    const horas = Math.floor(diffMs / (1000 * 60 * 60));
    diffMs -= horas * 60 * 60 * 1000;

    const minutos = Math.floor(diffMs / (1000 * 60));

    document.getElementById("tempo-juntos").textContent = 
      `${anos} ano${anos !== 1 ? 's' : ''}, ${dias} dia${dias !== 1 ? 's' : ''}, ` +
      `${horas} hora${horas !== 1 ? 's' : ''} e ${minutos} minuto${minutos !== 1 ? 's' : ''}.`;
  }

  atualizarContador();
  setInterval(atualizarContador, 30000);
})();

(() => {
  // Código do áudio
  window.addEventListener('load', () => {
    const audio = document.getElementById('musica');
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Autoplay bloqueado. Tocando após interação.');
        document.body.addEventListener('click', () => {
          audio.play();
        }, { once: true });
      });
    }
  });
})();

(() => {
  // Código das estrelas
  document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars');

    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${1 + Math.random() * 2}s`;
      starsContainer.appendChild(star);
    }
  });
})();

(() => {
  // Código da cartinha
  const mensagem = "Amor, cada segundo contigo é um presente que Deus me dá. Feliz Dia dos Namorados!";
  let index = 0;

  function escreverTexto() {
    const div = document.getElementById("cartinha");
    if (index < mensagem.length) {
      div.textContent += mensagem.charAt(index);
      index++;
      setTimeout(escreverTexto, 70);
    }
  }

  escreverTexto();
})();

document.getElementById("abrirCarta").addEventListener("click", function () {
  const intro = document.getElementById("intro");
  const musica = document.getElementById("musica");

  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    musica.play();
  }, 500);
});
