var formulario = document.getElementById('formulario');
	var nombre = formulario.nombre;
	
	
	function validarNombre(e){
		if(nombre.value.length == ''){
			document.getElementById('error').style.display ='block';
			var contenedor = document.getElementById('contenedor');
			var caja = document.createElement('div');
			var contenido = document.createTextNode('Por favor ingresa un nombre');
			caja.appendChild(contenido);
			var error = document.getElementById('error');
			error.appendChild(caja);
			e.preventDefault();
		}
	}
		
	function validarForm(e){
		error.innerHTML="";
		validarNombre(e);
	}

	formulario.addEventListener('submit', validarForm);
	