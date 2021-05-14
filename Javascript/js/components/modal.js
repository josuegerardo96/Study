
import Alert from './alert.js';


// Es meramente para el manejo del formulario de edición

export default class Modal{


      // Se conecta con los elementos de cada parte del formulario de edición
      constructor(){
            this.title = document.getElementById('modal-title');
            this.description = document.getElementById('modal-description');
            this.btn = document.getElementById('modal-btn');
            this.completed = document.getElementById('modal-completed');
            this.alert = new Alert('modal-alert');
      }


      // Le pasa el elemento a editar y lo edita
      setValues(todo){
            this.todo = todo;
            this.title.value = todo.title;
            this.description.value = todo.description;
            this.completed.checked = todo.completed;
      }


      // Se llama cuando se presiona el botón guardar
      onClick(callback){
            this.btn.onclick = () => {
       
                  if(!this.title.value || !this.description.value){
                        this.alert.show('Title and description required');
                        return;
                  }

                  // Algo de bootstrap (ya no se usa) que es para ocultar el formulario
                  $('#modal').modal('toggle');

                  // Actualiza los elementos del objeto de manera lógica
                  callback(this.todo.id, {
                        title: this.title.value,
                        description: this.description.value,
                        completed: this.completed,
                  }
                  );
            }
      }
}