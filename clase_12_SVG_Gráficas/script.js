window.onload = function()
{
	inicio();
}
//clousure...
function inicio()
{
	var r = Raphael("torta", 400, 400);
	var datosGrafica = [];
	var total = inicia = val = 0;
	r.customAttributes.segmento = function (x, y, r, a1, a2, color)
    {
        var flag = (a2 - a1) > 180;
        var clr = (a2 - a1) / 360;                    
        a1 = (a1 % 360) * Math.PI / 180;
        a2 = (a2 % 360) * Math.PI / 180;                    
        return {
            path: [["M", x, y], ["l", r * Math.cos(a1), r * Math.sin(a1)], ["A", r, r, 0, +flag, 1, x + r * Math.cos(a2), y + r * Math.sin(a2)], ["z"]],
            fill: color
        };
    };

    function grafica(color, val)
    {
        var graficaSegmento = r.path();
        graficaSegmento = graficaSegmento.attr({stroke: "#000", "stroke-width": 2, segmento: [200, 200, 150, inicia, inicia + val, color]});        
        r.set(graficaSegmento);
    }
    var graficaPie = function()
    {
        total = val = 0;
        //Cácular el total de la sumatoria de los elementos...
        for(var i in datosGrafica)
        {
            total += Number(datosGrafica[i].numero);
        }
        for(var i in datosGrafica)
        {
            val = 360 / total * datosGrafica[i].numero;
            grafica(datosGrafica[i].color, val);                    
            inicia += val;
        }
    }
	

	var actualizaPie = function(tipo, valor, div)
    {
     

        var ind = div.split("_");
        var indice = Number(ind[1]) - 1;
        var confirma = true;
        if(tipo != 3)
        {
            //Actualizar el valor en el objeto...
            if(tipo == 1)//Actualizará el número...
            {
                datosGrafica[indice].numero = valor;
            }
            else
            {
                datosGrafica[indice].color = valor;
            }
            graficaPie();
        }
        else
        {
            if(datosGrafica.length > 2)
            {
                confirma = confirm("¿Está seguro de realizar este proceso?");
                if(confirma)
                {
                    datosGrafica.splice(indice, 1);
                    muestraElementos();
                }
            }
            else
            {
                alert("La gráfica debe tener al menos dos datos");
            }
        }
        if(confirma)
        {
            graficaPie();
        }
    }
	var muestraElementos = function()
    {
        var txt = "<table width = '100%'>";
        var cont = 1;
        for(var i in datosGrafica)
        {
            txt += "<tr>";
            txt += "<td width = '40%'>"+datosGrafica[i].nombre+"<td>";
            txt += "<td width = '25%'>";
            txt += "<input type = 'number' id = 'n_"+cont+"' value = '"+(datosGrafica[i].numero)+"'>";
            txt += "</td>";
            txt += "<td width = '25%'>";
            txt += "<input type = 'color' id = 'c_"+cont+"' value = '"+(datosGrafica[i].color)+"'>";
            txt += "</td>";
            txt += "<td width = '10%'><a href = 'javascript:;' id = 'e_"+cont+"'>[Eliminar]</a></td>";
            txt += "</tr>";
            cont++;
        }
        txt += "</table>";
        nom_div("datos").innerHTML = txt;
        //Cambiar los valores de los elementos...
        for(var i = 1; i <= datosGrafica.length; i++)
        {
            nom_div("n_" + i).addEventListener('change', function(event)
            {
                actualizaPie(1, event.target.value, event.target.id);
            });
            nom_div("c_" + i).addEventListener('change', function(event)
            {
               actualizaPie(2, event.target.value, event.target.id);
            });
            nom_div("e_" + i).addEventListener('click', function(event)
            {
               actualizaPie(3, 0, event.target.id);
            });
        }
    }

    nom_div("acepta").addEventListener('click', function(event)
    {
        var nom = nom_div("nomTabla");
        var numero = nom_div("numTabla");
        var color = nom_div("colorTabla");
        if(nom.value.length == 0 || numero.value.length == 0)
        {
            if(nom.value.length == 0)
            {
                alert("Escribe el nombre");
                nom.focus();
            }
            else
            {
                alert("Digita el número");
                numero.focus();
            }
        }
        else
        {
            datosGrafica.push({nombre: nom.value, numero: numero.value, color: color.value});
            nom.value = numero.value = "";
            muestraElementos();
  			
            if(datosGrafica.length >= 2)
            {
                graficaPie();
            }
            
        }
    });

    function nom_div(div)
    {
        return document.getElementById(div);
    }
}