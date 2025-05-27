
A ideia da aula de hoje é revisarmos o conteúdo básico de HTML que vimos um pouco e dedicar o restante da aula para que exercitem os conhecimentos desenvolvendo a atividade que foi passada no final do primeiro dia: uma *página de apresentação individual* feita com **HTML**.

> Vou também tentar guiá-los a *como utilizar* o **Obsidian** para acompanhar as anotações.

---

# HTML

-  HTML significa linguagem de marcação de hipertexto (*Hyper Text Markup Language*)
- HTML é a *linguagem de marcação padrão* para criação de páginas Web
- HTML descreve a *estrutura* de uma página da Web
- HTML consiste em uma série de *elementos*
- Os elementos HTML informam ao *navegador* como exibir o conteúdo
- Os elementos HTML rotulam partes do conteúdo como “este é um título”, “este é um parágrafo”, “este é um link”, etc.


### Estrutura básica do HMTL

Uma tag HTML é definida como uma palavra entre "`<>`"
- Ex: `<h1>`
A maior parte das tags contém um *fechamento*, que consiste em adicionar uma "`/`"
- Ex: `</h1>`

```html
<h1>Esse é um título!</h1>
```

### Uma página básica

```html
<!DOCTYPE html>  
<html>  
	<head>  
		<title>Page Title</title>  
	</head>  
	<body>  
		<h1>My First Heading</h1>  
		<p>My first paragraph.</p>  
	</body>
</html>
```
- A declaração `<!DOCTYPE html>` define que esse é um documento **HTML5**
- O elemento `<head>` contém "metadados", informações especiais sobre a página HTML
- O elemento `<title>` especifica um *título* para a página HTML (que é mostrado na barra de título do navegador ou na guia da página)
- O elemento `<body>` define o *corpo* do documento e é um "contêiner" para todos os conteúdos visíveis, como títulos, parágrafos, imagens, hiperlinks, tabelas, listas, etc.
- O elemento `<h1>` define um título grande
- O elemento `<p>` define um parágrafo

---

## Colinha de tags extras

```html
<h1>...</h1>              | Títulos de diferentes níveis (h1 a h6)
<p>...</p>                | Parágrafo
<ul><li>...</li></ul>     | Lista não ordenada
<ol><li>...</li></ol>     | Lista ordenada
<li>...</li>              | Item de lista
<a href="...">...</a>     | Hiperlink (link p/ outra página)
<img src="..." alt="..."> | Imagem

<br> | Quebra de linha
<hr> | Linha de quebra

<div>...</div>   | Uma divisão ou seção da página
<span>...</span> | Contêiner para uma linha

<table>...</table> | Tabela
<tr>...</tr>       | Linha de uma tabela
<th>...</th>       | Célula de cabeçalho numa tabela
<td>...</td>       | Célula de dados numa tabela

<form>...</form>             | Formulário
<input type="...">           | Controle de entrada
<label for="...">...</label> | Um título para um input
<button>...</button>         | Botão clicável
<iframe src="..."></iframe>  | Um quadro embutido de conteúdo externo
```

---

# Projeto da aula

Uma página de apresentação individual sua, com seu nome no título da guia (*title*). Alguns requisitos para deixar sua página mais especial:
- Uso de pelo menos dois tipos de cabeçalhos diferentes (*h1*, *h2* etc)
- Pelo menos dois parágrafos sobre vocês (*p*)
- Uso de alguma imagem (*img*)
- Uso de uma lista ordenada ou não-ordenada (*ol* ou *ul*)
	- Pode ser seus hobbies, jogos ou livros favoritos, comidas etc 
- Link para redes sociais de vocês (*a*)
	- Caso não se sintam confortáveis, pode ser um site qualquer


### Entregas no Drive

Estou disponibilizando uma pasta para que façam entregas de atividades em sala de aula. Essa atividade ainda não tem um prazo, mas contará como parte de uma nota conjunta de entregas até o final do semestre.

> Vocês podem encontrar, em `atividades > pequenas entregas > apresentação`, uma pasta com o nome de vocês para fazerem a entrega

Sugiro que tentem entregar atividades como essa logo de cara, pra não arriscar deixar para o final do semestre e esquecer do conteúdo.
