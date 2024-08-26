class CardManager {
    constructor() {
        this.cards = new Map(); // Armazena os cards com o ID como chave
        this.idCounter = 0; // Um contador simples para gerar IDs únicos
    }

    gerarIdUnico() {
        return `card-${++this.idCounter}`; // Gera um ID único com base no contador
    }

    adicionarCard(id = null, titulo = '',container) {
        if (!id) {
            id = this.gerarIdUnico(); // Gera um ID se não for fornecido
        }

        if (this.cards.has(id)) {
            console.error(`Card com ID '${id}' já existe.`);
            return false; // Retorna false para indicar que o card não foi adicionado
        }

        const novoCard = new ContainerCard(titulo);
        this.cards.set(id, novoCard); // Armazena o card no Map com o ID como chave
        novoCard.render(container)
    }

    removerCard(id) {
        if (this.cards.has(id)) {
            const card = this.cards.get(id);
            card.removerCartao(); // Remove o card da interface
            this.cards.delete(id); // Remove o card do Map
            return true; // Retorna true para indicar que o card foi removido
        } else {
            console.error(`Nenhum card encontrado com o ID '${id}'.`);
            return false; // Retorna false para indicar que o card não foi encontrado
        }
    }

    obterCard(id) {
        return this.cards.get(id) || null; // Retorna o card com o ID especificado ou null se não existir
    }

    renderAll(container) {
        this.cards.forEach(card => {
            card.render(container);
        });
    }
}
