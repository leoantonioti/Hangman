// Faz com que minhas duas sessão fiquem separadas em telas diferentes. (Sessão Login e Sessão Jogo)
window.addEventListener('load', (e) => {
    sectionFirst.style.display = 'block'; 
    sectionSecond.style.display = 'none'; 
    warning.style.display = 'none';
    points = 0; 
}); 

// Declaração de variaveis 
let sectionFirst = document.getElementById('sectionFirst');
let sectionSecond = document.getElementById('sectionSecond'); 
let playNow = document.getElementById('playNow'); 
let showRules = document.getElementById('showRules'); 
let Show = document.getElementById('Show');
let resetScore = document.getElementById('resetScore'); 
let Dice = document.getElementById('Dice');
let Score = document.getElementById('Score');
let myChoiceNumber = document.querySelectorAll('.roll');
let computerDice = null; 
let MyDice = null; 
let points = 0; 

// Faz a transição entre a primeira tela (Login e Inicio de Jogo e a tela do Jogo em si)
playNow.addEventListener('click', function(){
    sectionFirst.style.display = 'none'; 
    sectionSecond.style.display = 'block'; 
}); 

// Função para mostrar  as regras do Jogo 
showRules.addEventListener('click',()=> {
    Show.innerHTML = `
      <p class="text-danger text-end"><i class="fa-solid fa-circle-xmark fs-3" onclick="hideRules();"></i></p>
                    <div class="bgColor bg-gradient rounded p-4">
                        <h5>Como Jogar?</h5>
                        <p>Selecione qualquer número <br> Clique na imagem do dado <br> 
                        Se você acertar, ganha o mesmo número de pontos do dado <br>
                        Se errar, você perde 2 pontos! </p>
                    </div>
    `
// Rola para a parte de regras
document.getElementById('Show').scrollIntoView({
        behavior: 'smooth', // Rolar suavemente
        block: 'start'      // Rolar até o topo do elemento
    });
}); 

// Função para esconder as regras do jogo 
function hideRules() {
    Show.innerHTML = ''; 
    sectionFirst.scrollIntoView({
        behavior: 'smooth', // Rolar suavemente
        block: 'start'      // Rolar até o topo da seção
    });
}; 


// Função para resetar todos os jogos e os pontos ao clicar no Botão Reset 
resetScore.addEventListener("click", function(){
    sectionFirst.style.display = 'block'; 
    sectionSecond.style.display = 'none'; 
    points = 0; 
    Score.innerText = `${points}`; 
}); 

// Função para obter o valor do numero do botão clicado 
myChoiceNumber.forEach(function(button){
button.addEventListener("click", function(){
MyDice = this.getAttribute('value') ; 
warning.style.display = 'none'; 
console.log(`myDice : ${MyDice}`)
}); 
}); 



// Função para rodar o Dado 
Dice.addEventListener("click", function(){
    if (MyDice != null) {
        computerDice = Math.floor(Math.random()*6 + 1);
        Dice.src = `img/dado_${(computerDice)}.png`; 
        console.log(`computerDice : ${computerDice}`)
        ScoreCard(); 
    }
    else {
        warning.style.display = 'block'; 
        return; 
    }
}); 

// Função para mostrar o Score
function ScoreCard() {
    if(MyDice == computerDice){
        points += computerDice;
    }
    else{
        points -= 2; 
        alert("Errou!");
    }
    Score.innerText =  `${points}`;
    MyDice = null; 
    computerDice = null; 
}