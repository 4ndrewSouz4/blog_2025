
Considerando que aula passada tivemos um número bem reduzido de alunos, hoje a ideia é *repassarmos* pelos conceitos todos de **JavaScript** dessa aula: [[Aula 23 - Introdução ao JavaScript]]

Vamos estar tirando dúvidas e tentarei introduzir o máximo possível dos conceitos, sempre respeitando a compreensão de vocês. E como um adicional, estou deixando aqui uma **colinha** básica com a *sintaxe do JS*:

## Colinha de JavaScript

##### Inserir o JavaScript na página
Para adicionarmos código JS à nossa página, precisamos adicionar tags `<script>` no nosso *HTML*. Elas podem ser tanto no *header* quanto no *body* da nossa página - ou em ambos, mas o lugar que colocamos elas **faz diferença**.

> A recomendação é sempre adicionar a tag `<script>` como a *última* coisa do `body`

- **JavaScript Interno:** código dentro da própria tag `script`
```html
<script>
	console.log('Esse é um código JavaScript interno!');
</script>
```

- **JavaScript Externo:** podemos referenciar um *arquivo externo* através do `src`
```html
<script src="script.js"></script>
```

##### Manipulação de DOM
```js
// Selecionar elemento pelo id
document.getElementById('demo');

// Podemos pegar um elemento usando um seletor do CSS também
document.querySelector('#demo')

// Guardar o elemento numa variável para uso futuro
const demo = document.getElementById('demo');

// Alterar conteúdo interno do elemento
document.getElementById('demo').innerHTML = 'Meu primeiro JavaScript';
document.getElementById('demo').innerHTML = '<h1>Olá</h1>';

// Manipular estilos (CSS)
document.getElementById('demo').style.fontSize = "35px";
document.getElementById('demo').style.color = "red";

// Adicionar ou remover classes
document.getElementById('demo').classList.add('azul');
document.getElementById('demo').classList.remove('azul');
```

##### Funções e Eventos
```js
// Declaração de uma função
function printaOi() {
	console.log('oi!');
}

// Para executar a função
printaOi();
```

Também podemos *atribuir um evento* de um elemento no nosso HTML a uma *função* do JS:
```html
<button onclick=printaOi()>Printar Oi</button>
```
- Note que estamos atribuindo o *evento* `onclick` à execução da nossa função *"printaOi"*

Preferencialmente, ainda podemos fazer tudo através do JavaScript com o `addEventListener`:
```js
const botao = document.querySelector('button')

// Adicionar um evento de 'click' ao botão, atribuindo a função 'printaOi'
botao.addEventListener('click', printaOi)

// Podemos também criar uma função anônima (arrow function)
botao.addEventListener('click', () => {
	console.log('Essa é uma arrow function!')
})
```

##### Adicionais
```js
// Para 'printar' algo no console
console.log('teste!')

// Para exibir uma mensagem ao usuário numa janelinha
alert('atenção!')
```

##### Para mais colinhas
Caso vocês queiram ver mais, como operações matemáticas, condicionais (*if*), loops (*while*, *for*) ou outras operações no JavaScript, recomendo também uma colinha online:
- [Colinha online de JavaScript](https://quickref.me/javascript.html)