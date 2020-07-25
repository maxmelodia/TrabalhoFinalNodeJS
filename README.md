# TrabalhoFinalNodeJS
Trabalho Arquitetura Node.js - PUC MINAS

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

## Trabalho Final ✍️

DATA LIMITE DE ENTREGA: 27/07/2020

ATIVIDADE - APLICAÇÕES WEB EM NODE.JS CONEXÃO HTTP E WEBSOCKET

O objetivo deste exercício é garantir que o aluno seja capaz de construir aplicações web em Node.js, utilizando tanto o protocolo 
HTTP quanto o protocolo de conexão persistente - Websocket.

Utilizando os conteúdos apresentados em todas as aulas desta disciplina (especialmente aqueles contidos nas aulas 3 e 4), 
você deverá construir uma aplicação Web capaz de retornar uma aplicação web (conteúdos estáticos HTML, CSS e JS) e também de 
manter conexões persistentes vindas de clientes na web.

Crie um projeto em Node.js;
Crie uma página web (HTML, CSS e Javascript) capaz de se conectar e enviar mensagens simples de textos para servidores que suportem conexão Websocket;
Defina um arquivo principal para a sua aplicação (index.js);
Utilizando o framework Express.js, construa uma aplicação capaz de receber requisições HTTP de método GET e retornar o conteúdo estático criado no passo 2;
Utilizando o framework ws, faça com que a aplicação web criada no passo anterior também seja capaz de receber conexões websocket.
Sua conexão Websocket deverá ser capaz de receber mensagens de texto contendo operações matemáticas simples (adição, subtração, multiplicação e divisão) e 
retornar o resultado das mesmas para o cliente;
Envie as mensagens abaixo através da aplicação web criada no passo 2

    a) 1 + 1

    b) -123 + 123123

    c) 8 * 0

    d) 1239123 * 12313

    e) 123 / -12

    f) 313123 / 0
    Faça os tratamentos necessários em seu código para evitar problemas em tempo de execução
    Compartilhe seu projeto no fórum da disciplina

Sugestões:

* Utilize o módulo criado no exercício prático 1. Ele já possui o código necessário para realizar os cálculos matemáticos.
* Utilize a função "split" para analisar as mensagens recebidas pelo servidor, você precisará disso para realizar o cálculo matemático correto. 
(Veja mais sobre a função split em Javascript no link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split 
(Links para um site externo.))
* Ao final do exercício tente publicar sua API em algum servidor. Sugestão: use o Heroku. https://devcenter.heroku.com/articles/getting-started-with-nodejs