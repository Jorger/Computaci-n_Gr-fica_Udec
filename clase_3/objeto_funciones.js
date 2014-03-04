//Objeto que contiene funciones...
var operaciones = 
{
	suma : function(a, b) 
	{
		return a + b;
	},
	resta : function()
	{
		return this.a - this.b;	
	}, 
	multplica : function()
	{
		return this.a * this.b;	
	}, 
	divide : function()
	{
		return this.a / this.b;	
	}
};
//Agregar un nuevo elemento al objeto operaciones
operaciones.par = function(v)
{
	var devuelve = "Es Impar";
	if(v % 2 == 0)
	{
		devuelve = "Es Par";
	}
	return devuelve
};