<?php
$ruta = "../assets/imagenes_cobertura/cobertura";
$contenido = scandir($ruta);
$contenido = array_diff($contenido, array('.', '..'));
$arr = array();
foreach ($contenido as $item) {
  $arr[] = "../assets/imagenes_cobertura/cobertura/" . $item;
}
echo json_encode($arr);
