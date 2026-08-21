const carritoContenido = localStorage.getItem('comprado');
const detalles = document.querySelector('.precios');
const areaTotal = document.querySelector('.total');
const list = document.querySelector('.lista');

let lista = [];
let total = 0;
lista = carritoContenido.split(',');
console.log(lista)
for(let i=0;i<lista.length;i++){
    switch(lista[i]){
        case '0':
            let precio = document.createElement('p');

            precio.textContent= 'Coca cola 3L - $3000';

            let producto = document.createElement('div');
            producto.classList.add('producto');
            let img = document.createElement('div');
            img.classList.add('img0');
            let desc = document.createElement('div');
            desc.classList.add('desc');
            let title = document.createElement('p');
            title.textContent= 'Coca cola - 3L';
            let price = document.createElement('p');
            price.textContent = 'precio: $3000';
            let cantidad = document.createElement('p');
            cantidad.textContent='cantidad: 1' ;
            let botones = document.createElement('div');
            botones.classList.add('botones');
            let botonSumar = document.createElement('div');
            botonSumar.classList.add('sumar');
            let botonRestar = document.createElement('div');
            botonRestar.classList.add('restar');

            detalles.appendChild(precio);
            list.appendChild(producto);
            producto.appendChild(img);
            producto.appendChild(desc);
            desc.appendChild(title);
            desc.appendChild(cantidad);
            desc.appendChild(price);
      
            



            total += 3000;
        break;
        /*
        case '1':
            let precio = document.createElement('p');

            precio.textContent= 'Coca cola 500ml - $800';

            let producto = document.createElement('div');
            producto.classList.add('producto');
            let img = document.createElement('div');
            img.classList.add('img1');
            let desc = document.createElement('div');
            desc.classList.add('desc');
            let title = document.createElement('p');
            title.textContent= 'Coca cola - 500ml';
            let price = document.createElement('p');
            price.textContent = 'precio: $800';
            let cantidad = document.createElement('p');
            cantidad.textContent='cantidad: 1' ;
            let botones = document.createElement('div');
            botones.classList.add('botones');
            let botonSumar = document.createElement('div');
            botonSumar.classList.add('sumar');
            let botonRestar = document.createElement('div');
            botonRestar.classList.add('restar');

            detalles.appendChild(precio);
            list.appendChild(producto);
            producto.appendChild(img);
            producto.appendChild(desc);
            desc.appendChild(title);
            desc.appendChild(cantidad);
            desc.appendChild(price);

            



            total += 3000;
        break;
        case '0':
            let precio = document.createElement('p');

            precio.textContent= 'Pepsi 500ml - $3000';

            let producto = document.createElement('div');
            producto.classList.add('producto');
            let img = document.createElement('div');
            img.classList.add('img');
            let desc = document.createElement('div');
            desc.classList.add('desc');
            let title = document.createElement('p');
            title.textContent= 'Coca cola - 3L';
            let price = document.createElement('p');
            price.textContent = 'precio: $3000';
            let cantidad = document.createElement('p');
            cantidad.textContent='cantidad: ' ;
            let botones = document.createElement('div');
            botones.classList.add('botones');
            let botonSumar = document.createElement('div');
            botonSumar.classList.add('sumar');
            let botonRestar = document.createElement('div');
            botonRestar.classList.add('restar');

            detalles.appendChild(precio);
            list.appendChild(producto);
            producto.appendChild(img);
            producto.appendChild(desc);
            desc.appendChild(title);
            desc.appendChild(cantidad);
            desc.appendChild(price);
 
            



            total += 3000;
        break;
        case '0':
            let precio = document.createElement('p');

            precio.textContent= 'Coca cola 3L - $3000';

            let producto = document.createElement('div');
            producto.classList.add('producto');
            let img = document.createElement('div');
            img.classList.add('img');
            let desc = document.createElement('div');
            desc.classList.add('desc');
            let title = document.createElement('p');
            title.textContent= 'Coca cola - 3L';
            let price = document.createElement('p');
            price.textContent = 'precio: $3000';
            let cantidad = document.createElement('p');
            cantidad.textContent='cantidad: ' ;
            let botones = document.createElement('div');
            botones.classList.add('botones');
            let botonSumar = document.createElement('div');
            botonSumar.classList.add('sumar');
            let botonRestar = document.createElement('div');
            botonRestar.classList.add('restar');

            detalles.appendChild(precio);
            list.appendChild(producto);
            producto.appendChild(img);
            producto.appendChild(desc);
            desc.appendChild(title);
            desc.appendChild(cantidad);
            desc.appendChild(price);

            



            total += 3000;
        break;
        */
    }
    console.log(i);
    areaTotal.textContent = 'Total: ' + total;
}
