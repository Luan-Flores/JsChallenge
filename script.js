const btn = document.querySelector('.btn');
const controle = document.getElementById('formulario');
controle.addEventListener('change', mudanca);

const funcoes = {
    text(valor){
        btn.innerText = valor;
    },
    color(valor){
        btn.style.color = valor;
    },
    backgroundColor(valor){
        btn.style.backgroundColor = valor;
    },
    height(valor){
        btn.style.height = valor = 'px';
    },
    width(valor){
        btn.style.width = valor = 'px';
    },
    backgroundColor(valor){
        btn.style.backgroundColor = valor;
    },
    border(valor){
        btn.style.border = valor;
    },
    borderRadius(valor){
        btn.style.borderRadius = valor;
    },
    fontFamily(valor){
        btn.style.fontFamily = valor;
    }
}

function mudanca(event){
    const valor = event.target.value;
    const nome = event.target.name;

    console.log(funcoes[nome](valor))
    funcoes[nome][valor]
    colocarString(nome,valor)
}