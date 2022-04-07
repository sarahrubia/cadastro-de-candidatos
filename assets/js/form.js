function testaFormulario(meuEvento) {
    meuEvento.preventDefault();

    var dadosAlunosRaw = localStorage.getItem('dadosAlunos');
    
    if (dadosAlunosRaw != null) {
        var dadosAlunos = JSON.parse(dadosAlunosRaw);
    } else {
        var dadosAlunos = [];
    };

    if (id !== null) {
        dadosAlunos[id] = {
            nome: meuEvento.target.elements['nome'].value,
            tel: meuEvento.target.elements['phone'].value,
            xp: (meuEvento.target.elements['xp'].value == 'true')
        }

    } else {
        dadosAlunos.push({
            nome: meuEvento.target.elements['nome'].value,
            tel: meuEvento.target.elements['phone'].value,
            xp: (meuEvento.target.elements['xp'].value == 'true')
        });

    }

    
    localStorage.setItem('dadosAlunos', JSON.stringify(dadosAlunos));

    document.getElementById('goHome').click();
}

var urlPrincipal = new URL(window.location.href)

var id = urlPrincipal.searchParams.get('dadosAlunos')
if (id !== null) {
    var dadosAlunosRaw = localStorage.getItem('dadosAlunos');
    
    if (dadosAlunosRaw != null) {
        var dadosAlunos = JSON.parse(dadosAlunosRaw);
    } else {
        var dadosAlunos = [];
    };

    console.log(dadosAlunos[id])

    document.getElementById('nome').value = dadosAlunos[id].nome
    document.getElementById('phone').value = dadosAlunos[id].tel

    if (dadosAlunos[id].xp) {
        document.getElementById('xp-sim').checked = true;
    } else {
        document.getElementById('xp-nao').checked = true;
    }
}

function testaCampoTelefone(e) {
    e.preventDefault();
    console.log(e)

    if (e.target.value.length == 0) {
        e.target.value += '('
    }

    if (e.target.value.length == 3) {
        e.target.value += ') '
    }

    if (e.target.value.length == 10) {
        e.target.value += '-'
    }

    if ((/[0-9]/g).test(e.key) && e.target.value.length < 15) {
        e.target.value += e.key
}
}
