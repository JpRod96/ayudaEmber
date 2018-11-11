# Ayudita

Aqui estaran todos los comandos y las cosas que cambie, primero que nada, borra la capeta 'views' que cree en tu proyecto, no hice commit no nada, asi que no deberias tener lios para hacer esto, a menos que tu ya hayas hecho commit o algo. Sigue estos pasos.

## Instalacion
Abre tu terminal y ve hasta tu escritorio, solo haciendo 'cd desktop' deberia ser suficiente y luego haz lo sgte:
* `git clone https://github.com/JpRod96/ayudaEmber.git`
* `cd ayudita`
* `npm install` (este comando a veces tarda y necesita de internet)

## Haciendo Correr
En la misma terminal haz esto
* `ember serve`
* Ve a esta direccion en chrome, siempre trata de usar chrome [http://localhost:4200](http://localhost:4200).

Espero todo haya salido bien y estes viendo la pequeña pagina que acabo de hacer, esta tecnologia habia sido para hacer SPA (Single Page Application), luego te explico que significa eso, ahora pondre todos los comandos y que archivos editar, primero que termina el proceso en la terminal en la que estas haciendo Ctrl + C y luego navega hasta tu carpeta de eva, no deberia estar la carpeta views, no la crees, solo empieza a correr los sgtes comandos:

1. `ember new views` (Este comando tarda bastante y necesita internet, asi que puedes ir a ducharte o hacer otra cosa)
2. Abre tu visual code y busca esta nueva carpeta 'views' en el directorio EVA que acaba de ser creada y ponle abrir, veras un monton de carpetas, no te asustes, ahora abre una nueva terminal en ese visual code con 'Ctrl + ñ'
3. Abre el archivo app/templates/aplication.hbs y borra todo menos el '{{outlet}}' y copia lo que hay en mi archivo aplication.hbs, en la carpeta que clonaste
4. Luego haz `ember generate route registro-estudiante`, luego de que el comando haya corrido veras que se agrego en la carpeta app/routes/ el archivo registro-estudiante.js que es donde pondras la logica de la pagina, aunque no creo que vayas a tocarlo por ahora y tambien se creo otro archivo en la ruta app/templates/registro-estudiante.hbs, este es el html, el que editaremos, abrelo!
5. Borra igual todo lo que hay en ese archivo y pon lo que hay en mi archivo registro-estudiante.hbs
6.  `ember serve` ahora si ejecuta esto y ve a [http://localhost:4200](http://localhost:4200) 