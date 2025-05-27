

### Link para o Miro: [LINK](https://miro.com/app/board/uXjVMYb0Yeo=/?share_link_id=377167460725)

---

### Relembrando da atividade do Guia de Viagem

> Atividade valendo *1.0 ponto* para ser entregue até o dia *21/02*, sexta-feira

Para mais detalhes sobre a *atividade* e seus *requisitos*, podemos acessar o arquivo [[Guia de Viagem]] pelo Obsidian (tendo o arquivo no *vault*) ou pelo Drive em `atividades > guia de viagem > Guia de Viagem.md`

---

## DEMO de CSS

Trouxe pra vocês uma demonstração de um site que considero uma ótima referência para o conteúdo desse semestre: o [W3 Schools](). Isso é pra vocês terem uma noção do que se faz com o CSS

> O arquivo está na pasta `demo`

- Não é apenas corzinha e tamanho
- CSS vai permitir formatarmos a página como um todo:
	- Posicionar elementos
	- Esconder e exibir elementos
	- Animações, transições

---

# CSS

- CSS significa *Folhas de Estilo em Cascata*
- CSS descreve como os elementos HTML devem ser exibidos na tela
- CSS economiza muito trabalho. Ele pode controlar o layout de várias páginas da web de uma só vez
- Folhas de estilo externas são armazenadas em arquivos CSS (`.css`)

Há muito tempo, o HTML não foi *inventado* pra formatar a página, mas sim pra *descrever o conteúdo*. A *dor* que começou a surgir pros desenvolvedores na verdade foi *manter um monte de tags* e atributos pra estilização como a tag `<font>` nos arquivos de *cada página*. Em sites grandes, com muitas páginas, começava a virar um inferno ter o mesmo conteúdo de estilização em todos eles, e assim surgiu o *CSS*.
- **O CSS removeu a estilização de páginas do HTML**


### E como fazemos CSS?

- O CSS é feito de **regras**: uma *regra CSS* consiste em um *seletor* e um *bloco de declaração*
	- **Seletor:** aponta para o elemento HTML que você deseja estilizar
	- **Declarações:** incluem uma *propriedade CSS* e um *valor*, separados por dois pontos
- **Declarações** CSS são *separadas por ponto e vírgula*
- **Blocos de declaração** são *cercados por chaves*

![[CSS.png]]


#### Seletores

Seletores são importantes, saber usar eles nas situações certas vai ajudar vocês a resolver diferentes problemas que poderão encontrar aí

| Seletor                     | Exemplo  | Descrição do exemplo                                |
| --------------------------- | -------- | --------------------------------------------------- |
| `#id`                       | `#nome`  | Seleciona o elemento com `id=nome`                  |
| **.classe**                 | `.azul`  | Seleciona todos os elementos com `class="azul"`     |
| **elemento.classe**         | `p.azul` | Seleciona apenas elementos `<p>` com `class="azul"` |
| *****                       | `*`      | Seleciona todos os elementos                        |
| **elemento**                | `p`      | Seleciona todos os elementos `<p>`                  |
| **elemento1, elemento2...** | `div, p` | Seleciona todos os elementos `<div>` e `<p>`        |
| **elemento1 elemento2...**  | `div p`  | Seleciona todos os elementos `<p>` em uma `<div>`   |

### Para aplicar o CSS na página

#### CSS inline
- Como vocês já vêm fazendo pra estilizar os elementos individualmente
- Bom pra introduzir CSS pra vocês mas é completamente ultrapassado, **não usem**
```html
<h1 style="color:blue;text-align:center;">Cabeçalho</h1>
```

#### CSS interno
- Como já mostrei pra vocês na aula passada
- Interessante para pequenos projetos ou para manter a página em um mesmo arquivo, **o uso é desencorajado**
```html
<head>
	<style>
		h1 {
			color: blue;
			text-align: center;
		}
	</style>
</head>
<body>
	<h1>Cabeçalho</h1>
</body>
```

#### CSS externo
- A partir de agora será interessante usarmos sempre isso
- Interessante para projetos maiores e para compartilhar o estilo entre páginas, **é considerado uma boa prática**

> index.html
```html
<head>
	<link rel="stylesheet" href="estilo.css">
</head>
<body>
	<h1>Cabeçalho</h1>
</body>
```
> style.css
```css
h1 {
	color: blue;
	text-align: center;
}
```

### Valores

#### Unidades de medida

**Medidas absolutas**
- *O uso é desencorajado*, diferentes telas exibirão esse conteúdo em diferentes tamanhos, isso pode zoar seu estilo
- Pode ser usado em casos onde sabemos o tamanho da tela do dispositivo em que será exibido
- Estou mostrando todas a título de curiosidade, mas realmente não tem necessidade nenhuma em saber as demais além de *pixels*

| Unidade | Descrição                                                                                                 |
| ------- | --------------------------------------------------------------------------------------------------------- |
| cm      | centímetros [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_cm)                     |
| mm      | milímetros [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_mm)                      |
| in      | polegadas (1in = 96px = 2.54cm) [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_in) |
| px      | pixels (1px = 1/96th of 1in) [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_px)    |
| pt      | pontos (1pt = 1/72 of 1in) [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_pt)      |

**Medidas relativas**
- As unidades relativas de medida especificam um tamanho relativo a outro tamanho específico
- Seu uso é *encorajado*, já que conseguem exibir um conteúdo dinâmico feito para *diferentes tamanhos* de tela
	- Ajudam a manter a *responsividade* do site
	- Não são os únicos meios de adicionar responsividade, veremos mais no futuro

| Unit | Description                                                                              |                                                                                   |
| ---- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| em   | Relativo ao tamanho da fonte do elemento (2em significa 2 duas vezes o tamanho da fonte) | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_em)         |
| ex   | Relativo ao `x-height`  da fonte atual (raramente usado)                                 | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_ex)         |
| ch   | Relativo ao tamanho do caracter "0" (zero)                                               | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_ch)         |
| rem  | Relativo ao tamanho da fonte do elemento pai                                             | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_rem)        |
| vw   | Relativo a 1% da largura do viewport*                                                    | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_vw)         |
| vh   | Relative a 1% da altura viewport*                                                        | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_vh)         |
| vmin | Relativo a 1% da menor dimensão do viewport*                                             | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_vmin)       |
| vmax | Relativo a 1% da maior dimensão do viewport*                                             | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_vmax)       |
| %    | Relativo ao tamanho do elemento pai                                                      | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_percentage) |
> As unidades em e rem são boas para criar layouts escaláveis.
> * viewport = o tamanho da janela do navegador. Se a janela de visualização tiver 50 cm de largura, 1vw = 0,5 cm.

#### Valores de cor

As cores em CSS podem ser especificadas pelos seguintes métodos:
- Cores hexadecimais
- Cores hexadecimais com transparência
- Cores RGB
- Cores RGBA (o A é de alfa)
	- O alfa é um número entre 0,0 (totalmente transparente) e 1,0 (totalmente opaco)
- Cores HSL
- Cores HSLA
- Nomes de cores predefinidos a depender dos navegadores

```html
<h1 style="background-color: #ff0000;">Cor hexadecimal</h1>  
<h1 style="background-color: #ff000080;">Cor hexadecimal com transparência</h1>  
<h1 style="background-color: rgb(255, 0, 0);">Cor RGB</h1>  
<h1 style="background-color: rgba(255, 0, 0, 0.3);">Cor RGBA</h1>  
<h1 style="background-color: hsl(360, 100%, 50%);">Cor HSL</h1>  
<h1 style="background-color: hsla(0, 100%, 50%, 0.3);">Cor HSLA</h1>  
<h1 style="background-color: red;">Cor com nome predefinido</h1> 
```


---

## Basicamente é isso

*CSS* no seu conceito é praticamente *só isso* mesmo, veremos mais algumas coisinhas avançadas ao longo das próximas semanas, mas o que vocês vão precisar agora é *como aprender uma língua nova*: **vocabulário e prática**
- Precisamos jogar vocês em desafios para sentirem as necessidades reais e problemas práticos para que precisemos solucionar
- Isso vai fazer vocês naturalmente gravarem as propriedades mais comuns e mais importantes
- E vocês se surpreenderiam como faz diferença vocês saberem **como** pesquisar, vai ser uma boa prática