const button = document.getElementById("botao");

// button.onclick = darkMode;
button.addEventListener("click", darkMode);

let tema = "claro";

function darkMode() {
    // document.body.classList.toggle('dark');

    if (tema == "claro") {
        document.body.style.backgroundColor = "black";
        tema = "escuro";
    } else {
        document.body.style.backgroundColor = "white";
        tema = "claro";
    }
}