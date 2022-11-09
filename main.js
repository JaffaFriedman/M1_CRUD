/*
Tarea Aplicación CRUD
Jaffa Friedman
*/
let tareas=[]

function agregarTarea(tarea,descripcion) {
  tarea ={
    
    tarea: tarea,
    descripcion: descripcion, }
    tareas.push(tarea)
}



 
 
function  titulos() {
  const tareaE = document.createElement("div")
  tareaE.innerHTML = `
  <div class="container row mt-4 text-light bg-primary" id="lista">
                        <div class="col" id="tarea">
                         Tarea
                        </div>
                        <div class="col" id="descripcion">
                         Descripcion
                         </div>
                        <div class="col">
                        </div>     
                  </div>`

    listar.appendChild(tareaE)
}

function listarTareaFormulario(tarea,idx) {
    const tareaE = document.createElement("div")
    tareaE.innerHTML = `<div class="container  row row-cols-3 mb-4 p-2 bg-primary bg-opacity-10" id="lista">
                          <div class="col-2" id="tarea">
                              ${tarea.tarea}
                          </div>
                          <div class="col-8" id="descripcionL" >
                              ${tarea.descripcion}
                         </div>
                          <div class="col-2">         
                              <button id="btn-update" type="button" class="btn btn-primary mb-2" style="width:5.5rem;" onclick="modificarTareaFormulario(tarea)">Modificar</button>
                              <button id="btn-delete" type="button" class="btn btn-primary mb-2" style="width:5.5rem;" onclick="eliminarTareaFormulario(tarea)">Eliminar</button>
                          </div>
                      </div>`
    listar.appendChild(tareaE)
   }

   function botonAgregar() {
    const tareaE =  document.createElement("div")
    tareaE.innerHTML = `<div class="container mb-4">
                            <div class="aling-end mt-4 mb-4" >
                                <button id="btn-create" type="button" class="btn btn-primary .bg-gradient" onclick="ingresarTareaFormulario()">Nueva Tarea</button>
                            </div>

                        </div>
                        `
    boton.appendChild(tareaE)
   }

   function listarTareas()
   {
    titulos()
    tareas.forEach((v,idx)=>listarTareaFormulario(v,idx))
    botonAgregar()
   }

   function modificarTareaFormulario(tarea,idx) {
    const tareaE = document.createElement("div")
    tareaE.innerHTML = `<div class="container m-4">
                            <div class="mt-2" id="tareaM">
                                <label for="tarea" class="form-label"></label>Tarea</label>
                                <input  class="form-control" id="tarea"  value="${tarea.tarea}" > </input>
                               
                            </div>
                             <div class="mt-2" id="descripcionM >
                                <label for="descrpcion" class="form-label">Descripción</label>
                                <input  class="form-control" id="descrpcion"  rows="3" value="${tarea.descripcion}"> </input>
                              
                            </div>
                            <div class="aling-end mt-4 mb-4" >
                                <button id="btn-create" type="button" class="btn btn-primary .bg-gradient" onclick="borrarSeccion('modificar')">Actualizar</button>
                            </div>
                        </div>`
    modificar.appendChild(tareaE)
   }

   function modificarTarea(){    inicio()}
   function eliminarTareaFormulario(tarea,idx) {
    const tareaE = document.createElement("div")
    tareaE.innerHTML = `<div  class="container m-4">
                        
                            <div class="mt-2" id="tareaE">
                                <label for="tarea" class="form-label"></label>Tarea</label>
                                <input  class="form-control" id="tarea"  value="${tarea.tarea}" > </input>
                               
                            </div>
                             <div class="mt-2" id="descripcionE >
                                <label for="descrpcion" class="form-label">Descripción</label>
                                <input  class="form-control" id="descrpcion"  rows="3" value="${tarea.descripcion}"> </input>
                              
                            </div>
                            <div class="aling-end mt-4 mb-4" >
                                <button id="btn-create" type="button" class="btn btn-primary .bg-gradient" onclick="borrarSeccion('eliminar')">Confirmar para Eliminar</button>
                            </div>
                        </div>`
    eliminar.appendChild(tareaE)
   }
   function eliminarTarea(){ 
        inicio()  
    }

   function ingresarTareaFormulario() {
    const tareaE = document.createElement("div")
    tareaE.innerHTML = `<div class="container m-4">

                            <div class="mt-2" id="tareaI">
                                <label for="tarea" class="form-label"></label>Tarea</label>
                                <input  class="form-control" id="tarea"  placeholder="ingrese la tarea" > </input>
                               
                            </div>
                             <div class="mt-2" id="descripcionI >
                                <label for="descrpcion" class="form-label">Descripción</label>
                                <input  class="form-control" id="descrpcion"  placeholder="ingrese la descrpción de la tarea"  rows="3" > </input>
                              
                            </div>
                            <div class="aling-end mt-4 mb-4" >
                                <button id="btn-create" type="button" class="btn btn-primary .bg-gradient;"  onclick="borrarSeccion('ingresar')">Agregar</button>
                            </div>
                        </div>
                        `
    ingresar.appendChild(tareaE)
    borrarSeccion("boton")
   }
 
   function ingresarTarea(){  
    inicio()
   } 

   function borrarSeccion(seccion){
    const borrar=document.getElementById(seccion) 
    console.log(borrar)
    borrar.innerHTML =`<div class="container m-4">
                        <h3>Sección ${seccion}</h3>
                        </div>`
    console.log(borrar)  
   }

   function inicio()  {
   const cantidadTareas=tareas.length
   if (cantidadTareas===0) 
    { ingresarTareaFormulario() }
   else
     {listarTareas()}
   }

   window.onload = function() { 
    agregarTarea("Hoy", "Sacar la basura");
    agregarTarea("Mañana", "Depositar en el banco");
    agregarTarea("Hoy", "Pagar cuentas");
    inicio() 
   }