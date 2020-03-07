var legal = document.querySelector("#LegaL_moves");
localStorage.setItem("a3 a4 b3 b4 c3 c4 d3 d4 e3 e4 f3 f4 g3 g4 h3 h4 Nf3 Nh3 Na3 Nc3", "legal1")
localStorage.setItem("a4 b3 b4 c3 c4 d3 d4 e3 e4 f3 f4 g3 g4 h3 h4 Nf3 Nh3 Nc3", "legal2")
function CHessGame() {
    var Fm = prompt("Your move look bellow for legal moves")
    switch (Fm) {
        case e4:
            
            break;
    
        default:
            break;
    }
}
Legal_Moves.innerHTML = "<br><em>" + legal + "</em>";