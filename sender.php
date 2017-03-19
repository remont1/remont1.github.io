<?php
	$Subject=$_POST['type'];
    $from = "noreply". $HTTP_HOST;
	


	$to="fliker333@yandex.ru";
	
	$headers  = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: noreply <".$from.">\r\n"; 	

	$msg = '
		<p>	Имя: '.$_POST['name'].'</p>
		<p>	Телефон: '.$_POST['phone'].'</p>
	';

	if(mail($to, $Subject, $msg, $headers))
	{
		echo "<span style='font-size:25px;color:red;'>Сообщение успешно отправлено!</span>";
	}
	else
	{
		echo "Error : Email has not been sent.";
	}	
?>


