var debug = "";
window.onload = function()
{
	//alert("Hola");
	var color = "#0ff";
	var dibujar = SVG('divsvg').size("100%", 400);
	var image = dibujar.image('estudia.gif');
    image.size("100%", "100%");
    image.hide();


	var letraJ = [[0,0], [200, 0], [200, 20], [110, 20], [110, 200], [0, 200], 
				  [0, 180], [90, 180], [90, 20], [0, 20], [0, 0]];
	var letraH = [[0, 0], [0, 200], [20, 200], [20, 110], [160, 110], [160, 200], 
				  [180, 200], [180, 0], [160, 0], [160, 90], [20, 90], [20, 0], [0, 0]]; 
	var continua = dibujar.polyline(letraJ).fill("none").stroke({width : 4, color: '#f06'}).attr({ fill: color });
	continua.animate(1000).plot(letraH).loop();

	for(var i = 1; i <= 7; i++)
	{
		nom_div("opcion_" + i).addEventListener('change', function(event)
		{
			//console.debug(event);
			var ind = event.target.id.split("_");
			switch(Number(ind[1]))
			{
				case 1: continua.attr({fill: this.value}); break;
				case 2: continua.stroke({color : this.value}); break;
				case 3: continua.stroke({width : this.value}); break;
				case 4: continua.attr({opacity: this.value}); break;
				case 5: continua.rotate(this.value); break;
				case 6: continua.scale(this.value); break;
				case 7: //Mostra máscara..
						if(this.value == 1)
						{
							image.show();
							//image.maskWith(continua);
							continua.maskWith(image);
						}
						else
						{
							//continua.remove()
							//image.hide();
							continua.unmask();
							//mask.remove()
						}
						break;
			}
		});
	}

	var animo = true;
	nom_div("controla").addEventListener('click', function(event)
	{
		if(animo)
		{
			this.value = "Continuar";
			continua.pause();
		}
		else
		{
			this.value = "Detener";
			continua.play();
		}
		animo = !animo;
	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}