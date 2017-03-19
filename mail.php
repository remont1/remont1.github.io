<?php
$name = $_POST['contactname'];
$phone = $_POST['contacttelefon'];
$email = $_POST['contactmail'];
$REMOTE_ADDR = $_POST['REMOTE_ADDR'];
$subj = $_POST['subj'];
$to = "triowork@i.ua";
$subject = "$subj";
$message = "Имя пославшего письмо: $name\nТелефон:$phone\nEmail: $email\nIP-адрес: $_SERVER[REMOTE_ADDR]";
mail ($to,$subject,$message,"Content-type:text/plain; charset = utf-8") or print "Не могу отправить письмо !!!";
?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">


<head>
	<title>Заказ звонка</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<link rel="stylesheet" href="script/style.css" type="text/css">
	</head>
	<body align="center">
<h5 style="margin-top:50px;">Спасибо за запрос,<br>наш оператор свяжется<br>с Вами в ближайшее время!</h5>
</body>

</html>