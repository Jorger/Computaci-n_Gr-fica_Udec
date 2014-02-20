function operadores(tipo)
{
	var a = Number(document.getElementById('v1').value);
	var b = Number(document.getElementById('v2').value);
	//alert("llega " + a);
	var r = "No son números";
	if(isNaN(a) == false && isNaN(b) == false)
	{
		switch(tipo)
		{
			case "suma": r = a + b;break;
			case "resta": r = a - b;break;
			case "multi": r = a * b;break;
			case "divide": r = a / b;break;
			default: r = "No existe la opción";
		}
		//return r;
		alert(r);
	}
}