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

// Segundo maior
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

// pokémon
function calcularDano(tipoAtacante, tipoDefensor, ataque, defensa) {
    let efectividad = 1;

    // Lógica de efectividades
    if (tipoAtacante === tipoDefensor) {
        efectividad = 0.5; // Mismo tipo suele ser poco efectivo
    } else if (tipoAtacante === "Fuego") {
        if (tipoDefensor === "Planta") efectividad = 2;
        if (tipoDefensor === "Agua") efectividad = 0.5;
    } else if (tipoAtacante === "Agua") {
        if (tipoDefensor === "Fuego") efectividad = 2;
        if (tipoDefensor === "Planta" || tipoDefensor === "Eléctrico") efectividad = 0.5;
    } else if (tipoAtacante === "Planta") {
        if (tipoDefensor === "Agua") efectividad = 2;
        if (tipoDefensor === "Fuego") efectividad = 0.5;
    } else if (tipoAtacante === "Eléctrico") {
        if (tipoDefensor === "Agua") efectividad = 2;
        if (tipoDefensor === "Planta") efectividad = 0.5;
    }

    // Fórmula: daño = 50 * (ataque / defensa) * efectividad
    let dano = 50 * (ataque / defensa) * efectividad;
    return Math.round(dano);
}

function ejecutarBatalla() {
    // 1. Obtener valores
    let atacante = document.getElementById("tipoAtacante").value;
    let defensor = document.getElementById("tipoDefensor").value;
    let atk = parseFloat(document.getElementById("puntosAtaque").value);
    let def = parseFloat(document.getElementById("puntosDefensa").value);

    // 2. Validar que los números estén entre 1 y 100
    if (atk < 1 || atk > 100 || def < 1 || def > 100) {
        document.getElementById("resultadoPokemon").innerText = "Error: Ataque y Defensa deben estar entre 1 y 100.";
        return;
    }

    // 3. Calcular y mostrar
    let resultado = calcularDano(atacante, defensor, atk, def);
    document.getElementById("resultadoPokemon").innerText = 
        `Un ataque de tipo ${atacante} contra ${defensor} causa ${resultado} puntos de daño.`;
}

// colocar maiúscila #17
function capitalizarFrase(texto) {
    if (!texto) return ""; // Validación por si el texto está vacío

    let resultado = "";
    let nuevaPalabra = true; // Flag para saber si la siguiente letra debe ser mayúscula

    for (let i = 0; i < texto.length; i++) {
        let caracterActual = texto[i];

        if (caracterActual === " ") {
            resultado += " ";
            nuevaPalabra = true; // El siguiente carácter será el inicio de una palabra
        } else {
            if (nuevaPalabra) {
                // Convertimos a mayúscula manualmente la primera letra
                resultado += caracterActual.toUpperCase();
                nuevaPalabra = false;
            } else {
                // El resto de la palabra se queda en minúscula (opcional, según tu lógica)
                resultado += caracterActual.toLowerCase();
            }
        }
    }
    return resultado;
}

// encontrar mais vogais
function ejecutarCapitalizar() {
    let input = document.getElementById("textoOriginal").value;
    let resultado = capitalizarFrase(input);
    document.getElementById("resultadoCapitalizado").innerText = "Resultado: " + resultado;
}

function encontrarVocalMasRepetida(texto) {
    // 1. Definimos las vocales y un contador
    const vocales = "aeiou";
    let contadores = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };
    let hayVocales = false;

    // 2. Normalizamos el texto (minúsculas) y recorremos
    let textoLimpio = texto.toLowerCase();

    for (let letra of textoLimpio) {
        // Manejo de casos especiales (tildes)
        if (letra === 'a') { contadores['a']++; hayVocales = true; }
        else if (letra === 'e') { contadores['e']++; hayVocales = true; }
        else if (letra === 'i') { contadores['i']++; hayVocales = true; }
        else if (letra === 'o') { contadores['o']++; hayVocales = true; }
        else if (letra === 'u') { contadores['u']++; hayVocales = true; }
    }

    if (!hayVocales) return "";

    // 3. Buscamos cuál tiene el número más alto
    let maxRepeticiones = 0;
    let vocalGanadora = "";

    for (let v in contadores) {
        if (contadores[v] > maxRepeticiones) {
            maxRepeticiones = contadores[v];
            vocalGanadora = v;
        }
    }

    return vocalGanadora;
}

// Conexión con la interfaz
function ejecutarVocal() {
    let frase = document.getElementById("textoVocales").value;
    let vocal = encontrarVocalMasRepetida(frase);
    
    if (vocal === "") {
        document.getElementById("resultadoVocal").innerText = "Não tem vogal";
    } else {
        document.getElementById("resultadoVocal").innerText = "A vogal mais repetida é: " + vocal.toUpperCase();
    }
}