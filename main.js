
let tareas=[]

function agregarTarea(tarea,descripcion) {
  tarea ={
    
    tarea: tarea,
    descripcion: descripcion, }
    tareas.push(tarea)
}

agregarTarea("Odisea", "Homero");
agregarTarea("La Ilíada", "Homero");
agregarTarea("El Quijote", "Cervantes");

let despliegue=document.getElementById("despliegue") 
console.log(despliegue)
 
function listarTitulos() {
  const tareaE = document.createElement("div")
  tareaE.innerHTML = `<div class="row mt-4 text-light bg-primary" id="lista">
                        <div class="col" id="tarea">
                         Tarea
                        </div>
                        <div class="col" id="descripcion">
                         Descripcion
                         </div>
                        <div class="col">
                          
                        </div>
                         
                  </div>`

    despliegue.appendChild(tareaE)
}

function listarTarea(tarea,idx) {
    const tareaE = document.createElement("div")
    tareaE.innerHTML = `<div class="row row-cols-3 mb-4 p-2 bg-primary bg-opacity-10" id="lista">
                          <div class="col" id="tarea">
                              ${tarea.tarea}
                          </div>
                          <div class="col" id="descripcion" >
                              ${tarea.descripcion}
                              </div>
                          <div class="col">
                              <button id="btn-update" type="button" class="btn btn-primary">Modificar</button>
                              <button id="btn-delete" type="button" class="btn btn-primary">Eliminar</button>
                          </div>
                      </div>`
  
      despliegue.appendChild(tareaE)
 
  }

  listarTitulos()
  tareas.forEach(v=>listarTarea(v))
  console.log(despliegue)