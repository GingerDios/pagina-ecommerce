const carrito = document.querySelector('#carrito');
const comprar = document.querySelectorAll('#comprar');
const carritoCompras = document.querySelector('#compras');
let cargado = localStorage.getItem('comprado');
cargado = cargado.replace(/ ,/g,'');
let lista = [];
if(cargado){
lista = cargado.split(',');
}
if(lista[0]!=' '){
let compras=lista.length;
carritoCompras.textContent=compras;
}


let carritoContenido=[];
carritoContenido = lista;

comprar.forEach((boton,id)=>{
    console.log(boton +' ' + id);

    boton.addEventListener('click',()=>{
        console.log(lista + ' ' + lista.length);
        compras=lista.length;

        carritoCompras.textContent=compras;
        carritoContenido.push(id);
        localStorage.setItem('comprado',carritoContenido);
    })
        
    
})