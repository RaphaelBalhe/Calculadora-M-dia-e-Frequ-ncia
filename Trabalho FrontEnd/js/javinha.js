function calcularMedia() {
    const nome = document.getElementById("aluno").value;
    const cx1 = parseFloat(document.getElementById("cx1").value) || 0;
    const cx2 = parseFloat(document.getElementById("cx2").value) || 0;
    const cx3 = parseFloat(document.getElementById("cx3").value) || 0;
    const totalAulas = parseFloat(document.getElementById("totalAulas").value) || 0;
    const aulasParticipadas = parseFloat(document.getElementById("aulasParticipadas").value) || 0;

    if (isNaN(cx1) || isNaN(cx2) || isNaN(cx3) || isNaN(totalAulas) || isNaN(aulasParticipadas)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const media = (cx1 + cx2 + cx3) / 3;
    document.getElementById("cx4").value = media.toFixed(2);

    const frequencia = (aulasParticipadas / totalAulas) * 100;
    let resultado = `Aluno: ${nome}, Média: ${media.toFixed(2)}, Frequência: ${frequencia.toFixed(2)}%. `;

    if (media >= 7 && frequencia >= 75) {
        resultado += "Aprovado.";
    } else if (media >= 5 && frequencia >= 75) {
        resultado += "De exame.";
    } else {
        resultado += "Reprovado.";
    }

    alert(resultado);
}
