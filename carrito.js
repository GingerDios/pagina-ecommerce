let carritoContenido = localStorage.getItem('comprado');


carritoContenido = carritoContenido.replace(/ ,/g,'');
console.log(carritoContenido);
const detalles = document.querySelector('.precios');
const areaTotal = document.querySelector('.total');
const list = document.querySelector('.lista');
const carritoCompras = document.querySelector('#compras');

let creado =false;
let lista = [];

let total = 0;
lista = carritoContenido.split(',');

console.log(lista);

if(lista[0]!=' '){
var compras=lista.length;
carritoCompras.textContent=compras;
}else{
    var compras = 0;
    
}

for(let i=0;i<lista.length;i++){
    let posi = i;
    let precioprod =0;

    let precio = document.createElement('p');
    let producto = document.createElement('div');
    let img = document.createElement('div');
     let desc = document.createElement('div');
     let title = document.createElement('p');
      let price = document.createElement('p');
       let cantidad = document.createElement('p');
        let botones = document.createElement('div');
         let botonSumar = document.createElement('div');
         let botonEliminar = document.createElement('div');
    botones.classList.add('botones');
           
            botonSumar.classList.add('sumar');
            
            botonEliminar.classList.add('btnEliminar');

            producto.classList.add('producto');

producto.classList.add('producto');
cantidad.textContent='Amount: 1' ;
desc.classList.add('desc');


/* productos */
    switch(lista[i]){
    
        case '0':
            

            precio.textContent= 'Coca cola 3L - $3000';
            img.classList.add('img0');
            title.textContent= 'Coca cola - 3L';
           
            precioprod= 3000;

            creado = true;
        break;
        
        case '1':
            

            precio.textContent= 'Coca cola 500ml - $800';

            img.classList.add('img1');
         
            title.textContent= 'Coca cola - 500ml';

            precioprod = 800;
            creado = true;
        break;
        case '2':
            
            precio.textContent= 'Pepsi 500ml - $800';

            img.classList.add('img2');
         
             title.textContent= 'Pepsi - 500ml';

            precioprod = 800;
            creado = true;
        break;
        case '3':

            precio.textContent= 'Pepsi 3L - $3000';
            title.textContent= 'Pepsi - 3L';
            img.classList.add('img3');

            precioprod =3000;
            creado = true;
        break;
        case '4':
       
            precio.textContent= 'Coca Cola 500ml - $800';
            title.textContent= 'Coca Cola - 500ml';
            img.classList.add('img4');
    
            precioprod = 1500;
            creado = true;
        break;
        case '5':
            
            precio.textContent= 'Coca Cola 1L - $1500';
            title.textContent= 'Coca Cola - 1L';
            img.classList.add('img5');
            precioprod = 1500;
            creado = true;
        break;
        case '6':
            
            precio.textContent= 'Coca Cola 3L - $3000';
            title.textContent= 'Coca Cola - 3L';
            img.classList.add('img6');

            precioprod = 800;
            creado = true;
        break;
        case '7':
            
            precio.textContent= 'Coca Cola 363ml - $800';
            title.textContent= 'Coca Cola - 363ml';
            img.classList.add('img7');

            precioprod = 800;
            creado = true;
        break;
        case '8':
            
            precio.textContent= 'Pepsi 500ml - $800';
            title.textContent= 'Coca Cola - 500ml';
            img.classList.add('img8');

            precioprod = 800;
            creado = true;
        break;
        case '9':
            
            precio.textContent= 'Pepsi 1L - $1500';
            title.textContent= 'Coca Cola - 1L';
            img.classList.add('img9');

            precioprod = 800;
            creado = true;
        break;
        case '10':
            
            precio.textContent= 'Pepsi 3L - $3000';
            title.textContent= 'Coca Cola - 3L';
            img.classList.add('img10');

            precioprod = 800;
            creado = true;
        break;
        case '11':
            
            precio.textContent= 'Pepsi 363ml - $800';
            title.textContent= 'Coca Cola - 363ml';
            img.classList.add('img11');

            precioprod = 800;
            creado = true;
        break;
      
    }

    /* */

    if(creado==true){
price.textContent = 'precio: $' + precioprod;
    
    botonEliminar.addEventListener('click',()=>{
        
        console.log(posi);
        producto.remove();
        precio.remove();
        lista[posi]=' ';
        posi=i;
        console.log(posi)
        
        localStorage.setItem('comprado',lista);
        console.log('borrado: ' +i + '     ' + lista);
        total-=precioprod;
        
        compras-=1;
        console.log(compras);
        carritoCompras.textContent=compras;
        areaTotal.textContent = 'Total: ' + total;
    });
    detalles.appendChild(precio);
            list.appendChild(producto);
            producto.appendChild(img);
            producto.appendChild(desc);
            desc.appendChild(title);
            desc.appendChild(cantidad);
            desc.appendChild(price);
            producto.appendChild(botones);
            botones.appendChild(botonEliminar);



    total+=precioprod;

    areaTotal.textContent = 'Total: ' + total;
}
    creado =false;
}




