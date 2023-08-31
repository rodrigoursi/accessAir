<?php

require("class.phpmailer.php");
require("class.smtp.php");

// Valores enviados desde el formulario
if ( !isset($_POST["nombre"]) || !isset($_POST["email"]) || !isset($_POST["mensaje"]) || !isset($_POST["loc"]) || !isset($_POST["tel"])) {
    die ("Es necesario completar todos los datos del formulario");
}
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$localidad = $_POST["loc"];
$telefono = $_POST["tel"];
$mensaje = $_POST["mensaje"];

// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "dtc020.ferozo.com";  // Dominio alternativo brindado en el email de alta
$smtpUsuario = "info@accessair.com.ar";  // Mi cuenta de correo
$smtpClave = "Caroxx2016";  // Mi contraseña

// Email donde se enviaran los datos cargados en el formulario de contacto
$emailDestino = "info@accessair.com.ar";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 465;
$mail->SMTPSecure = 'ssl';
$mail->IsHTML(true);
$mail->CharSet = "utf-8";


// VALORES A MODIFICAR //
$mail->Host = $smtpHost;
$mail->Username = $smtpUsuario;
$mail->Password = $smtpClave;

$mail->From = $email; // Email desde donde envío el correo.
$mail->FromName = $nombre;
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario
$mail->Subject = "Mensaje desde el formulario de contacto"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$localidadHtml = nl2br($localidad);
$nombreHtml = nl2br($nombre);
$telefonoHtml = nl2br($telefono);
$mail->Body = "{$mensajeHtml} <br /><br />Localidad: {$localidadHtml} <br /><br />Telefono: {$telefonoHtml} <br /><br />Nombre: {$nombreHtml}"; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n Localidad: {$localidad} \n\n Telefono: {$telefono} \n\n Nombre: {$nombre}"; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$estadoEnvio = $mail->Send();
if($estadoEnvio){
    //echo "El correo fue enviado correctamente.";
    header("Location:exitoso.html");
} else {
    echo "Ocurrió un error inesperado.";
}
