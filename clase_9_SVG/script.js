/*
window.onload = function()
{
	//alert("Cargó...");
	var dibujar = SVG('divsvg').size("100%", 300);
	var cuadrado = dibujar.rect(100, 100).attr({fill: 'red'});
}
*/
window.onload = function()
{
	//alert("Cargó...");
	var color = "#0ff";
	var dibujar = SVG('divsvg').size("100%", 300);
	/*
	var enlace = dibujar.link("http://www.unicundi.edu.co/");
	var cuadrado = enlace.rect(100, 100).attr({fill: "red"});
	//cuadrado.radius(50);
	var elipse = dibujar.ellipse(200, 100).attr({fill: color});
	*/
	/*
	var circulo = dibujar.circle(200);
	var linea = dibujar.line(0, 0, 200, 250).fill('none').stroke({width : 4});
	nom_div("colCajas").addEventListener('change', function(event)
	{
		circulo.attr({fill: this.value});
		//.fill('none').stroke({ width: 3 }).attr({ fill: color });
		linea.attr({fill: this.value});
	});
	nom_div("posLinea").addEventListener('click', function(event)
	{
		linea.plot(0, 300, 500, 300);
	});
	*/
	var posOrg = [[0,0], [0, 200], [200, 200], [200, 0], [0,0], [200, 200]];
	var posDestino = [[0, 300], [500, 300], [100, 100]];
	var continua = dibujar.polyline(posOrg).fill("none").stroke({width : 4});
	var animo = false;
	nom_div("posLinea").addEventListener('click', function(event)
	{
		if(!animo)
		{
			continua.animate(5000).plot(posDestino);
		}
		else
		{
			continua.animate(1000).plot(posOrg);
		}
		animo = !animo;
	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}