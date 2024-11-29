# Jogo da Memória - Web

Este é um jogo da memória simples desenvolvido em HTML, CSS e JavaScript. O objetivo do jogo é combinar as cartas que possuem a mesma imagem, lembrando-se das posições delas enquanto joga. O jogo é baseado em heróis e seus respectivos ícones.

## Funcionalidades

- **Início do Jogo**: Ao clicar no botão "Clique aqui para iniciar", o jogo embaralha as cartas e exibe um contador regressivo antes de começar.
- **Cartas Escondidas**: As cartas são inicialmente exibidas com ícones genéricos e, ao longo do jogo, o usuário deve clicar para revelar as cartas e procurar por pares correspondentes.
- **Verificação de Combinação**: Quando o usuário seleciona duas cartas, o sistema verifica se elas formam um par. Se correto, exibe uma mensagem de sucesso. Caso contrário, mostra uma mensagem de erro.
- **Mostrar Tudo**: Um botão "Mostrar tudo" que permite ao jogador visualizar todas as cartas por um curto período.
- **Feedback**: O jogo exibe mensagens de sucesso e erro conforme o jogador faz as combinações corretas ou erradas.

## Tecnologias Utilizadas

- **HTML**: Estruturação da página e dos elementos do jogo.
- **CSS (Bootstrap)**: Estilização da interface, incluindo o layout responsivo.
- **JavaScript**: Lógica do jogo, manipulação do DOM e eventos.
- **API Utilitária**: A classe `Util` fornece funções de auxílio, como temporizadores (`timeout`).

## Como Jogar

1. Clique no botão **Clique aqui para iniciar** para começar o jogo.
2. Observe o contador de segundos que inicia o jogo após o tempo de espera.
3. Clique nas cartas para revelá-las.
4. Quando encontrar duas cartas que correspondem, elas serão reveladas permanentemente.
5. Se as cartas não corresponderem, elas serão escondidas novamente.
6. Continue até combinar todas as cartas.

## Instruções de Instalação

1. Clone este repositório para o seu computador:
   ```bash
   git clone https://github.com/seu-usuario/jogo-da-memoria.git
