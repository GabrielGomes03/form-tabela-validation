var botao = document.querySelector("#adicionar");
botao.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#formulario");
    var aluno = pegarValoresDoForm(form);

    var erros = validaAluno(aluno);

    if (erros.length>0) {
        menssagensDeErro(erros);
        return;
    }


    var alunotr = montaTr(aluno);

    var tabela = document.querySelector("#tabela-body");
    tabela.appendChild(alunotr);

    form.reset()

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});


function pegarValoresDoForm (form){
    var um = formulario.nota1.value;
    um = parseFloat(um);
    var dois = formulario.nota2.value;
    dois = parseFloat(dois);
    var tres = formulario.nota3.value;
    tres = parseFloat(tres);
    var media = calcularmedia(um,dois,tres)
    var aluno = {
        nome: formulario.nome.value,
        nota1: um,
        nota2: dois,
        nota3: tres,
        media_aluno: media,
        situacao: situacao(media)
    }    
    return aluno;
}
function calcularmedia(nota1,nota2,nota3) {
    var media = (nota1+nota2+nota3)/3;
    media = parseFloat(media)
    return media.toFixed(2);
}
function montaTd(dado,classe) {
    var td = document.createElement("td")
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}
function montaTr(aluno) {
    var alunotr = document.createElement("tr");
    alunotr.classList.add("aluno");
    alunotr.appendChild(montaTd(aluno.nome,"info-nome"));
    alunotr.appendChild(montaTd(aluno.nota1,"info-nota1"));
    alunotr.appendChild(montaTd(aluno.nota2,"info-nota2"));
    alunotr.appendChild(montaTd(aluno.nota3,"info-nota3"));
    alunotr.appendChild(montaTd(aluno.media_aluno,"info-media"));
    alunotr.appendChild(montaTd(aluno.situacao,"info-situacao"));
    return alunotr;
}

function situacao(media) {
    var situacao = ""
    if (media >= 7) {
        situacao = "Aprovado"
    }
    else if (media < 4){
        situacao = "Reprovado"
    }
    else {
        situacao = "Prova Final"
    }
    return situacao
}


function validarnotas(nota1,nota2,nota3) {
    if (nota1 <= 10 && nota2 <= 10 && nota3 <= 10) {
        return true;
    } else {
        return false;
    }
}

function validaAluno(aluno) {

    var erros = []

    if (aluno.nome.length <10) {
        erros.push("Preencha seu nome completo!");
    }

    if (!validarnotas(aluno.nota1,aluno.nota2,aluno.nota3)) {
        erros.push("Alguma de suas notas está inválida! Lembre-se que suas notas têm que ser entre 1 (um) e 10 (dez)!");
    }

    return erros;
}

function menssagensDeErro (erros) {
    var ul =  document.querySelector("#mensagens-erro");
    for (var i = 0; i < erros.length; i++) {
        var li = document.createElement("li");
        li.textContent = erros[i];
        ul.appendChild(li);
    }
}
