<?php 

header("Access-Control-Allow-Origin: *");

try {
    $pdo = new PDO("mysql:host=raspberry-database.cj5ft43qkfaf.us-west-2.rds.amazonaws.com;dbname=datosSensores", "admin", "=Leomessif50");
}catch (PDOException $e){
    echo $e->getMessage();
}

$sql = "SELECT * FROM datosSensores.Datos order by idDatos desc limit 1";
$resultado = $pdo->query($sql);
$datos = array();
while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
    $datos[] = $row;
}
echo json_encode($datos);

?>