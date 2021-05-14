

// Importa los elementos gráficos de titulo, descripción y botón
// además de una función que se manda a llamar cuando el botón es presionado
import AddTodo from './components/add-todo.js';


// Agrega el modal que no es más que el formulario de edición cuando vamos a editar un elemento
import Modal from './components/modal.js';

/*
      EL view se encarga de crear modelo, conectar con la tabla y ejercer funciones de 
      eliminar y agregar sobre esta (Dibujando aquí mismo el cómo se verá cada fila de la tabla)
*/




// Exporta la clase view
export default class View{

      // Crea un modelo, conecta con la tabla, añade elementos del add-todo
      constructor(){
            this.model = null;
            this.table = document.getElementById('table');

            // Importación de la clase (y todos los elementos) de addTodo
            this.addTodoForm = new AddTodo();

            // Crea objeto del modal
            this.modal = new Modal();

            // Le pasa a la función que está en add-todo la función que está aquí
            // que se encarga de cargar los elementos
            this.addTodoForm.onClick(
                  (title,description) => this.addTodo(title,description)
            );
            
            // CUando se clica en el "save" del formulario se dispara esto
            this.modal.onClick((id, values) => this.editTodo(id, values));
            
            
      }

      // Recibe un modelo
      setModel(model){
            this.model = model;
      }


      // edita los elementos de la fila que se haya editado
      editTodo(id, values){

            // Hace cambios en la lógica (archivos internos)
            this.model.editTodo(id,values);

            //Cambios en la vista
            //Se accede a la fila
            const row = document.getElementById(id);

            //Cambia los eelmentos de cada parte de la fila
            row.children[0].innerText = values.title;
            row.children[1].innerText = values.description;
            row.children[2].children[0].checked = values.completed;
            
      }

      // Actualiza los elementos en el index
      render(){
            const todos = this.model.getTodos();
            todos.forEach((todo) => this.createRow(todo));
      }

      // Carga una constante con el objeto que se crea en modelo
      addTodo(title, description){
            const todo = this.model.addTodo(title, description);
            //Crea una fila con la función que está más abajo y la carga con el objeto
            this.createRow(todo);
      }

      // Verifica si el objeto del modelo está completado según el id
      toggleCompleted(id){
            this.model.toggleCompleted(id);
      }

      // Remueve una fila
      removeTodo(id){

            // Remover de la lista de objetos
            this.model.removeTodo(id);

            // Remueve de la vista
            document.getElementById(id).remove();
      }


      // Crea una fila cargada con el objeto todo
      createRow(todo){

            // Crea una fila
            const row = table.insertRow();
						
		// Se le da un id a esa fila
            row.setAttribute('id',todo.id);

		// Se crea el diseño de la fila y lo que tendrá adentro
            row.innerHTML = `
                  <td>${todo.title}</td>
                  <td>${todo.description}</td>
			            
                  <td class="text-center">
                 
                  </td>
                  <td class="text-right">

                  </td>
            
            `;


            // Creación manual del Checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.onclick = () => this.toggleCompleted(todo.id);
            row.children[2].appendChild(checkbox);


            // Creación manual del botón de editado
            const editBtn = document.createElement('button');
            editBtn.classList.add('btn','btn-primary','mb-1');
            editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
            // Es una forma de decir "Lanza el formulario" y escondelo cuando esté listo
            editBtn.setAttribute('data-toggle','modal');
            editBtn.setAttribute('data-target','#modal');
            
            // Guarda los cambios en el modelo lógico
            editBtn.onclick = () => this.modal.setValues(todo);
            row.children[3].appendChild(editBtn);



		// Se crea el botón de borrado
            const removeBtn = document.createElement('button');
						
		// Se le dan valores Bootstrap para que tenga forma bonita
            removeBtn.classList.add('btn','btn-danger','mb-1','ml-1');

		// Se le agrega el icono
            removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
						
		// Se le da función al botón
            removeBtn.onclick = () => this.removeTodo(row.getAttribute('id'));
            

		//Se mete dentro de la fila que se creo previamente
            row.children[3].appendChild(removeBtn);

      }


}