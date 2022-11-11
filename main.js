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
  tareaE.innerHTML = `<div class="border rounded-top bg-secondary text-bg-secondary fw-bold">
                        <div class="container row " id="lista">
                            <div class="col" id="tarea">
                            Tarea
                            </div>
                            <div class="col" id="descripcion">
                            Descripción
                            </div>
                            <div class="col">
                            </div>   
                        </div>  
                    </div>`

    listar.appendChild(tareaE)
}

function listarTareaFormulario(tarea,idx) {
    const tareaE = document.createElement("div")
    tareaE.innerHTML = `<div class="border" id="${idx}">
                            <div class="container  row row-cols-3 border-dark" id="lista" >
                                <div class="col-2" id="tareaL">
                                    ${tarea.tarea}
                                </div>
                                <div class="col-8" id="descripcionL ">
                                    ${tarea.descripcion}
                                </div>
                                <div class="col-2">         
                                    <button id="btn-update" type="button" class="btn btn-secondary m-1" style="width:4rem; --bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" 
                                    onclick="modificarTareaFormulario(${idx})">Editar</button>
                                    <button id="btn-delete" type="button" class="btn btn-secondary m-1" style="width:4rem;--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" 
                                    onclick="eliminarTareaFormulario(${idx})">Eliminar</button>
                                </div>
                            </div>
                      </div>`
    listar.appendChild(tareaE)
   }

   function botonAgregar() {
    const tareaE =  document.createElement("div")
    tareaE.innerHTML = `<div class="container">
                            <div class="aling-end " >
                                <button id="btn-create" type="button" class="btn btn-secondary .bg-gradient" 
                                onclick="ingresarTareaFormulario()">Nueva Tarea</button>
                            </div>
                        </div>
                        `
    boton.appendChild(tareaE)
   }

   function listarTareas()
   {
 
    borrarSeccion('listar')
    titulos()
    tareas.forEach((v,idx)=>listarTareaFormulario(v,idx))
    botonAgregar()
   }

   function modificarTareaFormulario(idx ) {  
    limpiar()
    const tareaE = document.createElement("div")
    tareaE.innerHTML = `<div class="card text-bg-light mb-3 fw-bold" >
                        <div class="card-header bg-secondary text-bg-secondary">Modificar</div>
                            <div class="card-body">
                            <form id="formModificar">
                                <div class="mt-2" id="tarea">
                                    <label for="tarea" class="form-label fw-bold">Tarea</label>
                                    <input  class="form-control" id="tareaM" value="${tareas[idx].tarea}"> </input>
                                
                                </div>
                                <div class="mt-2" id="descripcion" >
                                    <label for="descripcion" class="form-label fw-bold">Descripción</label>
                                    <input  class="form-control" id="descripcionM"  rows="3" value="${tareas[idx].descripcion}"> </input>
                                
                                </div>
                                <div class="aling-end mt-4 mb-4" >
                                    <button id="btn-create" type="button" class="btn btn-outline-secondary" 
                                    onclick="inicio()">Cancelar</button>
                                    <button id="btn-create" type="button" class="btn btn-secondary .bg-gradient" 
                                    onclick="modificarTarea(${idx})">Actualizar</button>

                                </div>
                            </form>
                            </div>
                    </div>
                    `

    modificar.appendChild(tareaE)
   
   }

   function modificarTarea(idx){ 
    const tarea=document.querySelector("#tareaM")
    const descripcion=document.querySelector("#descripcionM")
    tareas[idx].tarea=tarea.value
    tareas[idx].descripcion=descripcion.value
    limpiar() 
    listarTareas()
   }

   function eliminarTareaFormulario(idx) { 
    limpiar() 
    const tareaE = document.createElement("div")
    tareaE.innerHTML = `<div class="card text-bg-light mb-3 fw-bold" >
                            <div class="card-header bg-secondary text-bg-secondary">Eliminar</div>
                                <div class="card-body"
                                <form id="formEliminar">
                                    <div class="mt-2" id="tareaE">
                                        <label for="tarea" class="form-label fw-bold">Tarea</label>
                                        <input  class="form-control" id="tarea"  value="${tareas[idx].tarea}" > </input>
                                    
                                    </div>
                                    <div class="mt-2" id="descripcionE >
                                        <label for="descripcion" class="form-label fw-bold">Descripción</label>
                                        <input  class="form-control" id="descripcion"  rows="3"  value="${tareas[idx].descripcion}"> </input>
                                    
                                    </div>
                                    <div class="aling-end mt-4 mb-4" >
                                        <button id="btn-create" type="button" class="btn btn-outline-danger" 
                                        onclick="inicio()">Cancelar</button>
                                        <button id="btn-create" type="button" class="btn btn-danger .bg-gradient" 
                                        onclick="eliminarTarea(${idx})">Confirmar</button>

                                    </div>
                                    </form>
                                </div>
                        </div>
                        `
        eliminar.appendChild(tareaE) 
   }


   function eliminarTarea(idx){
        tareas.splice(idx,1)
        inicio()  
    }

   function ingresarTareaFormulario() {
    limpiar()
    const tareaE = document.createElement("div")
    tareaE.innerHTML = `<div class="card text-bg-light mb-3 fw-bold" >
                            <div class="card-header bg-secondary text-bg-secondary">Ingresar</div>
                            <div class="card-body">
                            <form id="formIngresar">
                                <div class="mt-2" id="tarea">
                                    <label for="tarea" class="form-label fw-bold">Tarea</label>
                                    <input  class="form-control" type="text" id="tareaI"  name="tareaI" placeholder="ingrese la tarea" > </input>
                                </div>
                                <div class="mt-2" id="descripcion" >
                                    <label for="descripcion" class="form-label fw-bold">Descripción</label>
                                    <input  class="form-control" type="text" id="descripcionI" name="descripcionI" placeholder="ingrese la descrpción de la tarea"  rows="3" > </input>
                                
                                </div>
                                <div class="aling-end mt-4 mb-4" >
                                    <button id="btn-create" type="button" class="btn btn-outline-secondary" 
                                    onclick="inicio()">Cancelar</button>
                                    <button id="btn-create" type="button" class="btn btn-secondary .bg-gradient;"  
                                    onclick="ingresarTarea()">Agregar</button>
                                </div>
                                </form>
                            </div>
                        </div>
                        `
    ingresar.appendChild(tareaE)
    borrarSeccion("boton")
   }
 
   function ingresarTarea(){  
    const tarea=document.querySelector("#tareaI")
    const descripcion=document.querySelector("#descripcionI")
    agregarTarea(tarea.value, descripcion.value);
    inicio()
   } 

   function borrarSeccion(seccion){
    const borrar=document.getElementById(seccion) 
    borrar.innerHTML = "" /*`<div class="container m-4">
                       </div>`*/ 
   }

   function limpiar() {
    borrarSeccion('listar')
    borrarSeccion('boton')
    borrarSeccion('eliminar')
    borrarSeccion('modificar')
    borrarSeccion('ingresar')
   }

   function inicio()  {
   const cantidadTareas=tareas.length
   limpiar()
   if (cantidadTareas===0) 
    { ingresarTareaFormulario() }
   else
     {   
        listarTareas()}
   }

   window.onload = function() { 
    inicio() 
   }