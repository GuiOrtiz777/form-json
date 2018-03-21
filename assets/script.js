$(document).ready(function(){
    alert('Ola Mundao');

});

function enviaJquery(event){
        event.preventDefault();//Evitando que o form de submit
        var dados = $('#tal').serialize();

        jQuery.ajax({
            
           url: "../response.php",
           type: 'POST',
           data: dados,
           dataType: 'html',
           success: function(response) {
               $(".retorno-json").html(response);
           },
           error: function(error, status){
             console.log(error);
             console.log(status);

             var alerta =
               '<div class="alert alert-danger" role="alert">'+
                   '<strong>Ops: </strong> Um erro ocorreu, tente mais tarde!'+
               '</div>';

               $(".retorno-json").html(alerta);
           }
       });
    };