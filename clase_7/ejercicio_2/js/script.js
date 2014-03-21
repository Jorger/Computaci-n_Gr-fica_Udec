window.onload = function()
{
	//alert("Hola Sprites");
	var pasos = ["uno", "dos", "tres", "cuatro", "cinco"];
	var num_camina = 1;
	var camina_inversa = 5;
	var camina = false;
	var cont = 0;

	setInterval(function()
	{
		if(!camina)
		{
			cont++;
			nom_div("monacho").setAttribute("class", "caminar " + pasos[num_camina - 1]);
			num_camina++;
			if(num_camina >= 5)
			{
				num_camina = 1;
			}
			
			//if(cont % 5 == 0)
			//{
				nom_div("monacho2").setAttribute("class", "caminar " + pasos[camina_inversa - 1]);
				camina_inversa--;
				if(camina_inversa <= 1)
				{
					camina_inversa = 5;
				
				}
				cont = 0;
			//}
		}
	}, 100);
	nom_div("boton").addEventListener('click', function(event)
	{
		camina = !camina;
		/*
		if(camina == true)
		{
			camina = false;
		}
		else
		{
			camina = true;
		}
		*/

	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}