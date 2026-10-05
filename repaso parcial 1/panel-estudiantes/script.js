// =============================================================================
// REQUISITO 1: DATOS INICIALES Y PRESENTACIÓN
// =============================================================================
// Imagina que las variables son como cajitas donde guardamos información con una etiqueta:
// Aquí creamos una cajita llamada 'nombreProfesor' y le guardamos el texto "Carlos".
let nombreProfesor = "Carlos";
// Aquí creamos una cajita llamada 'edadProfesor' y le guardamos el número 21.
let edadProfesor = 21;
// Aquí creamos una cajita llamada 'ciudadProfesor' y le guardamos el texto "Luque".
let ciudadProfesor = "Luque";

// 'estudiantes' es una lista gigante (un Array o arreglo) donde iremos guardando
// la ficha (el objeto) de cada alumno que registremos.
let estudiantes = [];


// =============================================================================
// REQUISITO 20: RELOJ EN TIEMPO REAL (setInterval y Date)
// =============================================================================
// 'setInterval' es como un despertador que suena todo el tiempo cada ciertos milisegundos.
// 1000 milisegundos es exactamente 1 segundo.
// Entonces, cada 1 segundo le preguntamos a la computadora la hora actual y la mostramos.
setInterval(function () {
    // 'new Date()' le pide a la computadora la fecha y la hora exacta de este mismo instante.
    let ahora = new Date();
    
    // '.toLocaleTimeString()' convierte esa hora en un formato lindo para humanos: "14:35:08"
    // Buscamos el elemento con id="reloj" en el HTML y le cambiamos su texto.
    document.getElementById("reloj").innerText = ahora.toLocaleTimeString();
}, 1000);


// =============================================================================
// REQUISITO 19: EVENTO MOUSEOVER EN LA IMAGEN
// =============================================================================
// 'DOMContentLoaded' le dice a JavaScript: "espera a que todos los dibujos y botones
// del HTML existan antes de intentar tocarlos".
document.addEventListener("DOMContentLoaded", function () {
    // Buscamos la foto de los estudiantes por su id
    let imagen = document.getElementById("imagenEstudiante");

    // 'onmouseover' significa: "cuando el puntero del mouse pase por encima de la foto..."
    imagen.onmouseover = function () {
        // ...escribimos este mensajito en la consola secreta del navegador (F12)
        console.log("Estás sobre la imagen");
    };
});


// =============================================================================
// REQUISITO 7: FUNCIÓN PARA CALCULAR DÍAS VIVIDOS
// =============================================================================
// Una función es como una pequeña fábrica o máquina: tú le das un dato de entrada (edad),
// ella hace una cuenta matemática y te devuelve el resultado con 'return'.
function calcularDiasVividos(edad) {
    // Como cada año tiene 365 días, multiplicamos la edad por 365
    return edad * 365;
}


// =============================================================================
// REQUISITO 4: FUNCIÓN PARA SABER SI EL ESTUDIANTE APROBÓ
// =============================================================================
// Esta función recibe la ficha completa de un estudiante.
function esAprobado(estudiante) {
    // Si su nota es 60 o más, devolvemos 'true' (Verdadero = Aprobó)
    if (estudiante.calificacion >= 60) {
        return true;
    } else {
        // Si tiene menos de 60, devolvemos 'false' (Falso = Reprobó)
        return false;
    }
}


// =============================================================================
// REQUISITO 21: FUNCIÓN PARA CALCULAR EL PRÓXIMO CUMPLEAÑOS
// =============================================================================
// Esta función averigua cuántos días faltan para que el estudiante festeje su cumple.
function calcularDiasCumpleanos(fechaNacimientoStr) {
    // Si el usuario no eligió ninguna fecha, devolvemos "Sin fecha"
    if (!fechaNacimientoStr) return "Sin fecha";

    let hoy = new Date(); // El día de hoy
    let fechaNac = new Date(fechaNacimientoStr); // El día que nació el alumno

    // Creamos la fecha del cumpleaños pero con el AÑO ACTUAL (para saber cuándo cae este año)
    let proxCumple = new Date(hoy.getFullYear(), fechaNac.getMonth(), fechaNac.getDate());

    // Si la fecha de su cumple de este año ya quedó en el pasado, calculamos para el año que viene (+1)
    if (proxCumple < hoy) {
        proxCumple.setFullYear(hoy.getFullYear() + 1);
    }

    // Restamos las dos fechas. La computadora nos da la diferencia en milisegundos.
    let diferenciaMs = proxCumple - hoy;

    // Convertimos milisegundos a días enteros dividiendo por (1000 * 60 * 60 * 24)
    // 'Math.ceil' redondea hacia arriba para no perder días
    let diasFaltantes = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

    return `Faltan ${diasFaltantes} días`;
}


// =============================================================================
// REQUISITO 2: FUNCIÓN REGISTRAR ESTUDIANTE (CON VALIDACIONES - REQ 3)
// =============================================================================
// Esta función se ejecuta cuando el usuario toca el botón verde "Registrar estudiante".
function registrarEstudiante() {
    // 1. LEER LOS DATOS DEL FORMULARIO:
    // .trim() le quita los espacios en blanco que el usuario pueda escribir sin querer al inicio o al final
    let nombre = document.getElementById("nombre").value.trim();
    // parseInt convierte texto a número entero (ej: "21" -> 21)
    let edad = parseInt(document.getElementById("edad").value);
    let ciudad = document.getElementById("ciudad").value.trim();
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    // parseFloat convierte texto a número con decimales (ej: "85.5" -> 85.5)
    let calificacion = parseFloat(document.getElementById("calificacion").value);

    // Buscamos la cajita roja de error del HTML
    let cajaAlerta = document.getElementById("mensajeFormulario");

    // =========================================================================
    // REQUISITO 3: VALIDACIONES (Verificamos que todo esté bien escrito)
    // =========================================================================
    // isNaN significa "¿NO es un número?"
    // Comprobamos:
    // - Que el nombre no esté vacío (nombre === "")
    // - Que la edad sea un número válido y mayor a 0 (edad <= 0)
    // - Que la nota sea un número válido y esté entre 0 y 100
    if (nombre === "" || isNaN(edad) || edad <= 0 || isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        // Le sacamos la clase 'd-none' para que la alerta roja se haga visible en pantalla
        cajaAlerta.className = "alert alert-danger mb-3";
        cajaAlerta.innerText = "Error: Verifica que el nombre no esté vacío, la edad sea mayor a 0 y la nota esté entre 0 y 100.";
        // 'return' frena todo y no deja continuar, así NO guardamos datos rotos en la lista
        return;
    }

    // Si todo estaba perfecto, volvemos a esconder la alerta roja agregándole 'd-none'
    cajaAlerta.className = "alert alert-danger d-none mb-3";

    // Creamos un "Objeto" estudiante: es como armar la ficha personal del alumno
    let nuevoEstudiante = {
        nombre: nombre,
        edad: edad,
        ciudad: ciudad,
        fechaNacimiento: fechaNacimiento,
        calificacion: calificacion
    };

    // '.push()' mete el nuevo estudiante adentro de nuestra lista gigante 'estudiantes'
    estudiantes.push(nuevoEstudiante);

    // Llamamos a la función que dibuja las filas de la tabla en pantalla
    renderizarTabla();

    // Limpiamos los campos del formulario para que quede listo para el siguiente alumno
    limpiarFormulario();
}


// =============================================================================
// REQUISITO 5: FUNCIÓN RENDERIZAR TABLA (DIBUJAR LA TABLA EN EL HTML)
// =============================================================================
function renderizarTabla() {
    // Buscamos el cuerpo de la tabla (tbody) en el HTML
    let tabla = document.getElementById("tablaEstudiantes");

    // Borramos todo lo viejo que tenía la tabla adentro para redibujarla desde cero
    tabla.innerHTML = "";

    // Usamos un bucle 'for' para recorrer la lista de estudiantes uno por uno
    for (let i = 0; i < estudiantes.length; i++) {
        let est = estudiantes[i]; // El estudiante actual de este turno

        // Usamos nuestras funciones auxiliares para calcular sus días y cumpleaños
        let dias = calcularDiasVividos(est.edad);
        let cumple = calcularDiasCumpleanos(est.fechaNacimiento);
        let aprobado = esAprobado(est);

        // REQUISITO 4: Si aprobó le ponemos etiqueta verde, si reprobó le ponemos etiqueta roja
        let estadoBadge = "";
        if (aprobado) {
            estadoBadge = '<span class="badge bg-success">APROBADO</span>';
        } else {
            estadoBadge = '<span class="badge bg-danger">REPROBADO</span>';
        }

        // 'document.createElement("tr")' crea una nueva fila de tabla en memoria
        let fila = document.createElement("tr");

        // Rellenamos las columnas <td> de esa fila con los datos del alumno
        fila.innerHTML = `
            <td>${est.nombre}</td>
            <td>${est.edad}</td>
            <td>${dias} días</td>
            <td>${est.ciudad}</td>
            <td>${est.fechaNacimiento || "N/A"}</td>
            <td>${cumple}</td>
            <td><strong>${est.calificacion}</strong></td>
            <td>${estadoBadge}</td>
        `;

        // '.appendChild(fila)' enchufa la nueva fila adentro del cuerpo de la tabla en la pantalla
        tabla.appendChild(fila);
    }

    // REQUISITO 6: 'estudiantes.length' cuenta cuántos alumnos hay y lo escribe en pantalla
    document.getElementById("totalEstudiantes").innerText = estudiantes.length;
}


// =============================================================================
// REQUISITO 22: BOTÓN LIMPIAR FORMULARIO
// =============================================================================
// Esta función borra el texto de todos los inputs dejándolos vacíos ("")
function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("fechaNacimiento").value = "";
    document.getElementById("calificacion").value = "";
}


// =============================================================================
// REQUISITO 17: BUSCAR EL MEJOR ESTUDIANTE
// =============================================================================
// Esta función busca quién tiene la nota más alta de todos.
function mostrarMejorEstudiante() {
    let contenedor = document.getElementById("resultadoMejorEstudiante");

    // Si todavía no hay nadie registrado en la lista, avisamos
    if (estudiantes.length === 0) {
        contenedor.className = "alert alert-warning mt-3";
        contenedor.innerText = "No hay estudiantes registrados todavía.";
        return;
    }

    // Suponemos que el primero de la lista (índice 0) es el mejor por ahora
    let mejor = estudiantes[0];

    // Recorremos a todos los demás alumnos desde el índice 1 en adelante
    for (let i = 1; i < estudiantes.length; i++) {
        // Si encontramos a alguien que tenga una nota mayor a 'mejor', él pasa a ser el nuevo mejor
        if (estudiantes[i].calificacion > mejor.calificacion) {
            mejor = estudiantes[i];
        }
    }

    // Mostramos el cartel celeste con el nombre y la nota del mejor alumno
    contenedor.className = "alert alert-info mt-3";
    contenedor.innerText = `El mejor estudiante es ${mejor.nombre} con ${mejor.calificacion} puntos.`;
}


// =============================================================================
// REQUISITO 12: FUNCIÓN SUMA
// =============================================================================
// Una función pura que recibe dos números (a y b) y devuelve su suma
function suma(a, b) {
    return a + b;
}

// Función que lee los dos inputs del HTML y llama a suma(a, b)
function ejecutarSuma() {
    let a = parseFloat(document.getElementById("sumaNum1").value);
    let b = parseFloat(document.getElementById("sumaNum2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("resultadoSuma").innerText = "Ingresa dos números válidos.";
        return;
    }

    let res = suma(a, b);
    document.getElementById("resultadoSuma").innerText = `Resultado: ${res}`;
}


// =============================================================================
// REQUISITO 8: COMPARAR DOS NÚMEROS (MAYOR, MENOR O IGUALES)
// =============================================================================
function compararNumeros() {
    let n1 = parseFloat(document.getElementById("compNum1").value);
    let n2 = parseFloat(document.getElementById("compNum2").value);
    let res = document.getElementById("resultadoComparar");

    if (isNaN(n1) || isNaN(n2)) {
        res.innerText = "Ingresa ambos números.";
        return;
    }

    // Usamos condicionales para saber cuál es más grande
    if (n1 > n2) {
        res.innerText = `${n1} es mayor que ${n2}`;
    } else if (n2 > n1) {
        res.innerText = `${n2} es mayor que ${n1}`;
    } else {
        res.innerText = `Ambos números son iguales (${n1})`;
    }
}


// =============================================================================
// REQUISITO 9: PAR O IMPAR (OPERADOR MÓDULO %)
// =============================================================================
// El operador '%' calcula el resto de una división.
// Si divides un número entre 2 y el resto es 0 (n % 2 === 0), significa que es PAR.
// Si sobra 1, significa que es IMPAR.
function verificarParImpar() {
    let n = parseInt(document.getElementById("numParImpar").value);
    let res = document.getElementById("resultadoParImpar");

    if (isNaN(n)) {
        res.innerText = "Ingresa un número entero.";
        return;
    }

    if (n % 2 === 0) {
        res.innerText = `El número ${n} es PAR`;
    } else {
        res.innerText = `El número ${n} es IMPAR`;
    }
}


// =============================================================================
// REQUISITO 18: CAMBIAR FONDO ALEATORIO
// =============================================================================
// Esta función elige un color al azar de una lista y se lo pinta al fondo de la página.
function cambiarFondo() {
    let colores = ["#f8f9fa", "#e0f2fe", "#fef3c7", "#dcfce7", "#f3e8ff", "#fee2e2"];
    // Math.random() * colores.length elige una posición al azar entre 0 y la cantidad de colores
    let colorRandom = colores[Math.floor(Math.random() * colores.length)];
    // Cambiamos el color de fondo del body
    document.body.style.backgroundColor = colorRandom;
}


// =============================================================================
// INICIALIZACIÓN AUTOMÁTICA AL CARGAR LA PÁGINA (window.onload)
// =============================================================================
// Todo lo que esté adentro de 'window.onload' se ejecuta automáticamente apenas abres la página.
window.onload = function () {

    // 1. Mostrar la frase de presentación con las variables iniciales
    document.getElementById("presentacionInicial").innerText =
        `Hola, mi nombre es ${nombreProfesor}, tengo ${edadProfesor} años y vivo en ${ciudadProfesor}.`;

    // -------------------------------------------------------------------------
    // REQUISITO 10: BUCLE FOR (Contar del 1 al 10)
    // -------------------------------------------------------------------------
    // El bucle 'for' empieza con i=1, se repite mientras i sea menor o igual a 10, y en cada vuelta suma 1 (i++).
    let textoFor = "";
    for (let i = 1; i <= 10; i++) {
        textoFor += i + " "; // Vamos pegando cada número con un espacio
    }
    document.getElementById("resultadoFor").innerText = textoFor;

    // -------------------------------------------------------------------------
    // REQUISITO 11: BUCLE WHILE (Números pares del 1 al 20)
    // -------------------------------------------------------------------------
    // El bucle 'while' se ejecuta mientras la condición (j <= 20) sea verdadera.
    let textoWhile = "";
    let j = 1;
    while (j <= 20) {
        if (j % 2 === 0) { // Solo si es par lo guardamos
            textoWhile += j + " ";
        }
        j++; // IMPORTANTE: sumamos 1 en cada vuelta para no quedar atrapados en un bucle infinito
    }
    document.getElementById("resultadoWhile").innerText = textoWhile;

    // -------------------------------------------------------------------------
    // REQUISITO 13: ARRAY DE FRUTAS (PRIMERA Y ÚLTIMA FRUTA)
    // -------------------------------------------------------------------------
    let frutas = ["Manzana", "Banana", "Naranja", "Frutilla", "Mango"];
    // En programación, el primer elemento siempre está en la posición 0:
    let primeraFruta = frutas[0]; // "Manzana"
    // El último elemento se calcula con: frutas.length - 1:
    let ultimaFruta = frutas[frutas.length - 1]; // "Mango"
    document.getElementById("resultadoFrutas").innerText =
        `Primera: ${primeraFruta} | Última: ${ultimaFruta} (Total: ${frutas.length} frutas)`;

    // -------------------------------------------------------------------------
    // REQUISITO 14: SUMA DE UN ARRAY CON UN BUCLE
    // -------------------------------------------------------------------------
    let numerosArray = [5, 10, 15, 20];
    let sumaTotal = 0; // Empezamos en cero
    for (let k = 0; k < numerosArray.length; k++) {
        // En cada vuelta sumamos el número actual a nuestra alcancía 'sumaTotal'
        sumaTotal += numerosArray[k];
    }
    document.getElementById("resultadoSumaArray").innerText = `Suma total: ${sumaTotal}`;

    // -------------------------------------------------------------------------
    // REQUISITO 15: MÉTODO MAP (TRANSFORMAR ELEMENTOS)
    // -------------------------------------------------------------------------
    // '.map()' toma una lista de números y le aplica una regla a CADA UNO, devolviendo una NUEVA lista.
    // Aquí la regla es: "multiplica el número por sí mismo (num * num)"
    let numsBase = [2, 4, 6, 8, 10, 12, 15];
    let cuadrados = numsBase.map(function (num) {
        return num * num;
    });
    // JSON.stringify convierte la lista en texto para que se pueda leer fácil: [4, 16, 36, 64...]
    document.getElementById("resultadoMap").innerText = JSON.stringify(cuadrados);

    // -------------------------------------------------------------------------
    // REQUISITO 16: MÉTODO FILTER (FILTRAR ELEMENTOS)
    // -------------------------------------------------------------------------
    // '.filter()' es como un colador: solo deja pasar a los números que cumplan la condición (num > 10).
    let mayoresA10 = numsBase.filter(function (num) {
        return num > 10;
    });
    document.getElementById("resultadoFilter").innerText = JSON.stringify(mayoresA10);

    // -------------------------------------------------------------------------
    // AGREGAMOS UN ESTUDIANTE DE PRUEBA INICIAL PARA QUE LA TABLA NO ESTÉ VACÍA
    // -------------------------------------------------------------------------
    estudiantes.push({
        nombre: "Carlos",
        edad: 21,
        ciudad: "Luque",
        fechaNacimiento: "2005-03-10",
        calificacion: 75
    });

    // Dibujamos la tabla inicial con el estudiante de prueba
    renderizarTabla();
};
