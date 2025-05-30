
### Relembrando sobre o trabalho do Blog
Um aviso que dei na aula passada é sobre o trabalho do [[Blog Informativo]]. Para saberem mais sobre esse trabalho, que terá sua primeira apresentação no dia *15/04*, vejam no Drive o arquivo do projeto.

---

# Responsividade

Uma coisa absolutamente importantíssima é que tenhamos páginas *flexíveis*, que possam se adaptar a diferentes tamanhos de tela. Isso é uma forma de *acessibilidade* também, se pensar que *nem todo mundo tem um computador* e que a realidade hoje em dia é que teremos pessoas abrindo nossas páginas em celulares, tablets e computadores com monitores de uma infinidade de tamanhos.

O uso de **Flexbox** já é um bom primeiro passo para tornarmos nossas páginas mais **responsivas**, mas hoje vamos ver o que significa termos uma página realmente *flexível*.

#### Exemplos de sites responsivos!
Sites para analisarmos que usam de métodos para adaptar o conteúdo dependendo do tamanho da tela:
- [Swiss Air](https://www.swiss.com/xx/en/homepage)
- [Etsy](https://www.etsy.com/pt/?ref=lgo)

### Uso de medidas relativas

Lembram das **medidas relativas** que vimos na [[Aula 05 - Introdução ao CSS]], quando aprendemos sobre *CSS*? Pois bem, vamos tentar utilizar dessas medidas pra criar nossa página *responsiva*.

Reforçando inclusive a *acessibilidade*, temos também uma coisa que é importantíssima pra alguns usuários, que é a flexibilidade do tamanho da fonte. No navegador que estamos usando agora que é o Chrome, se formos em `... (três pontos) > Configurações > Aparência`, vocês verão que temos uma opção `Tamanho da fonte`, onde conseguimos aumentar e diminuir a fonte dos sites que visitamos pra facilitar a navegação para usuários com visão debilitada, ou idosos, enfim. Essa mudança não tem *nenhum efeito prático no nosso portifólio*, como podemos ver. Vamos mudar isso.

**Vamos então pegar nosso portfolio** e seguir com as mudanças. Dando uma olhada, conseguimos ver que ainda estamos utilizando diversas medidas *fixas* no nosso código, principalmente em *pixels (px)*. Isso é um valor não muito flexível para utilizarmos, já que ele não se adapta facilmente às diferentes dimensões do conteúdo.

Para substituir essas medidas fixas, vamos experimentar a medida relativa *rem*. Ela é uma medida que é relativa ao **tamanho da fonte do elemento pai**.

> Quando comparamos o REM com pixels, é comum fazermos uma conversão desses valores seguindo a seguinte prática: 1rem = 16px

Considerando essa conversão de *pixels* para *rem*, acho que podemos fazer essas mudanças nos textos todos do nosso projeto.
```
Converteremos textos com font-size em pixels para rem
36px = 2.25rem
24px = 1.5rem
```

### Uso de porcentagens

Agora que transformamos o tamanho dos nossos textos, precisamos também adaptar o tamanho dos elementos. Nesse caso, podemos utilizar de *porcentagens* para atingir a responsividade de elementos.

Lembrando que os tamanhos em porcentagem se referem ao **TAMANHO DO ELEMENTO PAI**, portanto, se uma *div* tem um tamanho de *50%* do *body* com outra *div* dentro dela ocupando também *50%*, ela vai ocupar *25%* da página/do body, já que ela estaria se adaptando referente ao tamanho do elemento "diretamente acima" dela.

**Vamos fazer isso para os demais elementos da página** para torná-la adaptável!
```css
section {
	width: 50%;
}

img {
	width: 50%;
}

.link {
	 width: 45%;
}
```

De resto, algo que tem me incomodado é como a *imagem* que temos começa a ficar *desproporcionalmente menor que nosso texto*. Seria interessante que tivéssemos uma página flexível, onde essa imagem pudesse escorregar pra algum canto acima ou abaixo do conteúdo e manter o tamanho grandinho dela, vamos fazer isso.

# Media Queries

Vamos utilizar uma **media query** pra identificar quando nossa página estiver sendo sendo visualizada num tamanho *menor que um limite estipulado* por nós, e adaptar o conteúdo se esse for o caso.

Podemos dar uma olhada no que o *W3 Schools* diz sobre [Media Queries](https://www.w3schools.com/css/css3_mediaqueries.asp)

Aqui, vamos fazer um seletor de *@media* onde o que estiver dentro do parênteses funciona como uma **condição** que deve ser atendida para aplicarmos as propriedades declaradas dentro do bloco. No caso abaixo, eu gostaria de fazer com que nossa imagem quebre para cima do resto do conteúdo se a largura da página for menor do que *1000px*.
```css
@media (max-width: 1000px) {
	main {
		flex-direction: column;
	}
}
```
Vocês viram que agora a *imagem* está sendo jogada para *baixo*, certo? Podemos consertar isso utilizando o que já aprendemos: `column-reverse`

---

## A partir de agora é com vocês

Gostaria que estilizassem mais essa página para se parecer mais com uma *página mobile*. Na sexta-feira pretendo trazer pra vocês um *Figma* com um exemplo de um portfolio bem incrementado e bonitinho com uma versão *mobile* também para fazermos, mas hoje gostaria que vocês exercitassem esse conhecimento com alguns **objetivos simples**:
- O conteúdo ainda parece meio comprimido na nossa versão mobile, deixem ele respirar um pouco
- Nossos links não estão mais tão bonitos apertados assim um ao lado do outro, vamos colocá-los um em cima do outro

> Se conseguirem fazer até o final da aula, mostro pra vocês a solução bonitinha disso.

