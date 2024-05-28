
const btnMostrarMais = document.querySelector('.btn-mostrar-projetos');
const btnMostrarMenos = document.querySelector('.btn-esconder-projetos');
const projetosAtivos = document.querySelectorAll('.projeto:not(.ativo)');

    btnMostrarMais.addEventListener('click', () => {
        avisoGay();
    })



    btnMostrarMais.addEventListener('click', () => {
       mostrarMaisProjetos();
       esconderBotaoMaisProjetos();
       mostrarBotaoMenosProjetos();
})

    btnMostrarMenos.addEventListener('click', () => {    
    esconderMaisProjetos();
    esconderBotaoMostrarMenos();
    mostrarBotaoMostrarMais();
})



function mostrarBotaoMostrarMais() {
    btnMostrarMais.classList.remove('remover');
}

function esconderBotaoMostrarMenos() {
    btnMostrarMenos.classList.add('remover');
}

function mostrarBotaoMaisProjetos() {
    btnMostrarMais.classList.add('ativo');
    // btnMostrarMais.classList.remove('remove');
}

function esconderMaisProjetos() {
    projetosAtivos.forEach(projetoAtivo => {
        projetoAtivo.classList.remove('ativo');
    });
}

function mostrarBotaoMenosProjetos() {
    btnMostrarMenos.classList.remove('remover');
}

function esconderBotaoMaisProjetos() {
    btnMostrarMais.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosAtivos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
