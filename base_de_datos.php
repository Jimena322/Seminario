<?php
$servidor = "localhost";
$usuario = "root"; 
$password = "12345678"; 
$base_datos = "seminario_jim";

$conexion = new mysqli($servidor, $usuario, $password, $base_datos);


if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$conexion->set_charset("utf8");
?>