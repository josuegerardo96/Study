// Creación de una clase
// En js no existen las clases ni objetos exactamente, 
// sólo son funciones estructuradas de esa forma


/*
      El modelo opera sobre un objeto lógico que maneja toda la estructura del trabajo

*/


export default class model{

      // crea el objeto, listas y el id de cada uno
      constructor(){
            this.view = null;

            // Va guardar los elementos en formato JSON
            this.todos = JSON.parse(localStorage.getItem('todos'));

            // Si se borra todo, crea un objeto por defecto y se mete a la lista
            if(!this.todos || this.todos.length < 1){

                  // Objeto
                  this.todos = [
                        {
                              id: 0,
                              title: 'Learn JS',
                              description: 'Watch JS Tutorials',
                              completed: false,
                        }
                  ]

                  // Luego del primero objeto, se establece el ID para el próximo
                  this.currentId = 1;
            }else{
                  // Id para el último elemento que se inserta
                  this.currentId = this.todos[this.todos.length - 1].id + 1;
            }
            
      }
      
      // Obtiene una vista
      setView(view){
            this.view = view;
      }

      // Retorna la lista de elementos
      getTodos(){
            return this.todos;
      }


      // Usa el localStorage del navegador para guardar los archivos de tipo JSON
      save(){
            localStorage.setItem('todos',JSON.stringify(this.todos));
      }


      // Busca una fila por medio de su ID
      findTodo(id){
            return this.todos.findIndex((todo)=>todo.id===id);
      }


      // Verifica si esa fila está completada, se lanza cuando se toca sobre el checkbox
      toggleCompleted(id){
            const index = this.findTodo(id);
            const todo = this.todos[index];
            todo.completed = !todo.completed;
            console.log(this.todos);

            //Guarda los cambios
            this.save();
      }


      editTodo(id, values){

            // encuentra el objeto que se anda buscando
            const index = this.findTodo(id);

            // Cambia los valores del todo mediante su index
            Object.assign(this.todos[index], values);

            // Guarda los cambios
            this.save();
      }



      // Crea el objeto principal
      addTodo(title, description){
            // Un objeto
            const todo = {
                  id: this.currentId++,
                  title,            // No hace falta asignarle si se llaman igual
                  description,      // Lo mismo que el de arriba
                  completed: false,
            }
            this.todos.push(todo);
            console.log(todo['id']);
            
            
            //Guarda los datos del objeto

            this.save();
            // Copia el objeto y lo devuelve
            return {...todo};
      }


      // Elimina el objeto de la lista de objetos
      removeTodo(id){
            const index = this.findTodo(id);

            // Quitame de la lista este elemento
            this.todos.splice(index, 1); 
            this.save();
      }
}