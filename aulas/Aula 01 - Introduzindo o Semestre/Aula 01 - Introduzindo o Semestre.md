
#### [Link para o Miro](https://shorturl.at/lwEJv)

### Primeira metade da aula de *apresentações*:

- Me chamo Liam, tenho 26 anos, trabalho na área de programação há quase 6 anos
- Sou *técnico em informática* pela *ETEC*, portanto tive uma experiência semelhante à que vocês terão aqui
- Formado em *Análise e Desenvolvimento de Sistemas* pela FMU
- Trabalho na área como programador *Back-end*, hoje vamos falar mais sobre o que significa isso


### Gostaria de saber mais sobre vocês, alunos
- Nome
- Idade
- O quanto estão familiarizados com o uso de computadores em geral?
- Já tiveram algum contato com programação?
- Quais seus objetivos com esse curso?

---

### Ferramentas utilizadas no semestre

##### Drive
- Link para a pasta no Drive: https://shorturl.at/4Vfqd
- Usaremos essa pasta para armazenar todo o conteúdo do semestre
- Assim que receberem seus *e-mails institucionais*, pedirei que o coloquem no documento na raiz da pasta

##### Obsidian
- Todas as aulas tento disponibilizar arquivos de anotação feitos em **Markdown** (`.md`), que são basicamente *texto* com formatação feita por meio de caracteres
  - Esses arquivos servem também para poderem *revisar* o conteúdo
  - Arquivos **Markdown** são muito utilizados na documentação de projetos
- Sugiro que baixem sempre os arquivos das aulas para poderem acompanhar *durante*

##### Visual Studio Code
- Utilizaremos essa ferramenta como nossa **IDE** (editor de código)
- Baixaremos extensões para customizar nossa ferramenta

---

## O que veremos em programação Web?

Hoje o **mercado de trabalho** é bem focado no desenvolvimento de aplicações *web*, tornando essa uma das matérias mais importantes do curso (não é só porque eu que estou dando)

- Não preciso dizer que **faremos sites**, com certeza teremos alguns projetos de sites, inclusive avaliativos

- Considerando o fato de que a sala é pequena
	- Acho que conseguiremos nos enturmar bem, conhecer bastante uns aos outros
	- Conseguirei produzir um conteúdo mais moldado pras necessidades individuais de cada um

- Até o final do semestre, vocês terão conseguido fazer um site bonito, responsivo e que estará hospedado na web!
	- Alguns dos projetos de alunos de semestres anteriores:
		- [Blog sobre as olimpíadas](https://caiocunha23.github.io/blog/)
		- [ValoBlog](https://danilovaz7.github.io/ValoBlog/index.html)
		- [Jogo do "Show do Centavo"](https://danilovaz7.github.io/Show-do-centavo/)


#### O semestre é puxado!

Peço uma atenção especial de vocês. Esse semestre não tem nenhum conteúdo tão complicado, mas é importante que vocês estejam *acompanhando o conteúdo* e *fazendo as atividades* necessárias.

O conteúdo é *cumulativo*, poucas vezes mudaremos de assunto, mas sim construiremos conhecimentos um em cima do outro. *Perder um conteúdo* importante pode *dificultar* o entendimento das *matérias seguintes*, portanto estejam sempre acompanhando e perguntando.

> Cuidado com faltas! Vocês ainda poderão utilizar as anotações das aulas para revisar

---

# Programação Web

**Reflexões iniciais:**
- O que vocês entendem por Programação Web?
- Que tipo de problemas a programação web soluciona? Pra quê vamos usá-la?
- Como programamos na web? Que ferramentas usamos para isso?

**E o que seria Programação Web?**
- Utilizar de linguagens de programação para desenvolver sistemas web, portanto utilizando a internet (ou world wide web).
- Sites como sistemas, redes sociais, e-commerces

**Qual a maneira de programarmos para a web?**
Depende muito do que é pretendido, de qual o problema a ser solucionado, mas no geral podemos dividir a programação web em algumas frentes
- ==**Frontend**==
	- O visual da página, exibição de dados resgatados do Backend
	- Comunicação/Integração com o Backend
	- Vamos trabalhar mais com essa área nas nossas aulas
- **Backend**
	- Servidor, comunicação com banco de dados
	- Segurança de servidores
	- Não tem nada de visual, funciona por detrás do front
	- Explicar a interação entre o frontend e o backend em um formulário 
	- Linguagens de programação como: Java, Python, C#, Javascript (eu trabalho com Ruby)
	- Gostaria de ver um pouco de Backend com vocês 
- ==**Fullstack**==
	- União de Front e Back
	- É um profissional bem procurado no mercado, já que oferece as duas funções, mas não recebe o que deveria
	- 1 salário pra duas funções
- **Mobile**
	- Aplicativos para celulares e tablets
	- Funciona em maior parte como um Frontend, precisa de comunicação com um servidor (Backend) e só envia dados e recebe dados para serem exibidos
	- ==Diferentes tipos de aplicativos==
		- Nativos
		- Híbridos
		- Web Apps
- ==**Games**==
	- Geralmente estudamos as engines de games
	- Duas famosas seriam Game maker
- **Segurança**
	- Entendimento profundo de linguagens e da Web em geral
	- Busca e prevenção de possíveis vulnerabilidades
	- Profissional valorizado

**==E POR ONDE COMEÇAMOS?==**

---

### ==HTML==
-  HTML significa linguagem de marcação de hipertexto (Hyper Text Markup Language)
- HTML é a linguagem de marcação padrão para criação de páginas da Web
- HTML descreve a estrutura de uma página da Web
- HTML consiste em uma série de elementos
- Os elementos HTML informam ao navegador como exibir o conteúdo
- Os elementos HTML rotulam partes do conteúdo como “este é um título”, “este é um parágrafo”, “este é um link”, etc.


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

- A `<!DOCTYPE html>`declaração define que este documento é um documento HTML5
- O `<html>`elemento é o elemento raiz de uma página HTML
- O `<head>`elemento contém meta informações sobre a página HTML
- O `<title>`elemento especifica um título para a página HTML (que é mostrado na barra de título do navegador ou na guia da página)
- O `<body>`elemento define o corpo do documento e é um contêiner para todos os conteúdos visíveis, como títulos, parágrafos, imagens, hiperlinks, tabelas, listas, etc.
- O `<h1>`elemento define um título grande
- O `<p>`elemento define um parágrafo


- ### **PROJETINHO DE FINAL DE AULA** - "Hey! This is Me Learning"
	- Uma página de apresentação sua, com seu nome no título da guia
	- Quero uso de pelo menos dois cabeçalhos diferentes (h1, h2 etc)
	- Pelo menos dois parágrafos sobre vocês
	- Link para redes sociais de vocês - Se não se sentirem confortáveis, manda pra um site q goste

---

### Referências interessantes:
- [W3 Schools - Introdução a HTML (Inglês)](https://www.w3schools.com/html/html_intro.asp)
	- Copiei parte do conteúdo dessa página, esse site é ótimo para estudar HTML, CSS e JS em geral, nesse mesmo link no artigo tem um botão "Try it yourself" que te leva pra um editor com um interpretador, então você pode brincar mexendo no código que disponibilizam pra ver como se comporta. Sugiro muito que sejam curiosos com isso e experimentem o quanto conseguirem
- [Alura - O que é o HTML e suas tags? Estrutura básica](https://www.alura.com.br/artigos/o-que-e-html-suas-tags-parte-1-estrutura-basica)
	- Apesar da alura ser uma plataforma de cursos paga, eles disponibilizam ótimos artigos que são públicos, aproveitem!