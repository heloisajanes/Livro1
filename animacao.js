/*lIVRO  FLUTUANTES*/
const livros = document.querySelectorAll("livro");

livros.forEach(livro => {
    livro.addEventListener("click", () => {

        livro.style.transform = "scale(1.5)";
        livro.style.transition = "0.3s";

        setTimeout(() => {
            livro.style.transform = "scale(1)";
        }, 300);

    });
});