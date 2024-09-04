function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    let isAlugado = imagem.classList.contains('dashboard__item__img--rented');
    if (isAlugado) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        if (window.confirm("Você realmente quer devolver?")) {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
        }
    }
}

function buscaQuantidadeJogosAlugados() {
    let itens = document.querySelectorAll('[class^=dashboard__items__item]');
    let contadorAlugados = 0;
    for (var i = 0; i < itens.length; i++) {
        let isAlugado = itens[i].querySelector('.dashboard__item__img').classList.contains('dashboard__item__img--rented');
        if (isAlugado) {
            contadorAlugados++;
        }
    }

    console.log(contadorAlugados);
}