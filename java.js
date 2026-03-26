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


function crearMarco(texto) {
    // 1. Convertimos el texto en una lista de palabras
    let palabras = texto.split(" ");
    
    // 2. Buscamos cuántas letras tiene la palabra más larga
    let maxLongitud = 0;
    for (let p of palabras) {
        if (p.length > maxLongitud) {
            maxLongitud = p.length;
        }
    }

    // 3. Creamos la línea de asteriscos (arriba y abajo)
    // Sumamos 4 para dejar espacio a los asteriscos laterales y espacios
    let lineaBorde = "*".repeat(maxLongitud + 4);
    let resultado = lineaBorde + "\n";

    // 4. Creamos cada fila con su palabra
    for (let p of palabras) {
        // Añadimos espacios al final para que todas midan lo mismo
        let espacios = " ".repeat(maxLongitud - p.length);
        resultado += "* " + p + espacios + " *\n";
    }

    // 5. Cerramos con el borde inferior
    resultado += lineaBorde;
    return resultado;
}

// Función para conectar con el botón HTML
function ejecutarMarco() {
    let frase = document.getElementById("textoMarco").value;
    document.getElementById("resultadoMarco").innerText = crearMarco(frase);
}

function buscarSegundoMasGrande(lista) {
    let max = -Infinity; // Empezamos con el número más bajo posible
    let segundoMax = -Infinity;

    for (let num of lista) {
        // Si el número actual es mayor que el más grande...
        if (num > max) {
            segundoMax = max; // El que era el más grande pasa a ser el segundo
            max = num;        // El actual se convierte en el nuevo más grande
        } 
        // Si no es el más grande, pero es mayor que el segundo...
        else if (num > segundoMax && num < max) {
            segundoMax = num;
        }
    }
    return segundoMax;
}

// Función para conectar con el botón HTML
function ejecutarSegundoGrande() {
    let input = document.getElementById("listaParaSegundo").value;
    let numeros = input.split(",").map(Number);
    let resultado = buscarSegundoMasGrande(numeros);
    
    document.getElementById("resultadoSegundo").innerText = "El segundo más grande es: " + resultado;
}