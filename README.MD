## STAR WARS test :alien:

Este proyecto es una página que despliega y muestra la información de SWAPI (Star wars api) y almacena en una API una consulta procesada por Angular. 

### Estructura 

* /swback 
	* Aquí está el backend hecho con Node js, Express y Knex. Se utilizó la arquitectura multipaquete para separar cada uno de los componentes y poder aislar la lógica. Para correrlo solo hay que correr ``` npm install ``` y correr el sql que está en  [swback](https://github.com/AguacateVelarde/sw-test/tree/master/swback)/[db](https://github.com/AguacateVelarde/sw-test/tree/master/swback/db)/**model.sql** y configurar las variables de entorno para tener acceso a la base de datos, por ejemplo: 
	```DB_USER=root DB_PASSWORD=root DB_DATABASE=starwars DB_PORT=3306 DB_HOST=localhost ```


* /swui
	* En esta carpeta se encuentra la UI del proyecto, usando Angular y bootstrap, se puede correr primero instalando las dependencias, con ``` npm install ``` y corriéndolo con ``` npx @angular/cli serve ``` o instalar de forma global con 
``` npm install @angular/cli --global ``` y usar la cli con ``` ng serve ```

### Testing

Para ver las pruebas hay que entrar a package.json en la carpeta de /swback  y modificar las variables de entorno por defecto que hay en el comando de test.
Por defecto viene así : 
``` DB_USER=root DB_PASSWORD=root DB_DATABASE=starwars DB_PORT=3306 DB_HOST=localhost mocha --timeout 10000 --exit ```

y correr las pruebas con 
``` npm run test ```

### Documentación

Para ver la documentación de los API REST podemos alzar el backend y entrar a la ruta **/api/docs/** y nos va a mostrar toda la información sobre nuestra API y los endpoints que tiene. 


El proyecto fue hecho con :heart: