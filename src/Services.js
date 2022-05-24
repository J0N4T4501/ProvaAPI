


export function somar(a,b){
    return  a +b;
}

export function dobro(a){
    return  a*2;
}

export function media(a,b,c){
    return(a+b+c)/3;
}

export function temp(a){     
    let x = a >= 37;   
    return x;
}

export function tabuada(a){

}

export function corsimcornao(cor){
    let a = cor == "amarelo" || cor == "azul" || cor == "vermelho";
    return a;
}

export function ingresso(dia, inteira, meia, nacionalidade){
    let a = inteira * 28.50;
    let b = meia * 14.25;

    if( nacionalidade == 'Brasileira'){
        a = inteira * 5.00;
        b = meia * 5.00;

        return a + b;
    }
    else if( dia == 'quarta'){
        a = inteira * 14.25;
        b = meia * 14.25;

        return a + b;
    }

    return a + b;
}

export function freqCaracter(texto, caracter){
    let a = 0;

    for(let cont = 0; cont < texto.length; cont++){
        if( texto[cont].toUpperCase() == caracter.toUpperCase()){
            a++;            
        }
    }
    return a;
}







