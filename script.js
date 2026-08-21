const carrito = document.querySelector('#carrito');
const comprar = document.querySelectorAll('#comprar');
const carritoCompras = document.querySelector('#compras');
let compras=0;
const carritoContenido=[];
comprar.forEach((boton,id)=>{
    console.log(boton +' ' + id);

    boton.addEventListener('click',()=>{
        compras+=1;

        carritoCompras.textContent=compras;
        carritoContenido.push(id);
        localStorage.setItem('comprado',carritoContenido);
    })
        
    
})