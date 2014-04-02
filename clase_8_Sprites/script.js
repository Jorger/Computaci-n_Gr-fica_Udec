var debug;
window.onload = function()
{
	var direccion = 0;
	var caminar = false;
	var txtDirecciones = ["Izquierda", "Arriba", "Derecha", "Abajo"];
	var direcciones = ["left", "top", "right", "front"];
	nom_div("personaje").setAttribute("class", "basepersonaje front_1");
	nom_div("personaje").style.left = "0px";
	nom_div("personaje").style.top = "0px";
	var paso = 1;
	setInterval(function()
	{
		if(caminar)
		{
			nom_div("personaje").setAttribute("class", "basepersonaje " + direcciones[direccion] + "_" + paso);
			paso++;
			if(paso >= 5)
			{
				paso = 1;
			}
			var posX = parseInt(nom_div("personaje").style.left);
			var posY = parseInt(nom_div("personaje").style.top);
			switch(direccion)
			{
				case 0: posX -= 10; break;
				case 1: posY -= 10; break;
				case 2: posX += 10; break;
				case 3: posY += 10; break;
			}
			if((posX >= 0 && posX <= 530) && (posY >= 0 && posY <= 330))
			{
				nom_div("personaje").style.left = posX + "px";
				nom_div("personaje").style.top = posY + "px";
			}

		}
	}, 100);


	window.onkeydown = function(e)
	{
		var code = e.keyCode ? e.keyCode : e.which;
		if(caminar == false)
		{
			if(code >= 37 && code <= 40)
			{
				direccion = code - 37;
				//console.log(txtDirecciones[direccion]);
				caminar = true;
			}
		}
	}
	window.onkeyup = function(e)
	{
		var code = e.keyCode ? e.keyCode : e.which;
		if(caminar == true)
		{
			if(code >= 37 && code <= 40)
			{			
				direccion = code - 37;
				nom_div("personaje").setAttribute("class", "basepersonaje " + direcciones[direccion] + "_1");
				//console.log("Suelta: " + code);
				caminar = false;
			}
		}
	}

	function nom_div(div)
	{
		return document.getElementById(div);
	}
}