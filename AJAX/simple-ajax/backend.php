<?php

# Si no está vacío imprima esto
if(isset($_POST)) {
  echo $_POST['username'];
  echo '<br>';
  echo $_POST['password'];
}
  
  #echo 'Working!';

?>
