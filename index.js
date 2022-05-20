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
    
   }

}