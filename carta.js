const envelope = document.getElementById("envelope");
const container = document.getElementById("envelopeContainer");
const section = document.getElementById("messageSection");
const typedText = document.getElementById("typedText");

const message = `

Primeiramente, queria desejar um feliz aniversário, princesa. Que o seu coração puro, feliz e contagiante seja sempre o mesmo. 
Ter você na minha vida é um detalhe que faz toda a diferença, algo que é insubstituível. 
Obrigado por me permitir ainda estar nela!

Segundamente, queria contar um pouco de como você ainda é MUITO importante para mim. 
Nossa história começou há 6 anos, quando ainda éramos crianças, com mentes leves, inocentes e nada experientes. 
Mas foi aí que o que antes era apenas uma simples amizade virou um amor verdadeiro.
Apesar de existirem sentimentos desde muito tempo, assumimos isso somente em 2023, mas o namoro se iniciou em 2024. 
Foi nesse ano que decidi mudar por quem eu realmente amava e queria ao meu lado; mudei não somente por mim, mudei por você, por nossos futuros filhos e porque sabia que, para você, tudo valeria a pena. 
Infelizmente, isso chegou ao fim, fisicamente, porque emocionalmente ainda é muito vivo. 
Ter você na minha vida não é por acaso, é por um propósito, algo além de um simples “acontecimento”; estava escrito e definido, é perceptível. 
Quero viver muita coisa ainda e, na maioria delas, vejo você ao meu lado. E não é só eu: minha mãe, meu pai, minha irmã, minha cunhada, todos aqueles que sabem do meu sentimento e veem os nossos olhos se encontrando falam que ainda existe amor e vontade. 
Infelizmente, nossa história é muito mais complicada, mas o fato de ter você ao meu lado faz o impossível ser fácil de ser feito. Obrigado por toda nossa história feita e escrita. Sei que você está desde o “Era uma vez” até o “Fim”.

Eu te amo, meu bem. Feliz aniversário!

`;

let i = 0;

function typeWriter(){

    if(i < message.length){

        typedText.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 15);
    }
}

envelope.addEventListener("click", () => {

    container.style.opacity = "0";

    setTimeout(() => {

        container.remove();

        section.classList.add("show");

        typeWriter();

    }, 800);

});