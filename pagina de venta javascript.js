

function enviar()
{
    var nombre= document.getElementById("nombre") .value;
    var email= document.getElementById("email") .value;
    var asunto= document.getElementById("asunto") .value;
    var mensaje= document.getElementById("mensaje") .value;

    if (
        !nombre || !email || !asunto || !mensaje
        )
        {
        
        }
    
    else 
    {   var usuario=
        {
        nombre: nombre ,
        email: email ,
        asunto: asunto ,
        mensaje: mensaje 
                         } ;
       // envia al emailjs //

       console.log(usuario) ;

        alert ("analizaremos tu consulta, pronto recibiras respuestas")
    }
}