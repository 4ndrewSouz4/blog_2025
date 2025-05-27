
##### Um ponto-chave do semestre
A partir de hoje, começaremos a ver o *segundo tópico principal* desse semestre, que é o **JavaScript**. Ele será utilizado para deixar nossas páginas mais *dinâmicas*, podendo manipular o conteúdo *sem precisar recarregar* nosso site.

Daremos *bastante ênfase* a esse conteúdo, e logo teremos também *atividades importantes* relacionadas a esse tópico, portanto peço *atenção*! Além disso, as *aulas de lógica* que vocês têm tido serão *valiosíssimas* aqui, portanto espero que estejam bem treinados.

---

# JavaScript

Já ouvimos bastante falar sobre o *JavaScript* desde o começo do curso isso é por um bom motivo, muito do que tem a ver com **Programação Web** hoje usa o JavaScript como *linguagem de programação*.

O **JavaScript** é:
- A linguagem de programação *mais usada no mundo*
- A *linguagem da Web*
- *Fácil* de aprender
- Não tem *nada* a ver com **Java**

O *JS* começou muito diferente de como é hoje, foi criado pra ser uma *linguagem de scripting* e *fácil de aprender* pra ser usada no navegador **Netscape**. Se chamava originalmente **Mocha** mas os gênios do marketing decidiram mudar pra algo mais parecido com o **Java**, que fazia muito sucesso na época.

Ele é mais *conhecido* por *construir aplicações Front-end*, mas hoje já é perfeitamente capaz de construir *Back-ends completos e escaláveis*. A linguagem hoje já se **desenvolveu muito além** do que era na criação.

> *"Tudo que poderá ser feito com JavaScript, será feito com JavaScript"* - Algum maluco

#### Front-end
Todos os *Frameworks/bibliotecas mais famosos* para programação de Front-end:
- **React/Next**
- **Angular**
- **Vue.js**

#### Back-end
Com a criação do **Node**, hoje conseguimos criar aplicações *"server-side"*, isso significa poder rodar o *JavaScript* num *servidor*.

#### Mobile
Em *Frameworks* como:
- **Ionic**
- **React Native**

#### Desktop
Conseguimos até criar *aplicações Desktop* usando **Electron**.

---

## JavaScript para o Front-end

Gostaria muito de entrar nos detalhes sobre cada uma das coisas que comentei agora, mas era só pra dar um gostinho, infelizmente não temos muito tempo.

Acompanhando o que já viemos estudando sobre *HTML* e *CSS*, hoje vamos ver um pouco sobre como é o *uso do JavaScript no Front-end*.

O JavaScript é a *linguagem da Web* principalmente pelo fato de ser **a linguagem interpretada nativamente pelos navegadores**.

### E como rodamos JavaScript?

**Pelo navegador, obviamente!** Falamos sobre como o *JavaScript* consegue fazer *alterações na página* de maneira dinâmica, sem precisarmos recarregá-la, mas ele também tem diversas outras funções.

Vamos abrir nosso *interpretador nativo de JS*, no caso o **navegador**, e pra começar a brincar com o código é fácil: 
- Vamos abrir o `demo.html`, que é simplesmente uma página com uma *div* com o `id="demo"`
- Vamos abrir as *ferramentas de desenvolvedor* como já fizemos mil vezes: `F12` no Chrome ou ir em *inspecionar elemento*.
- E acessar o **Console** nas ferramentas de desenvolvedor
- Agora podemos *rodar comandos* nesse terminalzinho

Podemos fazer o básico:
- Executar *expressões* matemáticas
- Instanciar *variáveis*
- Declarar *funções*
- Podemos também rodar algumas funcionalidades nativas como *logs* e *alerts*

Podemos ter acesso ao conteúdo do nosso *HTML* e *CSS* pelo comando `document`, vemos que ele me retorna um *objeto* do nosso html todo. Conseguimos rodar *métodos* e manipular *atributos* desse 'document', por exemplo para trazermos algum elemento da nossa página pelo seu *id*:
```js
document.getElementById('demo');
```

E conseguimos *manipular o conteúdo* desse elemento, por exemplo, adicionando um texto ou uma tag *h1* dentro dessa *div*:
```js
document.getElementById('demo').innerHTML = 'Meu primeiro JavaScript';
document.getElementById('demo').innerHTML = '<h1>Olá</h1>'
```

Também é possível mexer no estilo desse elemento pelo `.style`, bem como adicionar e remover classes pelo `classList`:
```js
// Acessar estilos
document.getElementById('demo').style.fontSize = "35px";
document.getElementById('demo').style.color = "red";

// Acessar classes
document.getElementById('demo').classList.add('azul');
document.getElementById('demo').classList.remove('azul');
```

---

## E como adicionar JS a uma página?

Para adicionarmos código JS à nossa página, precisamos adicionar tags `<script>` no nosso *HTML*. Elas podem ser tanto no *header* quanto no *body* da nossa página - ou em ambos, mas o lugar que colocamos elas **faz diferença**.

Podemos abrir o exemplo `button.html`, que é uma página simples com um *button* (botão) centralizado. Esse botão não faz nada ainda, mas usando a tag *script* conseguimos declarar uma *função* para ser chamada quando o botão for clicado, por meio de um *evento*:
```html
<script>
	function ficaAzul() {
		document.body.style.backgroundColor = 'blue';
	}
</script>
```

#### Funções e Eventos
Uma *função* é um bloco de código JS, que pode executada quando for *"chamada"*. Uma maneira de chamar funções é por *eventos*, como quando o usuário clica num botão:
```html
<button onclick=ficaAzul()>
	ME CLIQUE!
</button>
```
Vimos também para o projeto da *urna eletrônica*, quando resolvemos o problema do redirect do formulário, o evento `onload`. Outros eventos comumente usados incluem: `onchange`, `onmouseover`, `onkeydown` e [outros](https://www.w3schools.com/js/js_events.asp).

### Também temos a maneira externa de declarar JS

Podemos **externalizar** nosso código JS para um *arquivo* assim como fizemos com o *CSS externo*. Posso criar um arquivo `script.js` e importar ele também com a tag *script*:
```html
<script src="script.js"></script>
```

---

## Vamos tentar algo simples

Gostaria de botar vocês pra quebrar a cabeça com um projetinho rápido: um *botão de dark mode*!

*Façam uma página* simples como essa que vimos do botão e adicionem um código *JavaScript* para que esse **botão**, ao ser clicado, transforme o tema da página em *dark*: o fundo da página precisa mudar para uma *cor escura*. Ao **clicarmos novamente** no botão, o fundo precisa voltar a sua cor original, para o *"tema claro"*.

Se conseguirem com facilidade, aqui vai um **desafio:** *estilizem a página!*
Em vez de mudarem o conteúdo pelas *propriedades CSS*, mudem pelas *classes dos elementos*, e também estilizem o resto:
- O **botão** precisa *mudar para uma cor escura*
	- Consequentemente o **texto** do botão precisa de uma *cor clara*
- Quem sabe alguma maneira **visual** de indicar se a página está com o **dark mode on**?

### Vejamos o resultado!
Fiz uma versão minha de como acho que ficaria uma página simples e elegante com esse exemplo do *"darkmode"*. Vamos comigo.

---
### Referências interessantes
- Colinha monstra de JavaScript: https://quickref.me/javascript.html