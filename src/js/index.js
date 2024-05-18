
const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projeotsAtivos = document.querySelectorAll('.projeto:not(.ativo)');

    btnMostrarProjetos.addEventListener('click', () => {
        mostarMaisProjetos();
        esconderBtnMaisProjetos();
    });

function esconderBtnMaisProjetos() {
    btnMostrarProjetos.classList.add('remover');
}

    function mostarMaisProjetos() {
        projeotsAtivos.forEach(projetoInativo => {
            projetoInativo.addEventListener('ativo');
        });
    }