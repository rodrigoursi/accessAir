<?php
$ruta = "../assets/imagenes_galeria/galeria";
$contenido = scandir($ruta);
$contenido = array_diff($contenido, array('.', '..'));
$arr = array();
foreach ($contenido as $item) {
  $arr[] = "../assets/imagenes_galeria/galeria/" . $item;
}
echo json_encode($arr);
