function adicionarCardContainer(){
    let card = new ContainerCard('teste')
    let container = document.getElementById('cardsContainer')

    card.render(container)
}

function fecharFormulario() {
    // Seleciona todos os campos de entrada dentro do formulário
    const inputs = document.querySelectorAll('#conteudoFormulario input');

    // Limpa o valor de cada campo
    inputs.forEach(input => {
        input.value = '';
    });

    document.getElementById('criaCard').style.display = 'none';
}