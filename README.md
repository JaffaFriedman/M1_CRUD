# M1_CRUD
 Aplicación Crud que permite mantener los datos de una lista de clientes.
 
 ## Objetivo
 Esta aplicación es para ejercitar las operaciones CRUD (create, read, update, delete) en un formulario simple
 El formulario es para una lista de clientes y tiene el nombre, correo y teléfono. Todos los datos son obligatorios

 ## Forma de implementar
En el HTML se creo el header y las 4 secciones solicitadas, las cuales seran modificadas con el javascript
1) listar
2) ingresar
3) modificar
4) eliminar

 ### Consideraciones
Se agrego una quinta sección para poner el boton de agregar, con el objeto de que al presionarlo aparezca el
formulario para agregar. 

 ### Al eliminar
 Aparece un formulario con el registro que se quiere eliminar, para visualizarlo y confirmar

 ### Cancelar la operacion
 Todos los formularios tienen la opción de cancelar, donde limpiara la pantalla.
 
  ### Validación de campos
 Se valida que todos los campos esten ingresados, se indica cual no se ingreso y se realiza una validación simple de los campos correo y telefono
