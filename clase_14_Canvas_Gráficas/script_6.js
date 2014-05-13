var debug = "";
window.onload = function()
{
	datos = [10, 10, 10, 10, 10];
	canvas = nom_div('canvas'); 
	var c = canvas.getContext('2d'); 
	c.fillStyle = "white"; 
	c.fillRect(0,0,500,500);
	convenciones();
	var graficaDatos = function()
	{
		var posX = 0;
		var posY = 30;
		var alto = 0;
		c.clearRect (0,0,500,500);
		for(var i = 0; i < datos.length; i++)
		{   
		    /*
		    var grad = c.createLinearGradient(0,0,200,0); 
		    grad.addColorStop(0,"white");
		    grad.addColorStop(0.5, "red");
    		grad.addColorStop(1, "black"); 
		    */
		    if(i % 2 == 0)
		    {
		    	c.fillStyle = "red";
		    	//grad.addColorStop(1, "red"); 
		    }
		    else
		    {
		    	c.fillStyle = "blue";
		    	//grad.addColorStop(1, "blue");  
		    }
		    //c.fillStyle = grad; 
		    alto = datos[i];
		    posX = 40 + i * 100;
		    posY = 460 - alto * 5;
		    //c.fillRect(posX, posY, 50, alto*5);
		    c.fillRect(posX, posY, 50, alto * 5); 
		}
		convenciones();
	}
	function convenciones()
	{
		//Adicionar convenciones...
		c.fillStyle = "black"; 
		c.lineWidth = 2.0; 
		c.beginPath(); 
		c.moveTo(30,10); 
		c.lineTo(30,460); 
		c.lineTo(490,460); 
		c.stroke();
		//adicionar los valores...
		c.fillStyle = "black"; 
		for(var i=0; i<6; i++) 
		{ 
		    c.fillText((5-i)*20 + "", 4, i*80+60); 
		    c.beginPath(); 
		    c.moveTo(25,i*80+60); 
		    c.lineTo(30,i*80+60); 
		    c.stroke(); 
		}  
		//valores en la base...
		var meses = ["ENE","FEB","MAR","ABR","MAY"]; 
		//draw horiz text 
		//for(var i=0; i<5; i++)
		for(var i in meses)
		{ 
		    c.fillText(meses[i], 50+ i*100, 475); 
		}
	}
	nom_div("descarga").addEventListener('click', function(event)
	{
    	//var dataUrl = canvas.toDataURL();
    	this.href = canvas.toDataURL();
    
    });
	//CallBack
	for(var i = 1; i <= 5; i++)
	{
		nom_div("opcion_" + i).addEventListener('change', function(event)
		{
			//debug = event;
			var ind = event.target.id.split("_");
			datos[ind[1] - 1] = Number(this.value);
			graficaDatos();
		});
	}
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}