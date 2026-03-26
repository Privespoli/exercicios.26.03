function dibujar(tipo) {

    let n = document.getElementById("lado").value;
    let dibujo = "";


    if (tipo === 'cuadrado') {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                dibujo += "* "; 
            }
            dibujo += "\n"; 
        }
    } 

    else if (tipo === 'triangulo') {
        for (let i = 1; i <= n; i++) {
            for (let j = 0; j < i; j++) {
                dibujo += "* ";
            }
            dibujo += "\n";
        }
    }
    document.getElementById("resultado").innerText = dibujo;
}



function ordenarMatriz(lista, orden) {
    let n = lista.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            
            let debeCambiar = false;
            if (orden === 'Asc' && lista[j] > lista[j + 1]) {
                debeCambiar = true;
            } else if (orden === 'Desc' && lista[j] < lista[j + 1]) {
                debeCambiar = true;
            }

            if (debeCambiar) {
                let temporal = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temporal;
            }
        }
    }
    return lista;
}

function ejecutarOrdenacion(sentido) {
    let input = document.getElementById("listaNumeros").value;
    let numeros = input.split(',').map(Number);
    let resultado = ordenarMatriz(numeros, sentido);
    document.getElementById("resultadoOrden").innerText = "Resultado: " + resultado.join(", ");
}