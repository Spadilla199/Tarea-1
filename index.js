const FS= require('fs')
const RUTA='./data.json'

const [,,parametro1,parametro2,parametro3]=process.argv
const [,accion] = parametro1.split('=')
if(parametro2) {
    var [,msj] = parametro2.split('=')
}
const [,objeto] = parametro3.split('=')

let data={};

switch(accion){
    case '1':
        crearVacioJSON()
        break
    case '2':
        EscribirJSON()
        break
    case '3':
        SobrescribirJSON()
        break
    case '4':
        eliminarJSON()
        break
    case '5':
        leerJSON()
        break
    case '6':
        leerobjeto()
        break    
    default:
        console.log('Opcion incorrecta')
        break
}

function crearVacioJSON(){
    FS.open(RUTA, 'w', function (err) {
        if (err) throw err;
        console.log(`Archivo creado ${RUTA}`);
      }
    )
}

function EscribirJSON(){
    FS.appendFile(RUTA, msj, function (err) {
        if (err) throw err;
        console.log('Archivo actualizado');
      });
}

function SobrescribirJSON(){
    FS.writeFile(RUTA, msj, function (err) {
        if (err) throw err;
        console.log('Archivo se sobrescribio correctamente');
      });
}

function eliminarJSON(){
    FS.unlink(RUTA, function (err) {
        if (err) throw err;
        console.log('Archivo Eliminado!');
      });
}

function leerJSON(){
   let data2= FS.readFile(RUTA, function(err, data) {
        if (err) throw err;
        console.log(JSON.parse(data))
        
        this.data=JSON.parse(data)
      });
}

function leerobjeto(){
    let data2= FS.readFile(RUTA, function(err, data) {
         if (err) throw err;
 
         this.data=JSON.parse(data)
         console.log(`Este objeto es: ${this.data[msj][objeto]}`)
       });
 }