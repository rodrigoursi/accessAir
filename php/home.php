<?php
$ruta = "../assets/banners";
$contenido = scandir($ruta);
$contenido = array_diff($contenido, array('.', '..'));
$arr = array();
foreach ($contenido as $item) {
  $arr[] = "./assets/banners/" . $item;
}
echo json_encode($arr);
