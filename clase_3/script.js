window.onload = function()
{
	inicio();
}
function inicio()
{
	var operaciones = function(tipo, d, e)
	{
		function suma(a, b)
		{
			return a + b;
		}
		function resta(a, b)
		{
			return a - b;
		}
		function multiplica(a, b)
		{
			return a * b;
		}
		function divide()
		{
			return d / e;
		}
		switch(tipo)
		{
			case "suma" : return suma;
			case "resta": return resta;
			case "multiplica": return multiplica;
			case "divide" : return divide;
		}
	}
	nom_div("calcula").addEventListener('click', function(event)
	{
		nom_div("pantalla").innerHTML = operaciones("multiplica")(30, 10);
	});
}

//función auxiliar...
function nom_div(div)
{
	return document.getElementById(div);
}