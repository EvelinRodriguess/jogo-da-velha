
let jogador = "X";

let casa01 = document.getElementById("casa01");
let casa02 = document.getElementById("casa02");
let casa03 = document.getElementById("casa03");
let casa04 = document.getElementById("casa04");
let casa05 = document.getElementById("casa05");
let casa06 = document.getElementById("casa06");
let casa07 = document.getElementById("casa07");
let casa08 = document.getElementById("casa08");
let casa09 = document.getElementById("casa09");



function jogada(casa) {
    if (casa.innerHTML === ""){
        casa.innerHTML = jogador;
        alterna_jogador();

        verifica_ganhador();
    }
        
}
function alterna_jogador() {
    if (jogador === "X"){
        jogador = "O";
    }else{
        jogador = "X";
    }
}
function verifica_ganhador() {
    if (casa01.innerHTML!="" && casa01.innerHTML===casa02.innerHTML && casa01.innerHTML=== casa03.innerHTML){
        alert(`Temos uma ganhador: ${casa01.innerHTML}`)
        ganhador(casa01.innerHTML);
    } 
    else if 
        (casa04.innerHTML!="" && casa04.innerHTML===casa05.innerHTML && casa04.innerHTML=== casa06.innerHTML){
            alert(`Temos uma ganhador: ${casa04.innerHTML}`)
            ganhador(casa04.innerHTML);
    }
    else if 
        (casa07.innerHTML!="" && casa07.innerHTML===casa08.innerHTML && casa07.innerHTML=== casa09.innerHTML){
            alert(`Temos uma ganhador: ${casa07.innerHTML}`)
            ganhador(casa07.innerHTML);
    }
    else if 
        (casa01.innerHTML!="" && casa01.innerHTML===casa04.innerHTML && casa01.innerHTML=== casa07.innerHTML){
            alert(`Temos uma ganhador: ${casa01.innerHTML}`)
            ganhador(casa01.innerHTML);
    }
    else if 
        (casa02.innerHTML!="" && casa02.innerHTML===casa05.innerHTML && casa02.innerHTML=== casa08.innerHTML){
            alert(`Temos uma ganhador: ${casa02.innerHTML}`)
            ganhador(casa02.innerHTML);
    }
    else if 
        (casa03.innerHTML!="" && casa03.innerHTML===casa06.innerHTML && casa03.innerHTML=== casa09.innerHTML){
            alert(`Temos uma ganhador: ${casa03.innerHTML}`)
            ganhador(casa03.innerHTML);
    }
    else if 
        (casa01.innerHTML!="" && casa01.innerHTML===casa05.innerHTML && casa01.innerHTML=== casa09.innerHTML){
            alert(`Temos uma ganhador: ${casa01.innerHTML}`)
            ganhador(casa01.innerHTML);
    }
    else if 
        (casa03.innerHTML!="" && casa03.innerHTML===casa05.innerHTML && casa03.innerHTML=== casa07.innerHTML){
            alert(`Temos uma ganhador: ${casa03.innerHTML}`)
            ganhador(casa03.innerHTML);

    }
    let vitorias_X = 0;
    let vitorias_O = 0;

    function ganhador(ganhador){
        if (ganhador === "X")
        vitorias_X = vitorias_X + 1;
        else
        vitorias_O = vitorias_O + 1;
        placar.innerHTML = `<p>Placar</p>
        <p>X: ${vitorias_X}</p> <p>O: ${vitorias_O}</p>`

    }

    }
    function reinicia(){
    jogador = prompt("Informe X ou O").toUpperCase();

        casa01.innerHTML = "";
        casa02.innerHTML = "";
        casa03.innerHTML = "";
        casa04.innerHTML = "";
        casa05.innerHTML = "";
        casa06.innerHTML = "";
        casa07.innerHTML = "";
        casa08.innerHTML = "";
        casa09.innerHTML = "";
    }