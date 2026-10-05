document.getElementById("imprimirNumeros").onclick = function(){
    const lista = document.getElementById("lista");

    const cantidadLi = lista.querySelectorAll("li").length;
    if(cantidadLi < 10){
        for (let i = 1; i<=10; i++){
            const item = document.createElement("li");
            item.className = "list-group-item";
            item.textContent = i;
            lista.appendChild(item);
        }
    }    
}

document.getElementById("imprimirNumerosPares").onclick = function(){
    const listaPares = document.getElementById("lista-pares");

    const cantidadLiPares = listaPares.querySelectorAll("li").length;
    if(cantidadLiPares < 10){
        let i =1;
        while(i<=20){ 
            if(i % 2 === 0){
                const item = document.createElement("li");
                item.className = "list-group-item";
                item.textContent = i;
                listaPares.appendChild(item);
            }
            i++;
        }
    }
}