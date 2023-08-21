const listaContactos = ['Maria Lopez', 'Juan Perez', 'Carlos Sanchez', 'Daniela Hernandez'];
listaContactos.sort();
console.log(listaContactos);

function agregar()
{
    let contacto = prompt('Agregar contacto:');
    let existe = '';
    for (var i = 0; i < listaContactos.length; i++) {
        
        if (contacto == listaContactos[i]) {
            existe = 'si';
            break;
        }
        else {
            existe = 'no';
        }
    }
    if(existe == 'si'){
        alert('Contacto ya existe');
    }
    else{
        listaContactos.push(contacto);
        listaContactos.sort();
        alert('Se agregó el contacto');
    }
    
    console.log(listaContactos);
}

function borrar(){
    let contacto = prompt('Borrar contacto:');
    let existe = '';
    let index = '';
    for (var i = 0; i < listaContactos.length; i++) {
        
        if (contacto == listaContactos[i]) {
            existe = 'si';
            index = i;
            break;
        }
        else {
            existe = 'no';
        }
    }
    if(existe == 'no'){
        alert('Contacto no existe');
    }
    else{
        listaContactos.splice(index,1);
        listaContactos.sort();
        alert('Se borró el contacto');
    }
    
    console.log(listaContactos);
}

function imprimir(){
    let i = '';
    listaContactos.forEach(function (elemento, indice, array) {
        console.log(indice+1+' - '+elemento);
        i++;
        let last = listaContactos.length;
        if(i<last){
            console.log('---------------------------');
        }
      });
}

agregar();
borrar();
imprimir();