const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

const btnMostrarMais = document.querySelector('.btn-mostrar-projetos');
const btnMostrarMenos = document.querySelector('.btn-esconder-projetos');


btnMostrarMais.addEventListener('click', () => {
    
    esconderBtnMostrarMais();
    mostrarMaisProjetos();
    mostrarBtnMostrarMenos();

})

btnMostrarMenos.addEventListener('click', () => {
    esconderMaisProjetos();
    esconderBtnMostrarMenos();
    mostrarBtnMostrarMais();
})





function mostrarBtnMostrarMais() {
    btnMostrarMais.classList.remove('remover');
}

function esconderBtnMostrarMenos() {
    btnMostrarMenos.classList.add('remover');
}

function esconderMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.remove('ativo');
    });
}

function mostrarBtnMostrarMenos() {
    btnMostrarMenos.classList.remove('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}

function esconderBtnMostrarMais() {
    btnMostrarMais.classList.add('remover');
}
