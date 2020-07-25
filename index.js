require('dotenv').config()

const express = require('express')
const http = require("http");
const WebSocket = require("ws");
const app = express()

const bodyParser = require('body-parser')
const calc = require("aula2-max-node/funcoesCalculo")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static("./site"));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    ws.on("message", (message) => {
      let aux =  trataMensagem(message) 
      let resultado = calcular(aux.num1, aux.num2, aux.operacao)
      console.log(resultado)
      ws.send("O resultado é: " + resultado);
    });
  });

  server.listen(process.env.PORT || 3001, () => {
    console.log("Servidor conectado na porta:", server.address().port);
  });

function trataMensagem(msg) {
    let num1 = ''
    let num2 = ''
    let operacao = ''
    let parte = 1
    msg.split('').map(el => {
      if ((el === '+') || (el === '-') || 
          (el === '*') || (el === '/')) {
            operacao = el
         parte = 2
      } else {
        parte === 1 ? (num1+=el) : (num2+=el) 
      }
    })

    return {
      num1,
      num2,
      operacao
    }
  }

function calcular(n1,n2,op){
  let res = 0
  switch (op) {
    case '+':
      res = calc.sum(parseFloat(n1), parseInt(n2))
      break;
    case '-':
      res = calc.sub(parseFloat(n1), parseInt(n2))
      break;
    case '*':
      res = calc.mult(parseFloat(n1), parseInt(n2))
      break;
    case '/':
      res = calc.div(parseFloat(n1), parseInt(n2))
      break;
    default:
      console.log(`Operação ${expr} inválida!!!`);
  }
  return res
}