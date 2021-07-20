/*var alunos = document.querySelectorAll(".alunos");

alunos.forEach(function(aluno) {
    aluno.addEventListener("dblclick", function(event) {
        this.remove();
    });
});*/

var tabela = document.querySelector("#tabela-body");
tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("animacao")
    setTimeout(function() {
        event.target.parentNode.remove();
    },1000);
});


var campoFiltrar = document.querySelector("#filtrar-aluno");

campoFiltrar.addEventListener("input",function(){
    var alunos = document.querySelectorAll(".aluno");
    if(this.value.length > 0) {
        for (var i = 0; i < alunos.length; i++) {
            var aluno = alunos[i];
            aluno.classList.add("invisivel");   
            var tdNome = aluno.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            var expressao = new RegExp(this.value, "i", );

            if (expressao.test(nome)) {
                aluno.classList.remove("invisivel");
            } else {
                aluno.classList.add("invisivel");
            }
        }
    } else {
        for (var i = 0; i < alunos.length; i++) {
            var aluno = alunos[i];
            aluno.classList.remove("invisivel")
            
        }
        
    };
});