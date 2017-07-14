$(document).ready(function() {



$("#enviaForm").click(function(){
    $("#formuBip").remove();
    if($("#numTarjetaInput").val() == ""){
      $("#numTarjetaInput").val("");
      return false;
    } else{
      var tarjetaNum = $("#numTarjetaInput").val();
      obtenerBip(tarjetaNum);
      $("#numTarjetaInput").val("");
    
    }
      
  });
function obtenerBip(tarjetaNum){
          $.ajax({
            url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + tarjetaNum,
            type    : 'GET',
            dataType: 'json',
            
            success : function( data ) {
                                  console.log(data.saldoTarjeta);
                     var html   = '<b>Saldo tarjeta bip: </b>'+data.saldoTarjeta+'<br>';
                          html  += '<b>Fecha consulta: </b>'+data.fechaSaldo+'<br>';
                          html  += '<b>Numero de tarjeta: </b>'+data.id+'<br>';
                          
                      if(data === 'ID de la tarjeta invalido'){html = 'ID de la tarjeta invÃ¡lido'};
                                $("#resultadoBusqueda").html(html);                   
          }, error   : function( xhr, err ) {
                        console.log("ERROR");
                     }
           });
          $("#enviaForm").click(function(){
    $("#formuBip").remove();
    if($("#numTarjetaInput").val() == ""){
      $("#numTarjetaInput").val("");
      return false;
    } else{
      var tarjetaNum = $("#numTarjetaInput").val();
      obtenerBip(tarjetaNum);
      $("#numTarjetaInput").val("");
     
    
    }
      
  });

}
});