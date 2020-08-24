function computerPlay(){
    console.log("Entered Computer Play");
    var choice = Math.random(3) * 3;
    console.log(choice);
    if(choice <=1){
        return "Rock"
    }
    if(choice > 1 && choice <= 2){
        return "Paper"
    }
    if(choice > 2){
        return "Scissors"
    }
}

function userPlay(){
    let pick = prompt("Rock, Paper, or Scissors");

    pick.toLowerCase();

    if(pick == "rock"){
        return "Rock";
    }
    if(pick == "paper"){
        return "Paper";
    }
    if(pick == "scissors"){
        return "Scissors";
    }
    else{
        console.log(pick)
        console.log("Those are not proper choices.");
        userPlay()
    }
}
function playRound(playerSelection, computerSelection){
    console.log("Entered Play Round")
    if(playerSelection == computerSelection ){
        return "Round Tied"
    }
    if(playerSelection == "Rock" && computerSelection == "Paper"){
        return "Computer wins!"
    }
    if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return "Player wins!"
    }
    if(playerSelection == "Paper" && computerSelection == "Rock"){
        return "Player wins!"
    }
    if(playerSelection == "Paper" && computerSelection == "Scissors"){
        return "Computer wins!"
    }
    if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return "Computer wins!"
    }
    if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return "Player wins!"
    }
    
}
function game(){
    var count = 0;
    var cWins = 0;
    var pWins = 0;
    while(count <= 4){
        var pSelect = userPlay();
        var cSelect = computerPlay();
        console.log(pSelect);
        console.log(cSelect);
        var win = playRound(pSelect,cSelect);
        console.log(win);
        if(win == 'Computer wins!'){
            cWins+=1;
        }
        else{
            pWins+=1;
        }
    }
    if(cwins > pWins){
        console.log("Computer wins!");
    }
    else{
        console.log("Player wins!");
    }
}
game();