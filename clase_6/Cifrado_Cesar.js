//abcdefghijklmnopqrstuvwxyz...
var cesar = function (tipo, palabra, corrimiento)
{
	palabra = palabra.toLowerCase();
	var nuevoValAscii = val_ascii = 0;
	var cifrado = "";
	var entra = false;
	for(var i = 0; i < palabra.length ; i++) //Palabra...
	{
		val_ascii = palabra.charCodeAt(i); //Ascii...
		entra = false; //Si estra al IF...
		if(val_ascii != 32)//Espacio..
		{
			if(tipo === 1) //Encriptado...
			{
				if(val_ascii + corrimiento <= 122) // z 125
				{
					entra = true;
					nuevoValAscii = val_ascii + corrimiento;
				}
			}
			else
			{
				//Descifrar...
				if(val_ascii - corrimiento >= 97) // a
				{
					entra = true;
					nuevoValAscii = val_ascii - corrimiento;
				}
			}
			if(entra == false)
			{
				nuevoValAscii = val_ascii;
				for(var c = 1; c <= corrimiento; c++)
				{
					if(tipo === 1) //Encriptado...
					{
						if(nuevoValAscii + 1 > 122) //z
						{
							nuevoValAscii = 97; //a
						}
						else
						{
							nuevoValAscii++;
						}
					}
					else
					{
						if(nuevoValAscii - 1 < 97) // a
						{
							nuevoValAscii = 122; // z
						}
						else
						{
							nuevoValAscii--;
						}
					}
				}
			}
			cifrado += String.fromCharCode(nuevoValAscii);
		}
		else
		{
			cifrado += " ";
		}
	}
	return cifrado;
};


















