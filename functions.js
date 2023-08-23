const listaContactos = [
    {
        "id" : "398",
        "nombre" : "Juan",
        "apellido" : "Perez",
        "telefono" : "99887766",
        "ubicaciones" : {
            "ciudad" : "Tangamandapio",
            "direccion" : "Barrio Los Andes",
        },
    },
    {
        "id" : "486",
        "nombre" : "Maria",
        "apellido" : "Lopez",
        "telefono" : "33554411",
        "ubicaciones" : {
            "ciudad" : "Wakanda",
            "direccion" : "Colonia Loma Linda",
        },
    },
];

//listaContactos.sort();
//console.log(listaContactos);
//console.log(listaContactos[1].id);

function agregar()
{
    let id = prompt('Agregar id de contacto:');
    let nombre = prompt('Agregar nombre de contacto:');
    let apellido = prompt('Agregar apellido de contacto:');
    let telefono = prompt('Agregar telefono de contacto:');
    let ciudad = prompt('Agregar ciudad de contacto:');
    let direccion = prompt('Agregar direccion de contacto:');
    let existe = '';
    for (var i = 0; i < listaContactos.length; i++) {
        if (id == listaContactos[i].id) {
            existe = 'si';
            break;
        }
        else {
            existe = 'no';
        }
    }
    if(existe == 'si'){
        alert('Contacto ya existe, no puede usarse el mismo identificador.');
    }
    else{
        let objeto = {
            "id" : id,
            "nombre" : nombre,
            "apellido" : apellido,
            "telefono" : telefono,
            "ubicaciones" : {
                "ciudad" : ciudad,
                "direccion" : direccion,
            },
        };
        listaContactos.push(objeto);
        listaContactos.sort();
        alert('Se agregó el contacto');
    }
    
    //console.log(listaContactos);
}

function borrar(){
    let id = prompt('Borrar contacto mediante id:');
    let existe = '';
    let index = '';
    for (var i = 0; i < listaContactos.length; i++) {
        
        if (id == listaContactos[i].id) {
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
    
    //console.log(listaContactos);
}

function imprimir(){
    let i = '';
    listaContactos.forEach(function (elemento, indice, array) {
        console.table(indice+1+' - '+JSON.stringify(elemento));
        i++;
        let last = listaContactos.length;
        if(i<last){
            console.log('--------------------------------------------------------------------------------------');
        }
      });
      listaContactos.sort();
}

function actualizar(){
    let id = prompt('Actualizar contacto mediante id:');
    let existe = '';
    let index = '';
    for (var i = 0; i < listaContactos.length; i++) {
        
        if (id == listaContactos[i].id) {
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
        let modificar = prompt('¿Que dato desea modificar (ingresar numero)? \n1. Nombre \n2. Apellido \n3. Teléfono \n4. Ciudad \n5. Dirección');
        if(modificar == 1){
            let nombre = prompt('Cambiar nombre:');
            if(nombre != ''){
                listaContactos[index].nombre = nombre;
                alert('Se actualizó el nombre de contacto');
            }
            else{
                alert('Campo vacio.');
            }
        }
        else if(modificar == 2){
            let apellido = prompt('Cambiar apellido:');
            if(apellido != ''){
                listaContactos[index].apellido = apellido;
                alert('Se actualizó el apellido de contacto');
            }
            else{
                alert('Campo vacio.');
            }
        }
        else if(modificar == 3){
            let telefono = prompt('Cambiar telefono:');
            if(telefono != ''){
                listaContactos[index].telefono = telefono;
                alert('Se actualizó el teléfono de contacto');
            }
            else{
                alert('Campo vacio.');
            }
        }
        else if(modificar == 4){
            let ciudad = prompt('Cambiar ciudad:');
            if(ciudad != ''){
                listaContactos[index].ubicaciones.ciudad = ciudad;
                alert('Se actualizó la ciudad de contacto');
            }
            else{
                alert('Campo vacio.');
            }
        }
        else if(modificar == 5){
            let dirección = prompt('Cambiar dirección:');
            if(dirección != ''){
                listaContactos[index].ubicaciones.dirección = dirección;
                alert('Se actualizó la dirección de contacto');
            }
            else{
                alert('Campo vacio.');
            }
        }
    }
    
    //console.log(listaContactos);
}


imprimir();