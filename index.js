//ALMACENAR LA INFORMACIÓN EN EL NAVEGADOR
var datos= []

datos = JSON.parse(localStorage.getItem('datos'))//pasa el string del local storage a un array

var guardarnavegador = function(){
    localStorage.setItem('datos', JSON.stringify(datos)) // Pasa los datos del array a string y guarda los datos en local storage
}

var guardarnombre = function(){
    var texto = document.getElementById('midato').value
    console.log(texto)
    datos.push(texto)
    guardarnavegador()
}

var   mostrardatos= function(){
    console.log(datos)
    console.log(localStorage.getItem('datos'))//traer los datos de local storage
    console.log(JSON.parse(localStorage.getItem('datos')))
    
}

var modificar=function(){
    var posicion= document.getElementById('posicion').value
    datos[posicion]= document.getElementById('midato').value
    guardarnavegador()
}

var eliminar = function(){
    var posicion= document.getElementById('posicion').value
    datos.splice(posicion,1)
    guardarnavegador()

}

var change = function(){

    document.getElementById('micontenido').innerHTML =''

   for (var i = 0; i<=datos.length-1; i++) {

    document.getElementById('micontenido').innerHTML += '<div> '+ datos[i] +'</div>'
    
    // console.log('' + 70 + ' X ' +i+ ' = '+ (i*70))
       //document.getElementById('micontenido').innerHTML += '<div> '+'' + 70 + ' X ' +i+ ' = '+ (i*70) +'</div>'
          
   //document.getElementById('micontenido').innerHTML = localStorage.getItem('datos')
    //micontenido.innerHTML = "prueba"
    //console.log(micontenido)
}
//CICLOS Y CONDICIONALES
//for y foreach

}
/*
/Ciclo while

var prueba=10

while (prueba <20) {

    console.log('')
    console.log('')
    console.log('')
    console.log('')

    prueba = prueba + 1
    
}*/

/*var libros = ['azul'. 'verde', 'azul', 'rojo', 'rosa', 'azul']
var librosguardados[]

for (let alibros = 0;a < libros.length; a++) {
    console.log(libros[a])
    if (libros[a] == 'azul' ){
        librosguardados.push(libros[a])
        
        
    }
    
}*/