
// Se exporta la clase para que la use la vista
export default class AddTodo{

      // Constructor con título, descripción y botón de agregar
      constructor(){
            this.btn = document.getElementById('add');
            this.title = document.getElementById('title');
            this.description = document.getElementById('description');
      }

      // Función que se dispara cuando mandan a llamar el botón desde la función en el view
      onClick(callback){

            // Dispara el botón
            this.btn.onclick = () => {
                  if(title.value === '' || description.value === ''){
                        // Deja de tapar el anuncio de bootstrap de error
                        // alert.classList.remove('d-none');
                        // De esta forma entra al texto del elemento
                        // alert.innerText = 'Title and description required';
                        // return;
                        console.error('incorrecto');
                  } else{
                        
                        callback(this.title.value, this.description.value);
                  }
            }
      }
}