<?php
echo '<meta http-equiv="refresh" content="5; url=http://morcant.ru/">';
$name = $_POST['name'];
$phone = $_POST['phone'];
$REMOTE_ADDR = $_POST['REMOTE_ADDR'];

$to = "repair-team@mail.ru";
$subject = "Заказ звонка";
$message = "Имя пославшего письмо: $name\nТелефон:$phone\nIP-адрес: $_SERVER[REMOTE_ADDR]";
mail ($to,$subject,$message,"Content-type:text/plain; charset = utf-8") or print "Не могу отправить письмо !!!";
?>
<!doctype html>
<html lang="ru">
	<head>
		<meta charset="UTF-8">
		<title>Спасибо за заявку</title>
		<link href="../css/style.css" rel="stylesheet">
	</head>
	<body class="ee">
		<section class="ee-about">
            <article class="ee-about-main">
                <div class="container">
                    <div class="row" style="text-align:center;">
                        <h3>Ваша заявка принята</h3>
                        <div class="col-md-10 col-md-offset-1" style="width:500px;margin:0 auto;">
                            <div class="ee-about-content">
                               <p> Спасибо за запрос, наш оператор свяжется с вами в ближайшее время!</p><br>
								<p>Через 5 сек. вы будете перенаправлены на главную страницу.</p>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="col-md-5">
                                <hr class="hr">
                            </div>
                            
                           
                        </div>
                      
                    </div>
                </div>
            </article>
        </section>
	</body>
</html>
