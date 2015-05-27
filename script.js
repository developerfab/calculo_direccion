var lista_rtas = []
function calculo(direccion){
	var rta_dir=""
	$.getJSON("http://maps.googleapis.com/maps/api/geocode/json?address="+direccion+", Bogota", function(rta){
		var lat = rta['results'][0]['geometry']['location']['lat'];
		var lgn = rta['results'][0]['geometry']['location']['lng'];
		rta_dir = direccion+","+lat+","+lgn;
		document.getElementById('respuesta').innerHTML=document.getElementById('respuesta').innerHTML+"<br>"+rta_dir;

	});	
}

function cargar(){
	var lista_direcciones = document.getElementById("lista_dir").value;
	var lista = processData(lista_direcciones);
	var lista_dir="";
	for(var i=0; i<lista.length; i++){
		 dir_formato = calculo(lista[i]);
		 lista_dir = lista_dir+"\n"+dir_formato;
	}
}

function processData(lista_direcciones){
	var lista=lista_direcciones;
	var partir = lista.split(",");
	return partir;
}