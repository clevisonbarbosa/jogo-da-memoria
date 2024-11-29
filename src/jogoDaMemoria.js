class JogoDaMemoria {
    constructor({tela, util}) {
        this.tela = tela
        this.util = util
        this.heroisIniciais = [
            {img: "./arquivos/batman.png", nome: 'batman'},
            {img: "./arquivos/cyclops.png", nome: 'cyclops'},
            {img: "./arquivos/hellboy.png", nome: 'hellboy'},
            {img: "./arquivos/homem_de_ferro.png", nome: 'homem_de_ferro'}
        ]

        this.iconePadrao = './arquivos/padrao.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
        this.jogoIniciado = false;
    }

    inicializar(){
        this.tela.atualizarImagens(this.heroisIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this))
    }

    async embaralhar() {
        const copias = this.heroisIniciais
        .concat(this.heroisIniciais)
        .map(item => {
            return Object.assign({}, item, {id: Math.random() / 0.5})
        })
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias)
        this.tela.exibirCarregando()

        const idDoIntervalo = this.tela.iniciarContador()

        await this.util.timeout(3000)
        this.tela.limparContador(idDoIntervalo)
        this.esconderHerois(copias)
        this.tela.exibirCarregando(false)
        this.jogoIniciado = true;
    }

    esconderHerois(herois) {
        const heroisOcultos = herois.map(item => ({
            id: item.id,
            nome: item.nome,
            img: this.iconePadrao
        }));
        this.tela.atualizarImagens(heroisOcultos);
        this.heroisEscondidos = heroisOcultos;
    }

    exibirHerois(nomeDoHeroi) {
        const {heroisIniciais} = this;
        const {img} = heroisIniciais.find(({nome}) => nomeDoHeroi === nome);
        this.tela.exibirHerois(nomeDoHeroi, img);
    }

    verificarSelecao(id, nome) {
        if (!this.jogoIniciado) return;
        const item = {id, nome}
        const heroisSelecionados = this.heroisSelecionados.length

        const elementoSelecionado = document.querySelector(`[data-id="${id}"]`);
        if (!elementoSelecionado) return;
        elementoSelecionado.classList.add('selecionado');
        
        switch(heroisSelecionados){
            case 0:
                this.heroisSelecionados.push(item)
                break;
            case 1:
                const [opcao1] = this.heroisSelecionados
                this.heroisSelecionados = []
                if(opcao1.nome === item.nome && opcao1.id !== item.id){
                    this.exibirHerois(item.nome)
                    this.tela.exibirMensagem()
                    return
                }
                this.tela.exibirMensagem(false)
                break;
        }
        setTimeout(() => {
            elementoSelecionado.classList.remove('selecionado');
        }, 1000);
    }

    mostrarHeroisEscondidos() {
        const heroisEscondidos = this.heroisEscondidos
        for(const heroi of heroisEscondidos){
            const {img} = this.heroisIniciais.find(item => item.nome === heroi.nome)
            heroi.img = img
        }
        this.tela.atualizarImagens(heroisEscondidos)
    }

    jogar() {
        this.jogoIniciado = false;
        this.embaralhar()
    }
}