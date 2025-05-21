const palabras = ["auto","curso","horario"] ; // constante de palabras
var index = Math.floor(Math.random()*3) ; // lo que recorre 
var palabra_secreta = palabras[index] ; // traer el index
var letra ; // variables
var palabra_usuario =[] ; // variables
var errores = 0 ; 
var palabra_resultado ;

function jugar() {
do { 
letra = prompt("ingrese letra") ;
letra= letra.toLowerCase();
let acerto = 0 ;
for (let i = 0 ; i<palabra_secreta.length; i++){
    if (letra == palabra_secreta[i]) {
        acerto = 1 ;
        palabra_usuario [i] = letra ;
        alert (palabra_usuario) ;
        
    }
    if (i == palabra_secreta.length -1) {
            if (acerto == 0){
                errores ++ ;
            }
    } 
}
console.log (palabra_usuario) ;
console.log (palabra_secreta) ;
palabra_resultado = palabra_usuario. join("") ;
console.log (palabra_resultado) ;
}

while (errores <= 5 && palabra_resultado !== palabra_secreta)
    if (palabra_resultado == palabra_secreta){
        document.write("ganaste") ;
    
    }
    else{
        document.write ("perdiste") ;
    }

} // es un hacer mientras con un para, si, y una bandera