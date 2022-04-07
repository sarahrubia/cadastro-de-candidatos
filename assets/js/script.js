var dadosAlunosRaw = localStorage.getItem('dadosAlunos');

if (dadosAlunosRaw != null) {
    var dadosAlunos = JSON.parse(dadosAlunosRaw);
} else {
    var dadosAlunos = [];
};

function desenhaTabela() {

    linhasExistentes = [...document.querySelectorAll('table.lista tbody .conteudo-dinamico')];

    linhasExistentes.forEach((element) => {
        element.remove();
    });

    for (dados in dadosAlunos) {
        document.querySelector('table.lista tbody').innerHTML += `
                <tr class="conteudo-dinamico" style="background-color: ${ ((dados % 2 == 0) ? '#fff' : '#eee')}">
                    <td>
                        ${dadosAlunos[dados].nome}
                    </td>
                    <td>
                        ${dadosAlunos[dados].tel}
                    </td>
                    <td>
                        ${ (dadosAlunos[dados].xp ? '<strong style="color:green"> Sim </strong>' : '<strong style="color:red"> Não </strong>' )}
                    </td>
                    <td>
                        <button onclick="deletarAlunos(${dados});">Excluir</button>
                        <a href="projeto-guiado-nta/form.html?dadosAlunos=${dados}">Alterar</a>
                    </td>
                </tr>
                `
    }
}

function deletarAlunos(d) {
    dadosAlunos.splice(d, 1); 
    desenhaTabela();
    localStorage.setItem('dadosAlunos', JSON.stringify(dadosAlunos))
}

desenhaTabela();
