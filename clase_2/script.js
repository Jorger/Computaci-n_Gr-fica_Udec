window.onload = function ()
{
	init(0);
}
var tmp = "";
function init(t)
{
	cg("boton").onclick = function()
	{
		alert("Presiona...");
	}
	cg("boton2").addEventListener('click', function(event) 
	{
		//alert("Presiona Listener...");
		alert(suma(2, 3));
	}, false);

	cg("ciudad").addEventListener('change', function(event)
	{
		tmp = event;
		alert(event.target.value)
	});



	function cg(div)
	{
		return document.getElementById(div);
	}
	var suma = function(a, b)
	{
		return a + b;
	}
	var saluda = function(nombre)
	{
		return "Hola " + nombre;
	}
	switch(t)
	{
		case 1: return suma;
		case 2: return saluda;
	}
	//return suma;
}

/*
function saluda(g)
{
	return function ()
	{
		alert("Llega: " + g);
	}
}
*/
function encapsula(f)
{
	var c = function(otro)
	{
		alert(hola + f + "  " + otro);
	}
	var hola = "Hola ";
	return c;
}


function ver()
{
	alert("Hola");
}
/*
var cg = function(div)
{
	return document.getElementById(div);
}
*/

