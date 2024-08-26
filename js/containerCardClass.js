class ContainerCard{
    constructor(titulo=''){

        this.titulo = titulo;
        this.elemento = this.criarCard();
    }
    
    criarElemento(tag,classes=[],innerHTML=''){
        const elemento = document.createElement(tag)
        
        classes.forEach(classe => {
            if (classe.includes(' ')) {
                classe.split(' ').forEach(c => elemento.classList.add(c));
            } else {
                elemento.classList.add(classe);
            }
        });
        elemento.innerHTML = innerHTML
        return elemento;
    }


    criarBotaoControleCard(iconClass,onClickFunction){
        const botao = this.criarElemento('div',['botoesControleCard']);
        const icon = this.criarElemento('i',[iconClass])
        botao.appendChild(icon)
        botao.addEventListener('click',onClickFunction.bind(this))
        return botao
    }

    criarTituloCard(){
        const tituloDiv = this.criarElemento('div',['titulo'])
        const h2 = this.criarElemento('h2',[],this.titulo)
        
        const controlDiv = this.criarElemento('div',['controlDiv'])
        controlDiv.appendChild(this.criarBotaoControleCard('fa-solid fa-plus',this.adicionarTarefa));
        controlDiv.appendChild(this.criarBotaoControleCard('fa solid fa-pen',this.editarTarefa))
        controlDiv.appendChild(this.criarBotaoControleCard('fa solid fa-trash',this.removerCartao))


        tituloDiv.appendChild(h2)
        tituloDiv.appendChild(controlDiv)
        

        return tituloDiv
        
    }

    criarCard(){
        const cardContainer = this.criarElemento('div',['cardContainer'])
        const tituloCard    = this.criarTituloCard()
        const conteudo      = this.criarElemento('div',['conteudo'])

        cardContainer.appendChild(tituloCard)
        cardContainer.appendChild(conteudo)
        
        return cardContainer
    }


    adicionarTarefa() {
        // Seleciona o elemento de conteúdo do card
        let cardContainer = this.elemento.querySelector('.conteudo'); // .conteudo para selecionar a classe 'conteudo'
        
        let card = new Card(this.elemento)        
        // Adiciona o novo div ao container de conteúdo
        cardContainer.appendChild(card.criarCartao());
    }
    

    editarTarefa() {
        console.log(`Editar tarefa no card: ${this.titulo}`);
        // Lógica para editar o card
    }

    removerCartao() {
        this.elemento.remove();
    }

    render(container){
        container.appendChild(this.elemento)
    }

} 