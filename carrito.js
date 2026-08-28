const busqueda = localStorage.getItem('busqueda');
const buscado = document.querySelector('.buscado');
const resultados = document.querySelector('.resultados');
let cargado = localStorage.getItem('comprado');
cargado = cargado.replace(/ ,/g,'');
let lista = [];
if(cargado){
    lista = cargado.split(',');
}

buscado.textContent = 'Resultados para la busqueda: ' + busqueda;

for(let i=0; i<lista.length; i++){
    let posi = i;
    let precioprod = 0;
    
    let producto = document.createElement('div');
    let prodimg = document.createElement('div');
    let img = document.createElement('img');
    let texto = document.createElement('div');
    let title = document.createElement('p');
    let desc = document.createElement('p');
        
    producto.classList.add('producto');
    prodimg.classList.add('prodimg');
    texto.classList.add('texto');

    /* productos */
    switch(lista[i]){
        case '0':
            img.src = 'fotos/productos/coca3l.jpg';
            title.textContent = 'Coca cola - 3L';
            precioprod = 3000;
            desc.textContent = ' precio: ' + precioprod;
            creado = true;
            break;
        
        case '1':
            img.src = 'fotos/productos/coca500ml.jpg';
            title.textContent = 'Coca cola - 500ml';
            precioprod = 800;
            desc.textContent = ' precio: ' + precioprod;
            creado = true;
            break;

        case '2':
            img.src = 'fotos/productos/pepsi500ml.webp';
            title.textContent = 'Pepsi - 500ml';
            precioprod = 800;
            desc.textContent = ' precio: ' + precioprod;
            creado = true;
            break;

        case '3':
            img.src = 'fotos/productos/pepsi3l.jpg';
            title.textContent = 'Pepsi - 3L';
            precioprod = 3000;
            desc.textContent = ' precio: ' + precioprod;
            creado = true;
            break;

        case '4':
            img.src = 'fotos/productos/coca500ml.jpg';
            title.textContent = 'Coca cola - 500ml';
            precioprod = 1500;
            desc.textContent = ' precio: ' + precioprod;
            creado = true;
            break;

        case '5':
            img.src = 'fotos/productos/coca1l.webp';
            title.textContent = 'Coca cola - 1L';
            precioprod = 1500;
            desc.textContent = ' precio: ' + precioprod;
            creado = true;
            break;

        case '6':
            img.src = 'fotos/productos/coca3l.jpg';
            title.textContent = 'Coca cola - 3L';
            precioprod = 800;
            desc.textContent = ' precio: ' + precioprod;
            creado = true;
            break;

        case '7':
            img.src = 'fotos/productos/cocalata.jpg';
            title.textContent = 'Coca cola - Lata';
            precioprod = 800;
            desc.textContent = ' precio: ' + precioprod;
            creado = true;
            break;

        case '8':
            img.src = 'fotos/productos/pepsi500ml.webp';
            title.textContent = 'Pepsi - 500ml';
            precioprod = 800;
            desc.textContent = ' precio: ' + precioprod;
            creado = true;
            break;

        case '9':
            img.src = 'fotos/productos/pepsi1l.jpg';
            title.textContent = 'Pepsi - 1L';
            precioprod = 800;
            desc.textContent = ' precio: ' + precioprod;
            creado = true;
            break;

        case '10':
            img.src = 'fotos/productos/pepsi3l.jpg';
            title.textContent = 'Pepsi - 3L';
            precioprod = 800;
            desc.textContent = ' precio: ' + precioprod;
            creado = true;
            break;

        case '11':
            img.src = 'fotos/productos/pepsilata.jpg';
            title.textContent = 'Pepsi - Lata';
            precioprod = 800;
            desc.textContent = ' precio: ' + precioprod;
            creado = true;
            break;
    }

    /* */
    if(creado == true){
        price.textContent = 'precio: $' + precioprod;
        
        botonEliminar.addEventListener('click', () => {
            console.log(posi);
            producto.remove();
            precio.remove();
            lista[posi] = ' ';
            posi = i;
            console.log(posi);
            
            localStorage.setItem('comprado', lista);
            console.log('borrado: ' + i + '     ' + lista);
            total -= precioprod;
            
            compras -= 1;
            console.log(compras);
            carritoCompras.textContent = compras;
            areaTotal.textContent = 'Total: ' + total;
        });

        
        resultados.appendChild(producto);
        producto.appendChild(prodimg);
        prodimg.appendChild(img);
        producto.appendChild(texto);
        texto.appendChild(title);
        texto.appendChild(desc);
        producto.appendChild(botones);
        botones.appendChild(botonEliminar);

        total += precioprod;
        areaTotal.textContent = 'Total: ' + total;
    }

    creado = false;
}