
Hoje entenderemos a diferença entre *tags semânticas* e *não-semânticas* no **HTML**, e como isso impacta na acessibilidade e integração do seu site. Além disso, irei introduzir nossa próxima *atividade avaliativa*, que deverá ser desenvolvida nas próximas aulas.

> Também pretendo alertá-los sobre a *aula de sexta-feira*, que será *extra importante!*

Sobre a *atividade de apresentação* das aulas passadas, vocês poderão fazer a *entrega* a qualquer momento no *Drive*, *até o final do semestre*, em `atividades > pequenas entregas > apresentação`

---

# Tags semânticas

Na última aula vimos muitas tags HTML já, agora é importante entender a diferença entre as tags semânticas e não-semânticas:

 - É algo relativamente simples: *tags semânticas* contém informação sobre o *tipo de conteúdo* que estamos envolvendo nelas, de modo a *descrevê-lo*.
- Tags *não-semânticas* não deixam explícito o *conteúdo nem a maneira que queremos dispor* esse conteúdo

Nós já vimos os dois tipos de tags na semana passada, só não demos nome aos bois
- Uma tag `h1` diz que estaremos adicionando um cabeçalho e o navegador interpreta dessa mesma maneira, deixando o texto maior e em negrito
- Uma tag `span` não diz **nada** sobre o conteúdo nela, mas essa flexibilidade pode ser útil para criarmos conteúdos personalizados
	- Nesse caso aqui, eu vou fazer algo burro pra mostrar pra vocês:

```html
<h1>Isso é um cabeçalho semântico</h1>
```
> Isso claramente é um cabeçalho e será exibido dessa maneira
```html
<span style="font-size: 2em; font-weight: bold;">
	Isso é mesmo um cabeçalho?
</span>
```
> Isso é um span, que não formata o texto contido nele de nenhuma maneira especial, mas que eu adicionei propriedades **CSS** para fazer com que ele se comporte como um h1, assim vocês conseguem ter uma noção de como funciona


#### Tags para estruturação da página

- Poderíamos usar `div`s para organizar partes da página e colocarmos o conteúdo de acordo:
	- [Exemplo: Liceu Santista](https://www.liceusantista.com.br)
- Temos uma maneira **semântica** de fazer isso, deixando bem explícito tanto pra nós quanto para o navegador o tipo de conteúdo e como queremos dispor isso
	- Que tal fazermos isso?


**Vejamos como nós estruturamos a página com as tags semânticas:**

| tag         | função                                                                      |
| ----------- | --------------------------------------------------------------------------- |
| `<article>` | Como um **artigo**, agrupa um conteúdo independente                         |
| `<aside>`   | Usado como uma **barra lateral**                                            |
| `<details>` | **Detalhes adicionais** que, geralmente, podem ser mostrados ou escondidos  |
| `<footer>`  | **Rodapé** da página, geralmente o último elemento da página                |
| `<header>`  | **Cabeçalho** da página, geralmente posicionado no topo                     |
| `<main>`    | Especifica o conteúdo **principal** de um documento                         |
| `<mark>`    | Define texto **destacado**                                                  |
| `<nav>`     | Às vezes abaixo do header, às vezes acima, usado como **menu de navegação** |
| `<section>` | Agrupamento de uma **seção** do documento, geralmente com um título         |
![[HTML Semântico.png]]

- **OBS:** Importante comentar sobre o agrupamento de section > article ou article > section. Não existe muito uma regra, depende do caso.

#### Criemos então um novo arquivinho pra nós

Utilizaremos tags *(elementos)* *HTML semânticos* para criar uma página simples:
```html
<header>
	<h2>Cidades</h2>
</header>

<nav>
	<ul>
		<li><a href="#">Londres</a></li>
		<li><a href="#">Paris</a></li>
		<li><a href="#">Tóquio</a></li>
	</ul>
</nav>

<main>
	<article>
		<h1>Londres</h1>
		<p>Londres é a capital da Inglaterra. É a cidade mais populosa do 
		Reino Unido, com uma área metropolitana de 
		mais de 13 milhões de habitantes.</p>
		<p>Situada às margens do rio Tâmisa, Londres tem sido um importante
		assentamento há dois milênios, e sua história remonta à sua fundação
		pelos romanos, que a chamaram de Londinium.</p>
	</article>
</main>

<footer>
	<p>Rodapé</p>
</footer>
```

**Que tal começarmos um exercício?**

---

# Guia de Viagem

Gostaria que fizessem um *Guia de Viagem*. Basicamente uma página web simples feita com **HTML** (lógico) e com um pouquinho de **CSS** para deixarmos ela com mais personalidade.

> Aprenderemos muito sobre **CSS** nas próximas aulas!

Esse exercício na verdade é também uma **avaliação**! Como temos um semestre que passa rápido e um total de 10 pontos pra serem avaliados até o final, já vou pedir nossa primeira atividade valendo **1 ponto**.

> A entrega deverá ser feita até o dia *21/02*, e teremos duas aulas dedicadas a esse desenvolvimento até lá!

Todos os detalhes para essa atividade estarão em [[Guia de Viagem]]

> Se abrirem essa página no Obsidian, conseguirão clicar no link.
> Também podemos abrir o arquivo em `atividades > guia de viagem > Guia de Viagem`

