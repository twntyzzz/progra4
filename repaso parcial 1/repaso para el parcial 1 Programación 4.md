# **Examen parcial Programación 4** 

## **Juego de adivinanza: “Número secreto del 1 al 100”** 

### **Objetivo** 

Desarrollar una página web interactiva que genere **automáticamente** un número secreto entre **1 y 100** , y permita al usuario **adivinarlo en hasta tres intentos** . 

El programa deberá brindar mensajes claros, cálculos de diferencia y un resultado final visualmente identificable (verde o rojo). 

Se **valorará especialmente el diseño visual usando Bootstrap** . 

### **Requisitos funcionales** 

#### 1. **Generación del número secreto** 

   - Al cargar la página se debe generar un **número aleatorio entero** entre **1 y 100** (para mayor referencia se puede utilizar _Math.floor(Math.random()_ 100) + 1 _;_ ). 

   - El número debe **mantenerse fijo** durante los tres intentos. 

2. **Ingreso y control de intentos** 

   - El usuario ingresa un número en un campo de texto y presiona el botón **“Probar”** . Tiene **máximo 3 intentos** . 

   - Luego de cada intento debe mostrarse: 

      - Si **“te pasaste”** (número mayor) o **“te faltó”** (número menor). Mostrar cuántos intentos **restan** . 

#### 3. **Resultado final** 

- Si acierta: mostrar mensaje en **verde** → “¡Acertaste! El número era X.” 

- Si no acierta tras los tres intentos: mostrar mensaje en **rojo** → “No acertaste. El número era X.” 

Deshabilitar el botón **“Probar”** después de terminar los intentos. 

4. **Validaciones de entrada** 

   - Aceptar solo números enteros entre **1 y 100** . 

   - Si el dato es inválido (vacío, texto o fuera de rango), mostrar un mensaje de error **sin consumir intento** . 

5. **Reinicio** 

Incluir botón **“Reiniciar”** que: 

Genere un nuevo número secreto. 

Restaure los 3 intentos. 

Limpie los mensajes y resultados previos. 

6. **Diseño y presentación (usando Bootstrap)** 

   - El diseño debe ser **limpio, centrado y con componentes Bootstrap** (botones, alertas, inputs, contenedores). 

   - Se **valorará el uso de colores, tipografía y alineación** para mejorar la presentación del juego. 

   - Los mensajes deben ser visualmente claros y distinguir aciertos (verde) de errores (rojo). 

### **Ejemplo referencial de diseño** 

- _(La imagen solo sirve como referencia visual. Cada alumno puede personalizar libremente el estilo y disposición de los elementos.)_ 



<!-- Start of picture text -->
╔══════════════════════════════════╗<br>║  (logo) Adivina el número secreto║<br>╠══════════════════════════════════╣<br>║ Ingresa un número (1–100): [  ] ║<br>║  [Probar]  [Reiniciar]           ║<br>╠══════════════════════════════════╣<br>║ Intentos restantes: 2 ║<br>╚══════════════════════════════════╝<br><!-- End of picture text -->

→ ¡Acertaste! El número era 73 

### **Mensajes esperados** 

|**Tipo de mensaje**|**Ejemplo**|
|---|---|
|Acierto|“¡Acertaste! El número era 73.”|
|Fallo (tras 3 intentos)|“No acertaste. El número era 73.”|
|Te pasaste|“Te pasaste.”|
|Te faltaron|“Te faltaro.”|
|Error de validación|“Ingresa un número válido entre 1 y 100.”|



### **Restricciones técnicas** 

**No usar librerías externas** distintas de Bootstrap. 

Solución **100% cliente (HTML, CSS y JS)** . 

Estructura obligatoria de archivos: 

index.html styles.css script.js 

El número secreto **no debe mostrarse** en consola o alertas. La utilización de Inteligencia Artificial descalifica el examen 

### **Entrega** 

Subir un archivo comprimido con los tres archivos mencionados. 

En el nombre del archivo incluir numero de matricula. 

## **Rúbrica de Evaluación** 

**Criterio Descripción Excelente Bueno (8–7) Regular Deficiente del logro (10–9) (6–5) (<5) esperado 1.** Genera un Número Correcto Rango No genera o **Generación** número correcto, fijo y pero se incorrecto muestra el **del número** aleatorio (1– aleatorio. regenera. o tipo número. **secreto** 100) fijo inválido. durante los intentos. **2. Lógica de** Evalúa Mensajes Mensajes Mensajes Sin lógica **comparación** correctamente exactos. exactos. ambiguos correcta. **y diferencia** si te pasaste o erróneos. o faltó. **3. Control de** Permite 3 Control Funciona Permite Sin control **intentos** intentos perfecto, pero no más de 3 de intentos. válidos y contador muestra o no muestra visible, contador. bloquea. cuántos bloqueo restan. correcto. 

|**Criterio**|**Descripción**<br>**del logro**<br>**esperado**|**Excelente**<br>**(10–9)**|**Bueno (8–7)**|**Regular**<br>**(6–5)**|**Deficiente**<br>**(<5)**|
|---|---|---|---|---|---|
|**4.**<br>**Validaciones**<br>**de entrada**|Acepta solo<br>enteros entre<br>1–100 sin<br>consumir<br>intento al<br>fallar.|Valida<br>correctamente<br>y muestra<br>mensajes<br>claros.|Valida<br>parcialmente.|Mensajes<br>confusos o<br>sin control<br>de intento.|Sin<br>validación.|
|**5.**<br>**Mensajería**<br>**final y**<br>**colores**|Mensajes<br>claros de<br>acierto/fallo<br>con colores<br>Bootstrap.|Verde/rojo<br>aplicados<br>correctamente.|Correcto<br>pero sin color.|Colores<br>incorrectos<br>o poco<br>legibles.|Sin<br>mensajes<br>finales.|
|**6. Uso de**<br>**Bootstrap y**<br>**diseño visual**|Implementa<br>componentes<br>Bootstrap y<br>buen diseño<br>visual.|Diseño<br>atractivo y<br>claro, usa<br>contenedores<br>y alertas<br>Bootstrap.|Usa<br>Bootstrap<br>parcialmente,<br>diseño<br>funcional.|Diseño<br>básico o<br>sin<br>coherencia<br>visual.|No usa<br>Bootstrap o<br>se ve<br>desordenad|
|**7.**<br>**Separación y**<br>**orden del**<br>**código**|Archivos<br>separados,<br>código limpio<br>y comentado.|Limpio,<br>documentado<br>y ordenado.|Separado<br>pero sin<br>comentarios.|Mezcla<br>parcial o<br>desorden.|Todo junto o<br>sin<br>estructura.|



### **Duración del examen** 

90 Minutos 

### **Puntos adicionales (máx. + 10 pts.)** 

|**Criterio Extra**|**Puntaje**|
|---|---|
|Muestra historial de intentos|+5 pts|
|Agrega indicador visual de intentos (barras, íconos, etc.)|+5 pts|
|Agrega una imagen responsiva alegórica al juego utilizando Boostrap|+5 pts|



