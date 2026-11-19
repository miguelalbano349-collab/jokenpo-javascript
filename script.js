
<script>
function jogar(escolhaUsuario) {

    const opcoes = ['pedra', 'papel', 'tesoura'];

    const escolhaComputador =
        opcoes[Math.floor(Math.random() * 3)];

    let resultado = '';

    if (escolhaUsuario === escolhaComputador) {
        resultado = 'Empate!';
    }
    else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultado = 'Você venceu!';
    }
    else {
        resultado = 'O computador venceu!';
    }

    document.getElementById('resultado').innerHTML =
        'Você escolheu: ' + escolhaUsuario +
        '<br>Computador escolheu: ' + escolhaComputador +
        '<br><br>' + resultado;
}

function reiniciar() {
    document.getElementById('resultado').innerHTML =
        'Faça sua escolha!';
}
</script>


print(javascript)
