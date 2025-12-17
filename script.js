function calcularFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    if (n < 0) {
        return "Inválido";
    }

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function calcularResultados() {

    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, digite números válidos em ambos os campos.");
        document.getElementById('resultadoTabuada').innerHTML = `Aguardando entrada...`;
        document.getElementById('resultadoFatorial').innerHTML = `Aguardando entrada...`;
        document.getElementById('resultadoParImpar').innerHTML = `Aguardando entrada...`;
        return;
    }
    
    let tabuadaHTML = '';

    for (let i = 1; i <= 10; i++) {
        tabuadaHTML += `${num2} x ${i} = ${num2 * i}<br>`;
    }

    document.getElementById('resultadoTabuada').innerHTML = tabuadaHTML;

    const fatorialResultado = calcularFatorial(num1);
    
    let fatorialHTML = `${num1}! = ${fatorialResultado}`;
    if (fatorialResultado === "Inválido") {
        fatorialHTML = "Fatorial inválido (Número 1 negativo)";
    }

    document.getElementById('resultadoFatorial').innerHTML = fatorialHTML;

    const parImpar1 = num1 % 2 === 0 ? 'Par' : 'Ímpar';
    const parImpar2 = num2 % 2 === 0 ? 'Par' : 'Ímpar';

    const parImparHTML = `
        Número 1 (${num1}): ${parImpar1}
        <br>
        Número 2 (${num2}): ${parImpar2}
    `;

    document.getElementById('resultadoParImpar').innerHTML = parImparHTML;
}