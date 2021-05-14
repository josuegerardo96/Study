import Alert from './alert.js'

// Se exporta la clase para que la use la vista
export default class AddTodo{

      // Constructor con título, descripción y botón de agregar
      constructor(){
            this.btn = document.getElementById('add');
            this.title = document.getElementById('title');
            this.description = document.getElementById('description');
            this.alert = new Alert('alert');
      }

      // Función que se dispara cuando mandan a llamar el botón desde la función en el view
      onClick(callback){

            // Dispara el botón
            this.btn.onclick = () => {
                  if(this.title.value === '' || this.description.value === ''){
                        this.alert.show('Title and description are requiredd');
                  } else{
                        
                        callback(this.title.value, this.description.value);
                  }
            }
      }
}