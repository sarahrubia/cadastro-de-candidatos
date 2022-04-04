var dadosAlunos = [
    {
        nome: 'Fernando Henrique Caversan Santos Duro',
        tel: '14999999999',
        xp: true,
    },
    {
        nome: 'Sarah Rúbia de Oliveira Santos',
        tel: '31988999779',
        xp: false,
    },
    {
        nome: 'Isadora Cardoso Pereira da Silva',
        tel: '82955551111',
        xp: true,
    },
    {
        nome: 'Renise Silva',
        tel: '8233332222',
        xp: false,
    }
]

for (dados in dadosAlunos) {
    console.log(dadosAlunos)
    document.querySelector('table.lista tbody').innerHTML += `
            <tr style="background-color: ${ ((dados % 2 == 0) ? '#fff' : '#eee')}">
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
                    <button>Alterar</button>
                </td>
            </tr>
            `
}