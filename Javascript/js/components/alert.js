
// Se conecta con la barra de alerta que tiene el HTML
export default class Alert{

      // Conecta con la barra
      constructor(alertId){
            this.alert = document.getElementById(alertId);
      }

      // En caso de error, destapa la alerta
      show(message){
            this.alert.classList.remove('d-none');
            this.alert.innerText = message;
      }

      // En caso contrario, la tapa otra vez
      hide(){
            this.alert.classList.add('d-none');
      }
}