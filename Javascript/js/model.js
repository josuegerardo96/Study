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
            this.todos = [];
            this.currentId = 1;
      }
      
      // Obtiene una vista
      setView(view){
            this.view = view;
      }

      // Retorna la lista de elementos
      getTodos(){
            return this.todos;
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

            // Expande el objeto
            return {...todo};
      }


      // Elimina el objeto de la lista de objetos
      removeTodo(id){
            const index = this.findTodo(id);

            // Quitame de la lista este elemento
            this.todos.splice(index, 1); 
      }
}