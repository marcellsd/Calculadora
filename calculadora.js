display = document.getElementById($("display"));
a = 0;
acao = "";

function valorClick(valor){
    if(display.innerHTML == "+" ||
       display.innerHTML == "-" ||
       display.innerHTML == "*" ||
       display.innerHTML == "/"){
        display.innerHTML = "";
    }
    if(valor.innerHTML == ","){
        display.innerHTML = display.innerHTML + ".";
    }
    else{
        display.innerHTML = display.innerHTML + valor.innerHTML;
    }
}

function zerar(){
    display.innerHTML = "";
    a = 0;
}

function somar(){
    a = Number(display.innerHTML);
    acao = "+";
    display.innerHTML = acao;
}

function subtrair(){
    a = Number(display.innerHTML);
    acao = "-";
    display.innerHTML = acao;
}

function multiplicar(){
    a = Number(display.innerHTML);
    acao = "*";
    display.innerHTML = acao;
}

function dividir(){
    a = Number(display.innerHTML);
    acao = "/";
    display.innerHTML = acao;
}

function resultado(){
    b = Number(display.innerHTML);

    if(acao == "+"){
        a = a + b;
        display.innerHTML = a;
    }

    else if(acao == "-"){
        a = a - b;
        display.innerHTML = a;
    }
    
    else if(acao == "*"){
        a = a * b;
        display.innerHTML = a;
    }

    else if(acao == "/"){
        a = a / b;
        display.innerHTML = a;
    }
}