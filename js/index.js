window.addEventListener('load', () => {
  const filmes = JSON.parse(localStorage.getItem('filmes') || '[]');
  const container = document.getElementById('filmes-cartaz');

  if (!container) return;

  if (filmes.length === 0) {
    container.innerHTML = `<p class="text-center">Nenhum filme cadastrado.</p>`;
    return;
  }

  filmes.forEach(filme => {
    const card = document.createElement('div');
    card.className = 'card shadow-sm card-filme';

    card.innerHTML = `
      <img src="${filme.imagem}" class="card-img-top poster-img" alt="${filme.titulo}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${filme.titulo}</h5>
        <p class="card-text">${filme.descricao}</p>
        <ul class="list-unstyled">
          <li><strong>Gênero:</strong> ${filme.genero}</li>
          <li><strong>Duração:</strong> ${filme.duracao} min</li>
          <li><strong>Classificação:</strong> ${filme.classificacao}</li>
          <li><strong>Estreia:</strong> ${new Date(filme.estreia).toLocaleDateString('pt-BR')}</li>
        </ul>
        <a href="sessoes.html" class="btn btn-primary mt-auto w-100">Ver Sessões</a>
      </div>
    `;

    container.appendChild(card);
  });

  // Navegação com as setas
  const btnAnterior = document.getElementById('btn-anterior');
  const btnProximo = document.getElementById('btn-proximo');

  btnAnterior.addEventListener('click', () => {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  });

  btnProximo.addEventListener('click', () => {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  });
});
