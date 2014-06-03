window.onload = function()
{
	inicia(1);
	nom_div("texturas").addEventListener('change', function(event)
	{
		inicia(this.value);
	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}

function inicia(num)
{
	var canvas = document.getElementsByTagName("canvas")[0];
	var w = window.innerWidth - 50;
	var h = window.innerHeight - 100;
  	var lienzo = new THREE.WebGLRenderer({canvas:canvas});
  	lienzo.setSize(w, h);
  	//limpia el color del render...
  	lienzo.setClearColor(new THREE.Color(0xeeeeee), 1);
  	//Creando la escena...
  	var escena = new THREE.Scene();
  	//Creando la cámara...
  	/*
  		//Punto de vista...
  		//Relación de aspecto...
  		//Cerca..
  		//Lejano
  	*/
  	var camara = new THREE.PerspectiveCamera(15,  w / h, 0.1, 10000);
  	camara.position.set( 5, 5, 100 );
  	var controlMouse = new THREE.OrbitControls(camara, canvas);
  	var cuboUno = new THREE.CubeGeometry(5, 5, 5);
  	var texturaUno = THREE.ImageUtils.loadTexture("box_"+num+".jpg");
	texturaUno.anisotropy = lienzo.getMaxAnisotropy();
	var materialUno = new THREE.MeshBasicMaterial( { map: texturaUno } );
  	var cubo = new THREE.Mesh(cuboUno, materialUno);
  	escena.add( cubo );
  	/*
  	var luz = new THREE.PointLight( 0xFFFFFF );
  	luz.position.set( 10, 0, 10 );
  	escena.add( luz );
  	*/
  	var reloj = new THREE.Clock();
  	var renderizar = function()
  	{
  		var tiempo_delta = reloj.getDelta();
    	controlMouse.update(renderizar);
    	lienzo.render(escena,camara);
    	requestAnimationFrame(renderizar);
  	}	
  	requestAnimationFrame(renderizar);
}