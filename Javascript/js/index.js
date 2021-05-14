import Model from './model.js';
import View from './view.js';

// Llamada al DOM principal
document.addEventListener('DOMContentLoaded', function () {

      // Crea un modelo
      const model = new Model();

      // Crea la vista
      const view = new View();

      // Mete la vista en el modelo
      model.setView(view);

      // Mete el modelo en la vista
      view.setModel(model);

      // En estos dos últimos es donde se cruza la lógica (modelo)
      // con los elementos gráficos (vista)
      
})