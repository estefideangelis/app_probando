$('#formulario').submit(function() {
	// recolecta los valores que inserto el usuario
	var datosUsuario = $("#nombreUsuario").val()
	var datosPassword = $("#password").val()
    var homeLoaded = false;

	archivoValidacion = "http://movivet.tk/app/validacionReal.php?jsoncallback=?" 
	 
	$.getJSON( archivoValidacion, { usuario:datosUsuario ,password:datosPassword}) 
	.done(function(respuestaServer) {


		if(respuestaServer.validacion == "ok"){ 

			$.mobile.changePage("#reservar"); // Redirige a esa page automaticamente va una vez

			$("#reservar").on("pageshow", function(){ //al mostrarse esa pagina pasa algo.
                    if(homeLoaded == false){
                        
                        $('#tituloBienvenido').append('<span class="lightTitulo gris">Bienvenido</span> <span class="azul"> ' + respuestaServer[0].nombreUsuario +  '</span> <span class="lightTitulo gris">conoce tu</span>'); 
                    
                        homeLoaded = true;
                }
                   
				        
			
			});




			

