window.onload = function()
{
	inicio();
}
function inicio()
{
	var listadoPersona = [];
	//Muestra los usuarios en el listado...
	var muestraPersonas = function()
	{
		nom_div("listarUsuarios").innerHTML = "";
		var txt = "<ul>";
		for(var i in listadoPersona)
		{
			txt += "<li>" + listadoPersona[i].imprime() + "</li>";
		}
		txt += "</ul>";
		nom_div("listarUsuarios").innerHTML = txt;
	}
	//Verifica si un usario ya existe...
	var usuarioExiste = function(id)
	{
		var retorna = false;
		for(var i in listadoPersona)
		{
			if(listadoPersona[i].identifica === id) //existe...
			{
				retorna = true;
				break;
			}
		}
		return retorna;
	}

	var limpiaCampos = function()
	{
		var nomCampos = ["identifica", "nombre", "apellido", "fechanace", "emailUser"];
		for(var i in nomCampos)
		{
			nom_div(nomCampos[i]).value = "";
		}
	}

	nom_div("guarda").addEventListener('click', function(event)
	{
		var id = nom_div("identifica").value;
		var pn = nom_div("nombre").value;
		var pa = nom_div("apellido").value;
		var fn = nom_div("fechanace").value;
		var em = nom_div("emailUser").value;
		if(id != "" && pn != "" && pa != "" && fn != "" && em != "")
		{
			if(ValidaEmail(em))
			{
				if(usuarioExiste(id) == false)
				{
					var usuario = new persona(id, pn, pa, fn, em);
					listadoPersona.push(usuario);
					muestraPersonas();
					limpiaCampos();
				}
				else
				{
					alert("El usuario con el ID: " + id + " ya existe");
				}
			}
			else
			{
				alert("El email: " + em + ", no es válido");
				nom_div("emailUser").focus();
			}
		}
		else
		{
			alert("Complete todos los campos...");
		}
	});

	//Clase Persona...
	function persona(id, pn, pa, fn, em)
	{
		this.identifica = id;
		this.primer_nombre = pn;
		this.primer_apellido = pa;
		this.fecha_nacimiento = fn;
		this.email = em;
		//Método cálcula edad...
		this.calculaEdad = function()
		{
			var fecha_actual = new Date();
			var parteFn = this.fecha_nacimiento.split("-");
			var fechaCompara = new Date(parteFn[0], parteFn[1], parteFn[2]); //año, mes día
			return Math.floor((fecha_actual - fechaCompara) / 1000 / 3600 / 24 / 365);
		}
		//Método Imprime Usuario...
		this.imprime = function()
		{
			var txt = "";
			txt = "ID: "+this.identifica+" - <b>Nombre:</b> " + this.primer_nombre + " " + this.primer_apellido;
			txt += " <b>E-mail:</b> " + this.email;
			txt += " <b>Fecha de nacimiento:</b> " + this.fecha_nacimiento;
			txt += " <b>Edad:</b> " + this.calculaEdad();
			return txt;
		};
	}
	//Función Válida E-Mail...
	function ValidaEmail(email)
	{
		var emailReg = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		if(!emailReg.test(email))
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}