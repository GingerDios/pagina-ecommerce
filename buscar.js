const buscador = document.querySelector('.busqueda');

const boton = document.querySelector('.buscar');

let busqueda;
buscador.addEventListener('keydown',(enter)=>{
    if(enter.key === 'Enter'){
        busqueda = enter.target.value;
        console.log(busqueda);
        busqueda = busqueda.replace(/\s+/g,'');
        console.log(busqueda);
        localStorage.setItem('busqueda',busqueda);
        window.location.href= 'buscador.html';
    }

})
