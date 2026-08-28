const busquedaGuardada = localStorage.getItem('busqueda') || '';
const buscado = document.querySelector('.buscado');
const resultados = document.querySelector('.resultados');
const carritoCompras = document.querySelector('#compras');

let cargado = localStorage.getItem('comprado');
let listaCarrito = [];
if (cargado) {
    cargado = cargado.replace(/ ,/g, '');
    listaCarrito = cargado.split(',').filter(item => item !== ' ' && item !== '');
}
if (carritoCompras) {
    carritoCompras.textContent = listaCarrito.length;
}

buscado.textContent = 'Resultados para la busqueda: ' + busquedaGuardada;


const catalogo = [
    
    { id: '5', nombre: 'Coca cola - 1L', precio: 1500, img: 'productos/coca1l.webp' },
    { id: '6', nombre: 'Coca cola - 3L', precio: 800, img: 'productos/coca3l.jpg' },
    { id: '7', nombre: 'Coca cola - Lata', precio: 800, img: 'productos/cocalata.jpg' },
    { id: '8', nombre: 'Pepsi - 500ml', precio: 800, img: 'productos/pepsi500ml.webp' },
    { id: '9', nombre: 'Pepsi - 1L', precio: 800, img: 'productos/pepsi1l.jpg' },
    { id: '10', nombre: 'Pepsi - 3L', precio: 800, img: 'productos/pepsi3l.jpg' },
    { id: '11', nombre: 'Pepsi - Lata', precio: 800, img: 'productos/pepsilata.jpg' }
];



let encontrados = 0;

for (let i = 0; i < catalogo.length; i++) {
    let prod = catalogo[i];

    let nombreLimpio = prod.nombre.toLowerCase().replace(/\s+/g, '');
    let busquedaLimpia = busquedaGuardada.toLowerCase();


    if (nombreLimpio.includes(busquedaLimpia) && busquedaLimpia !== '') {
        encontrados++;

        let producto = document.createElement('div');
        producto.classList.add('producto');

        let prodimg = document.createElement('div');
        prodimg.classList.add('prodimg');

        let img = document.createElement('img');
        img.src = prod.img;
        prodimg.appendChild(img);

        let texto = document.createElement('div');
        texto.classList.add('texto');

        let title = document.createElement('h2');
        title.textContent = prod.nombre;

        let desc = document.createElement('p');
        desc.textContent = 'precio: $' + prod.precio;

        texto.appendChild(title);
        texto.appendChild(desc);

        let botonComprar = document.createElement('button');
        botonComprar.classList.add('comprar');
        botonComprar.innerHTML = '<b>Buy</b>';

       
        botonComprar.addEventListener('click', () => {
            listaCarrito.push(prod.id);
            localStorage.setItem('comprado', listaCarrito.join(','));
            if (carritoCompras) {
                carritoCompras.textContent = listaCarrito.length;
            }
        });

        producto.appendChild(prodimg);
        producto.appendChild(texto);
        producto.appendChild(botonComprar);

        resultados.appendChild(producto);
    }
}
