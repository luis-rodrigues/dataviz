<?php

$to = "luis@brasilidados.com.br";
$subject = "Contato Brasilidados";
$message = $_REQUEST['textarea'];
$email = $_REQUEST['email'];
$headers = "From:" . $email;

mail($to,$subject,$message,$headers);

?>

<html style="height:50px;margin-top:25px;">
<body style="height:30px;">

<link rel="stylesheet" href="formoid-default.css" type="text/css" />
<form class="formoid-default" style="text-align:center;font-size:14px;font-family:'Open Sans','Helvetica Neue','Helvetica',Arial,Verdana,sans-serif;color:#666666;width:480px;" title="Contato enviado">Obrigado. Retornaremos seu contato em 24 horas.</form>

</body>
</html>