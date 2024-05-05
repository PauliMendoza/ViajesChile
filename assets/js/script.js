//Iniiciar JS, se agrega tooltip y alerta al boton enviar de la sección de contacto. 

$(document).ready(function(){
    // Activar tooltips solo cuando el mouse está sobre el boton
       $("#botonenviar").on({
           mouseenter: function () {
               $(this).tooltip('show');
           },
           mouseleave: function () {
               $(this).tooltip('hide');
           }
       });
   //Agregar el evento click
       $("#botonenviar").click(function(){
           alert("Gracias por contactarte con nosotros");
       });
   
   
   
   });