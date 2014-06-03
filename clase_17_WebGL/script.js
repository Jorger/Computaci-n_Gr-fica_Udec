window.onload = function()
{
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	//var lienzo = new THREE.WebGLRenderer({antialias: true});
	var lienzo = new THREE.WebGLRenderer();
	lienzo.setSize(ancho,alto);
	//lienzo.setClearColor(0xffffff);//0x000000 lienzo


	document.body.appendChild(lienzo.domElement);
	var escena = new THREE.Scene;
	var cuboUno = new THREE.CubeGeometry(100,100,100);
	var cuboDos = new THREE.CubeGeometry(100,100,100);
	var colorCubo = new THREE.MeshLambertMaterial({color: "yellow"});
	

	var texturaUno = THREE.ImageUtils.loadTexture( 'box.jpg' );
	texturaUno.anisotropy = lienzo.getMaxAnisotropy();

	var texturaDos = THREE.ImageUtils.loadTexture( 'box2.jpg' );
	texturaDos.anisotropy = lienzo.getMaxAnisotropy();
	
	var materialUno = new THREE.MeshBasicMaterial( { map: texturaUno } );
	var materialDos = new THREE.MeshBasicMaterial( { map: texturaDos } );
	
	var cubo1 = new THREE.Mesh(cuboUno, colorCubo);
	var cubo2 = new THREE.Mesh(cuboDos, colorCubo);
	//Agregar materia...
	
	var cubo1 = new THREE.Mesh(cuboUno, materialUno);
	var cubo2 = new THREE.Mesh(cuboDos, materialDos);
	

	escena.add(cubo1);
	escena.add(cubo2);
	/*
  		//Punto de vista...
  		//Relación de aspecto...
  		//Cerca..
  		//Lejano
  	*/
	var camara = new THREE.PerspectiveCamera(80,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(cubo1.position);
	cubo1.position.x = -100;
	cubo2.position.x = 100;
	escena.add(camara);
	/*
	var luz1 = new THREE.PointLight(0xff0044);
	luz1.position.set(120,260,100);
	var luz2 = new THREE.PointLight(0x4499ff);
	luz2.position.set(-100,100,200);
	escena.add(luz1);
	escena.add(luz2);
	*/
	var  x = 0;
	var inicia = true;
	var encima = true;
	function renderizar()
	{
		if(!encima || inicia)
		{
			inicia = false;
			requestAnimationFrame(renderizar);
			return false;
		}
		/*
		cubo1.rotation.y += Math.PI * 0.5 / 180;
		cubo1.rotation.z += Math.PI * Math.cos(x++ / 50) / 180;
		cubo2.rotation.y += Math.PI * Math.cos(x++ / 100) / 180;
		cubo2.rotation.z += Math.PI * 0.2 / 180;
		*/
		cubo1.rotation.y += 0.1;
		cubo2.rotation.x += 0.1;
		cubo2.rotation.y += 0.1;
		cubo2.rotation.z += 0.1;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}
	renderizar();
	addEventListener("mouseover",function(){encima=true;});
	addEventListener("mouseout",function(){encima=false;});
}
