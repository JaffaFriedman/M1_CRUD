/*
Aplicación CRUD
Jaffa Friedman
*/
let personas=[]
 
 
function agregarPersona(nombre,correo,fono) {
   if (personas===null) personas=[]
    persona ={ 
        nombre: nombre,
        correo: correo,
        fono: fono,  }
        personas.push(persona)
}

function  titulos() {
    limpiar()
    const bloque = document.createElement("div")
    bloque.innerHTML = `<div class="border rounded-top bg-secondary text-bg-secondary fw-bold">
                            <div class="container ml-2 ml-2 row row-cols-1  row-cols-xl-4 " id="lista">
                                <div class="col" id="nombre">Nombre</div>
                                <div class="col" id="correo">Correo</div>
                                <div class="col" id="fono">Teléfono</div> 
                                <div class="col" id="botones"></div> 
                            </div>  
                        </div>`
        listar.appendChild(bloque)
}

function formListar(persona,idx) {
    const bloque = document.createElement("div")
    bloque.innerHTML = `<div class="border" id="${idx}">
                            <div class="container ml-2 row row-cols-1  row-cols-xl-4 border-dark" id="lista" >
                                <div class="col" id= "nombreL">${persona.nombre} </div>
                                <div class="col"  id="correoL ">${persona.correo}</div>
                                <div class="col"  id="fonoL ">${persona.fono}</div>
                                <div class="col">         
                                    <button id="btn-update" type="button" class="btn btn-secondary m-1" style="width:4rem; --bs-btn-padding-y: .25rem; 
                                    --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" 
                                    onclick="formModificar(${idx})">Editar</button>
                                    <button id="btn-delete" type="button" class="btn btn-secondary m-1" style="width:4rem;--bs-btn-padding-y: .25rem; 
                                    --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" 
                                    onclick="formEliminar(${idx})">Eliminar</button>
                                </div>
                            </div>
                      </div>`
    listar.appendChild(bloque)
 }

   function botonAgregar() {
        const bloque =  document.createElement("div")
        bloque.innerHTML = `<div class="container">
                                <div class="aling-end " >
                                    <button id="btn-create" type="button" class="btn btn-secondary .bg-gradient" 
                                    onclick="formIngreso()">Nuevo Cliente</button>
                                </div>
                            </div>`
        boton.appendChild(bloque)
   }

   function listarPersonas() {  
            titulos()
            personas.forEach((v,idx)=>formListar(v,idx))
            botonAgregar()
   }

   function formModificar(idx ) {  
        limpiar()
        const bloque = document.createElement("div")
        bloque.innerHTML = `<div class="card text-bg-light mb-3 ml-2 fw-bold" >
                                <div class="card-header bg-secondary text-bg-secondary">Modificar</div>
                                    <div class="card-body">
                                    <form id="formModificar">
                                        <fieldset enabled>
                                            <div class="mt-2" id= "nombre">
                                                <label for= "nombre" class="form-label fw-bold">Nombre</label>
                                                <input  class="form-control" id="nombreM"  type="text" value="${personas[idx].nombre}" > </input>                               
                                            </div>
                                            <div class="mt-2" id="correo" >
                                                <label for="correo" class="form-label fw-bold">Correo</label>
                                                <input  class="form-control" id="correoM" type="email" value="${personas[idx].correo}" > </input>                               
                                            </div>
                                                <div class="mt-2" id="fono" >
                                                <label for="fono" class="form-label fw-bold">Teléfono</label>
                                                <input  class="form-control" id="fonoM"  type="number" value="${personas[idx].fono}" > </input>                               
                                            </div>
                                        </fieldset>
                                        <div class="aling-end mt-4 mb-4" >
                                            <button id="btn-create" type="button" class="btn btn-outline-secondary" 
                                            onclick="refrescar()">Cancelar</button>
                                            <button id="btn-create" type="button" class="btn btn-secondary .bg-gradient" 
                                             onclick="modificarPersona(${idx})">Actualizar</button>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                        </div>`
        modificar.appendChild(bloque)
   }

   function modificarPersona(idx){ 
        const nombre=document.querySelector("#nombreM")
        const correo=document.querySelector("#correoM")
        const fono=document.querySelector("#fonoM")
        nombre.value=nombre.value.trim()
        if (validar(nombre.value,correo.value,fono.value)) 
        {   personas[idx].nombre=nombre.value
            personas[idx].correo=correo.value
            personas[idx].fono=fono.value
            grabarStorage()
       }
   }

   function formEliminar(idx) { 
    limpiar()
    const bloque = document.createElement("div")
    bloque.innerHTML = `<div class="card text-bg-light mb-3 ml-2 fw-bold" >
                            <div class="card-header bg-secondary text-bg-secondary">Confirme para eliminar</div>
                                <div class="card-body"
                                <form id="formEliminar">
                                        <fieldset disabled>
                                            <div class="mt-2" id= "nombreE">
                                                <label for= "nombre" class="form-label fw-bold">Nombre</label>
                                                <input  class="form-control" id= "nombre"  value="${personas[idx].nombre}" > </input>                                
                                            </div>
                                            <div class="mt-2" id="correoE >
                                                <label for="correo" class="form-label fw-bold">Correo</label>
                                                <input  class="form-control" id="correo"   value="${personas[idx].correo}"> </input>                               
                                            </div>
                                            <div class="mt-2" id="fonoE >
                                                <label for="fono" class="form-label fw-bold">Teléfono</label>
                                                <input  class="form-control" id="fono"    value="${personas[idx].fono}"> </input>                               
                                            </div>
                                        </fieldset>
                                        <div class="aling-end mt-4 mb-4" >
                                            <button id="btn-create" type="button" class="btn btn-outline-secondary" 
                                            onclick="refrescar()">Cancelar</button>
                                            <button id="btn-create" type="button" class="btn btn-secondary .bg-gradient" 
                                            onclick="eliminarPersona(${idx})">Confirmar</button>
                                        </div>
                                 
                                </form>
                            </div>
                        </div>`
        eliminar.appendChild(bloque) 
   }

   function eliminarPersona(idx){
        personas.splice(idx,1)
        grabarStorage()
    }

   function formIngreso() {
     limpiar()
     const bloque = document.createElement("div")
     bloque.innerHTML = `<div class="card text-bg-light mb-3 ml-2 fw-bold" >
                             <div class="card-header bg-secondary text-bg-secondary">Ingresar</div>
                             <div class="card-body">
                             <form id="formIngresar">
                               <fieldset enabled>
                                 <div class="mt-2" id= "nombre">
                                     <label for= "nombre" class="form-label fw-bold">Nombre</label>
                                     <input  class="form-control" type="text" id= "nombreI"  name= "nombreI" placeholder="Ingrese el nombre" > </input>
                                 </div>
                                 <div class="mt-2" id="correo" >
                                     <label for="correo" class="form-label fw-bold">Correo</label>
                                     <input  class="form-control" type="email" id="correoI" name="correoI" placeholder="Ingrese el correo"   > </input>
                                 </div>
                                 <div class="mt-2" id="fono" >
                                    <label for="fono" class="form-label fw-bold">Teléfono</label>
                                    <input  class="form-control"  id="fonoI"  type="number" name="fonoI" placeholder="Ingrese el teléfono"   > </input>
                                </div>
                                 <div class="aling-end mt-4 mb-4" >
                                     <button id="btn-create" type="button" class="btn btn-outline-secondary" 
                                     onclick="refrescar()">Cancelar</button>
                                     <button id="btn-create" type="button" class="btn btn-secondary .bg-gradient;"  
                                     onclick="ingresarPersona()">Agregar</button>
                                 </div>
                                 </form>
                             </div>
                         </div>`
     ingresar.appendChild(bloque)
   }
 
 
   function ingresarPersona(){  
     const nombre=document.querySelector("#nombreI")
     const correo=document.querySelector("#correoI")
     const fono=document.querySelector("#fonoI")
     nombre.value=nombre.value.trim()
     if (validar(nombre.value,correo.value,fono.value)) 
     {  agregarPersona(nombre.value, correo.value,  fono.value);
        grabarStorage()
    }
} 
 
function validar(nombre,correo,fono)
{  
    if (!nombre&&!correo&&!fono) { 
        alert("Debe ingresar todos los datos")  
        return false  }
   if (!correo&&!fono) { 
       alert("Le falta ingresar el correo y el teléfono")
       return false  }
   if (!nombre&&!correo) { 
       alert("Le falta ingresar el nombre y el correo")
       return false  }
   if (!nombre&&!fono) { 
        alert("Le falta ingresar el nombre y el teléfono")
        return false  }
  if (!fono&&!correo) { 
        alert("Le falta ingresar el correo y el teléfono")
        return false  }
   if (!nombre)  { 
       alert("Le falta ingresar el nombre")  
       return false  }
   if (!correo)  { 
       alert("Le falta ingresar el correo")  
       return false  }
    if (!validaCorreo(correo))  { 
        alert("Formato de Correo inválido, debe tener una @, al menos 1 caracter despues de @, luego un punto y al menos un caracter despues del punto")  
        return false  }
   if (!fono)   { 
       alert("Debe ingresar el teléfono")
        return false  }       
   if (fono.length<8){ 
           alert("Al telefono le faltan digitos, el largo minimo es 8")
           return false  }  
   if (fono.length>9){ 
           alert("Al telefono le sobran digitos, el largo maximo es 9")
           return false  }  

   return true
}
function validaCorreo(correo)
/*
Validacion simple del correo
*/
{ const i= correo.indexOf("@")
  const k= correo.lastIndexOf("@")
  const j= correo.lastIndexOf(".") 
   if(i!=k) //mas de 1 @
    return false
  if (i < 1 ) // no hay nada antes de la @
     return false
  if (j <= i+1 || j>=correo.length-1)  // no tiene un punto despues de la @ o no tiene nada despues del punto
     return false
  return true
}
 
  function borrarSeccion(seccion){
        const borrar=document.getElementById(seccion) 
        borrar.innerHTML = "" 
   }

   function limpiar() {
        borrarSeccion('listar')
        borrarSeccion('boton')
        borrarSeccion('eliminar')
        borrarSeccion('modificar')
        borrarSeccion('ingresar') 
    }  

   function leerStorage()

   {   
       const personasJ = localStorage.getItem('personas');
        personas=JSON.parse(personasJ)      
   }

   function grabarStorage()
   {
        const personasJ = JSON.stringify(personas);
        localStorage.setItem('personas', personasJ);
        refrescar()
   }
   
   function refrescar()  {
        leerStorage() 
        if (personas===null)  //cuando no ha sido grabado nunca el el Storage 
        {   
            titulos()
            botonAgregar() 
        }
        else listarPersonas()
   }

   window.onload = function() {
    refrescar()
}
 