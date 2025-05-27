
O plano de hoje é praticar mais o *JavaScript*, para aos poucos nos aprofundarmos mais na lógica. A partir daqui, vamos começar a trabalhar bastante o que vocês vêm aprendendo de *lógica de programação*, para botar em prática um conceito importante: **a manipulação da DOM**.

Na aula passada deixei vocês apanhando um pouco para o exercício do botão de *Darkmode*, hoje vamos ver algumas possíveis soluções para o problema. Em seguida, vamos continuar *exercitando o JavaScript* com outros projetinhos.

> Mas antes disso, porque não entendermos melhor o que é a *DOM*?

---

## DOM (Document Object Model)

A *DOM*, ou *Document Object Model*, representa a estrutura de um documento HTML como uma árvore de objetos, onde cada nó é um elemento ou seu conteúdo. Por meio da *DOM*, conseguimos acessar e modificar a *estrutura, estilo e conteúdo de uma página web* de forma dinâmica, o que permite criar *interatividade* e atualizar o conteúdo *sem recarregar a página*.

Usando o *JavaScript*, podemos *manipular* a **DOM**:
- Através de métodos que permitem *selecionar elementos*, como `getElementById` ou `querySelector`
- Com esses elementos selecionados, podemos *alterar atributos e propriedades* como o texto, classes, ou estilos CSS
- Podemos adicionar ou remover nós da árvore, ou seja, *como criar novos elementos* com o `createElement` ou *remover* com o `removeChild`
- Também podemos *responder a interações do usuário*, como cliques ou submissões de formulário, declarando esses eventos por meio de um `addEventListener` ou atrelando funções aos eventos dos elementos

---

## Continuaremos com os exercícios

Não existe maneira melhor de assimilar esse conteúdo novo a não ser *praticando*. Gostaria de revisitar com vocês o exercício de *dark mode*, desenvolvendo uma solução *robusta* pra ele, e em seguida passar *mais desafios* que tentaremos resolver ainda hoje.

##### Dark Mode (Modo escuro)
Vamos desenvolver uma solução bem interessante para nosso *dark mode*, explorando bastante algumas práticas de CSS, como uma *boa utilização de classes*, e também *transições* e *variáveis CSS* 

##### Counter (Contador)

![[contador.png]]
Super simples! Algo como:
- Um botão de *+* para somar ao contador
- Um botão de *-* para subtrair do contador
- Um botão de *reset* para voltar o contador para zero
Lembrando que a imagem serve apenas de referência, vocês podem se aventurar na estilização dessa página

---

## Mais uma colinha

### Variáveis
```js
let numeroInteiro = 6;
let preco = 4.99;
let string = "Tem uma cobra na minha bota!";

// Constantes são usadas para criar variáveis que não podem ser alteradas depois da declaração
const pi = 3.14;

pi = 10; // Isso dá erro
```
---
### Strings
```js
// Uso de aspas simples ou duplas é indiferente, não há melhor prática
let simples = 'olá'
let duplas = "olá"

// Concatenação de strings
let age = 7;
'Tommy is ' + age + ' years old.';

// Interpolação de string
let age = 7;
`Tommy is ${age} years old.`;

// Pegar o tamanho de uma string (ou arrays)
let palavra = "banana"
palavra.length // Isso retorna: 6
```
---
### Operações matemáticas
```js
5 + 5 = 10 // Adição
10 - 5 = 5 // Subtração
5 * 10 = 50 // Multiplicação
10 / 5 = 2 // Divisão
10 % 5 = 0 // Mod (resto da divisão)
```
---
### Operadores condicionais
```js
// Operadores de comparação
1 > 3                // false
3 > 1                // true
250 >= 250           // true
1 === 1              // true
1 === 2              // false
1 === '1'            // false

// Operadores '==' e '==='
0 == false   // true
0 === false  // false - tipos diferentes
1 == "1"     // true - conversão automática de tipo 
1 === "1"    // false - tipos diferentes
null == undefined  // true
null === undefined // false
'0' == false       // true
'0' === false      // false

// Operador 'ou'
true || false;       // true
10 > 5 || 10 > 20;   // true
false || false;      // false
10 > 100 || 10 > 20; // false

// Operador 'e'
true && true;        // true
1 > 2 && 2 > 1;      // false
true && false;       // false
4 === 4 && 3 > 1;    // true

// Operador lógico inverso
let valorBoleano = true;
let valorOposto = !valorBoleano;

console.log(valorOposto); // Retorna false
```
---
### Condicionais
```js
const umBoleano = true;

if (umBoleano) {
	console.log("Esse boleano passa no if como true!");
}

// Else e else if
const tamanho = 10;

if (tamanho > 100) {
  console.log('XG');
} else if (tamanho > 20) {
  console.log('G');
} else if (tamanho > 4) {
  console.log('M'); // Vai entrar aqui e printar: "M"
} else {
  console.log('P');
}

// Switch case
const quantidade = 3;

switch (quantidade) {
  case 1:
    console.log('É pouco');
    break;
  case 2:
    console.log('É bom');
    break; // O break aqui é necessário para que não passe por mais de um 'case'
  default:
    console.log('É demais');
}
```
---
### Funções
```js
// Definindo a função:
function soma(num1, num2) {
	return num1 + num2;
}

// Chamando a função:
soma(3, 6); // 9

// Uso de return
function soma(num1, num2) {
	num1 + num2; // Essa linha apenas executa e não retorna nada
	
	return num1 + num2; // Essa linha retorna p quem chamou a função e interrompe
	
	console.log('retornou'); // Essa linha não é executada pq vem depois do return
}

// Funções anônimas/sem nome
const printaOi = function() {
  return 'oi!';
}

// Funções "arrow" ou flecha
// Sem argumentos
const printaOi = () => { 
  console.log('oi!'); 
}; 
printaOi(); // => oi!

// Com um argumento
const checaPeso = peso => { 
  console.log(`Seu peso é: ${peso}kg`); 
};
checaPeso(75); // => Seu peso é: 75kg

// Com dois argumentos
const soma = (num1, num2) => { 
  return num1 + num2; 
}; 
console.log(soma(2,5)); // => 7 

// Arrow functions concisas
const multiplica = (a, b) => a * b; 

console.log(multiplica(2, 30)); // => 60 
```
---
### Arrays ou Listas
```js
const frutas = ["maçã", "laranja", "banana"];
const dados = [1, 'frango', false]; // Permite diferentes tipos

// Acessando o tamanho do Array
const numeros = [1, 2, 3, 4];

numeros.length; // 4

// Acessando um elemento do Array
const meuArrau = [100, 200, 300];

console.log(meuArray[0]); // 100
console.log(meuArray[1]); // 200
```
---
### Laços de Repetição
```js
// While
while (condicao) {
  // bloco de código a ser executado
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// => 0, 1, 2, 3, 4

// Do While
do {
  // bloco de código a ser executado
} while (condicao)

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5)
// => 0, 1, 2, 3, 4

// For
// for (atribuição; condição de quebra; executar a cada loop)
for (let i = 0; i < 5; i += 1) {
  console.log(i);
};
// => 0, 1, 2, 3, 4

// Iterar sobre um Array com For
let array = [0, 1, 2, 3, 4]

for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}
// => 0, 1, 2, 3, 4
```
---
### Manipulação de DOM
- Podemos ver um pouco mais sobre o que é a DOM [aqui](https://www.w3schools.com/js/js_htmldom.asp)
```js
// Buscar elementos
document.getElementById('demo'); // Retorna um elemento buscando pelo ID
document.getElementsByTagName('p'); // Retorna lista de elementos buscando pela tag
document.getElementsByClassName('demo'); // Retorna lista de elementos buscando pela classe

// Fazer alterações nos elementos
let btn = document.getElementById('btn'); // salvando o elemento numa variável
btn.innerHTML = 'Clique aqui!'; // Alterando o HTML interno do elemento

// Buscando o elemento e alterando ele em uma linha
document.getElementById('btn').innerHTML = 'Clique aqui!';

// Alterando o estilo do elemento pela propriedade 'style'
document.getElementById('container').style.backgroundColor = 'red';
// Aqui podemos chamar qualquer propriedade CSS utilizando camelCase ao invés de hífen para separar as palavras (background-color => backgroundColor)

// Alterando classes de um elemento pela 'classList' (lista de classes)
const demoElement = document.getElementById('demo');
demoElement.classList.add('azul'); // Adiciona a classe 'azul'
demoElement.classList.remove('azul'); // Remove a classe 'azul'
demoElement.classList.toggle('azul'); // Liga/desliga uma classe, dependendo se ela já está presente ou não

// Utilizando 'querySelector' para trazer elementos por meio de um *seletor CSS*
const element = document.querySelector('div.azul'); // Essa linha vai trazer apenas o *primeiro* elemento que atenda a esse seletor
const elements = document.querySelectorAll('div.azul'); // Essa linha vai trazer *todos* os elementos que atendam a esse seletor na forma de um array
```