
A aula de hoje será dedicada ao desenvolvimento da atividade que foi passada no final da última aula: o [[Guia de Viagem]]. Devemos estar tirando dúvidas e introduzido pequenos conceitos relacionados ao CSS.

Vamos pegar a carcaça da página que fizemos na terça-feira e daremos um trato nela para dar um pouco mais de corpo à estrutura.

---

## Introduzindo CSS

Na aula de terça-feira da próxima semana, faremos um *aulão de CSS* para entendermos esses conceitos em maior detalhe. Porém, por hoje, estaremos vendo apenas algumas regras básicas e como aplicá-las às tags *HTML*.

Nós chegamos a ver nas aulas passadas como aplicamos uma *estilização básica* implementando a propriedade `style` numa tag HTML:
```html
<p>Esse é um texto padrão</p>
<p style="color: red">Esse é um texto vermelho</p>
```

Além disso, para estilizar *diversos elementos*, ou aplicar *diversas regras* a uma única tag, podemos utilizar uma *tag* `style` dentro do `header` e descrever quais elementos devem ser estilizados e quais as regras de estilização:
```html
<style>
	p {
		color: red;
	}
<style>
```

### Vamos aplicar isso na nossa página

Vamos aplicar algumas propriedades como `margin`, `color`, `background-color` e também conhecer alguns outros:
```css
header {
	background-color: #666;
	padding: 30px;
	text-align: center;
	font-size: 35px;
	color: white;
}
```

Vamos ver o que cada uma dessas propriedades significa, e finalizar o resto do design utilizando estilizações como essa.

> Podemos ver como fica o produto final no `demo_style.html`

Aqui vai uma *colinha* algumas das *propriedades CSS* mais básicas que utilizaremos:
- *color*: cor do texto
- *background-color*: cor do fundo
- *margin*: define margens para o elemento
- *padding*: define uma "margem interna" para o elemento
- *text-align*: determina como o texto ficará disposto
- *font-size*: tamanho da fonte
- *height*: define uma altura para o elemento
- *width*: define uma largura para o elemento

---

### Desenvolvimento do Projeto

O resto da aula será dedicada ao desenvolvimento da atividade que foi passada na aula passada, do [[Guia de Viagem]].