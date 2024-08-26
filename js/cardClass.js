class Card {
    constructor(containerPai) {
        this.containerCard = containerPai
        this.offsetX = false
        this.offsetY = false
        this.isDragging = false

        this.containerCard.addEventListener('mousedown',this.onMouseDown.bind(this))
        document.addEventListener('mousemove',this.onMouseMove.bind(this))
        document.addEventListener('mouseup',this.onMouseUp.bind(this))
    }

    onMouseDown(e){
        this.offsetX = e.clientX - this.containerCard.getBoundingClientRect().left;
        this.offsetY = e.clientY - this.containerCard.getBoundingClientRect().top;
        this.isDragging = true
    }


    onMouseMove(e) {
        if (this.isDragging) {
            // Atualiza a posição do card baseado na posição do mouse
            this.containerCard.style.left = `${e.clientX - this.offsetX}px`;
            this.containerCard.style.top = `${e.clientY - this.offsetY}px`;
        }
    }

    onMouseUp() {
        // Para de arrastar quando o mouse é solto
        this.isDragging = false;
    }


    criarCartao(){
        // Cria um novo div para representar a tarefa
        let tarefa = document.createElement('div');
        tarefa.className = 'cardTarefa'

        return tarefa
    }


}