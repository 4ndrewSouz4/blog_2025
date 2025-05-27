
Hoje gostaria de introduzir vocês à utilização da ferramenta que utilizaremos como *Editor de Código (IDE)*, que é o **Visual Studio Code**. Vamos ver como ele é simples de utilizar, aprenderemos alguns macetes, e o resto da aula será oferecida para desenvolvimento da atividade passada na aula anterior.

Além disso, gostaria de demonstrar pra vocês a utilização da tag *img* para adicionarmos *imagens* à página, e uma utilização básica de **CSS** para *pintar* nosso texto e fundo da página.

---

## Visual Studio Code

O **Visual Studio Code (VSCode)** é um dos editores de código mais populares e versáteis atualmente, e foi desenvolvido pela Microsoft. A utilização dele é super *simples*, e ainda conseguimos aprimorar suas funcionalidades instalando **extensões**.

Para o desenvolvimento de **HTML e CSS**, o *VSCode* oferece recursos como *destaque de sintaxe*, '*autocomplete*' e formatação automática. Vamos conhecer algumas extensões que simplificam muito o desenvolvimento.

##### Live Server
- O Live Server introduz *hot-reaload* à nossas páginas, que basicamente permite atualizar nossa página que estamos desenvolvendo sempre que salvarmos alterações no código dela

##### HTML CSS Support
- O VSCode já é naturalmente bem preparado para lidar com códigos HTML e CSS, mas essa extensão ajuda em alguns cenários extras, principalmente trabalhando com CSS

##### Outras paradinhas estéticas
- *Temas* do Visual Studio (como o Dracula)
- *Material Icon*
- Pets

### Emmet
- O **emmet** já vem por default no *VSCode* e uma das suas funcionalidades é gerar e autocompletar nossas tags HTML
- Demonstração criando um novo arquivo HTML e criando tags facilmente usando `TAB`
	- Notem o uso padrão do `lang="en"` para definir a língua na tag de `html`, alteraremos pra `pt-br`
	- Notem o uso do *meta charset* como vimos nas aulas passadas para usar `UTF-8`
	- *meta viewport* é só pra determinar algumas questões de escala inicial do dispositivo no qual estamos abrindo nossa página e estipulando uma escala inicial de 1.0 (podemos ignorar)
	- Exemplo de um `h1` apertando `TAB`
	- Exemplo de criação de múltiplas tags como: `ul>li*3`

---

### Continuação do Exercício

Gostaria que *continuassem o exercício da aula passada*, e também irei introduzir *dois assuntos* simples mas interessantes para que consigam implementar nas suas páginas:
- Utilização da tag *img*
- Estilização básica com a propriedade *style* para pintar nossos elementos, exemplo abaixo:

```html
<h1>Título simples<h1>
<h1 style="color: red">Título vermelho<h1>
<h1 style="background-color: blue">Título com fundo azul<h1>
<h1 style="background-color: black; color: white">Título branco no preto<h1>
```