

// Se encarga del apartado de los filtros
export default class Filter{

      // Conecta con los botones de los filtros
      constructor() {
            
            // Los botones de filtro
            this.form = document.getElementById('filters');

            // Botón de búsqueda
            this.btn = document.getElementById('search');
      }

      onClick(callback){
            this.btn.onclick = (e) => {
                  e.preventDefault();

                  // Pasa los botones de filtro a una constante
                  const data = new FormData(this.form);

            
                  callback({
                        // all completed uncompleted -> la opción elegida en el form
                        type: data.get('type'),

                        // Palabra a evaluar
                        word: data.get('words'),
                  })
            }
      }
}