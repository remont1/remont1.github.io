 $(function(){
	
	var note = $('#note'),
		ts = new Date(2012, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		ts = (new Date()).getTime() + 1*6*60*60*1000;
		newYear = false;
	}
		
	$('.counter').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			note.html(message);
		}
	});
	$('.counter2').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			note.html(message);
		}
	});
	$('.counter3').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			note.html(message);
		}
	});
	
});
function validateEmail(email) { 
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
$(document).ready(function() {	
	$('.nameinp').focus(function(){if($(this).val()=='Введите имя'){$(this).val('');};});
	$('.nameinp2').focus(function(){if($(this).val()=='Введите имя'){$(this).val('');};});
	$('.email').focus(function(){if($(this).val()=='Ваш e-mail'){$(this).val('');};});
	$('.adress').focus(function(){if($(this).val()=='Адрес доставки'){$(this).val('');};});
	$('.comm').focus(function(){if($(this).val()=='Ваш комментарий'){$(this).val('');};});
	$('.nameinp').blur(function(){if($(this).val()==''){$(this).val('Введите имя');};});
	$('.nameinp2').blur(function(){if($(this).val()==''){$(this).val('Введите имя');};});
	$('.phoneinp').blur(function(){if($(this).val()=='(___) ___-____'){$(this).val('Введите телефон');};});
	$('.email').blur(function(){if($(this).val()==''){$(this).val('Ваш e-mail');};});
	$('.adress').blur(function(){if($(this).val()==''){$(this).val('Адрес доставки');};});
	$('.comm').blur(function(){if($(this).val()==''){$(this).val('Ваш комментарий');};});
	$('.s_submit').click(function() {
		filled = 1;
		$(this).parent().children('.sinp').each(function() {
			if(this.value.replace(/^\s+|\s+$/g, '')=='' || this.value=='Введите имя' || this.value=='Введите имя' || this.value=='Введите телефон' || this.value=='Адрес доставки') {$(this).effect('highlight');filled=0;}
		});
		var q=$(this).parent().children('.email');
		if(!validateEmail(q.val())&&(q.val()!='')) {q.effect('highlight');filled=0;}
		if(filled==1) {
		
		$(this).parent().submit();
		$('#dialogform').dialog('close');
		$('#dialogform2').dialog('close');
		}
	});
	$('#dialogform').dialog({autoOpen: false,
	title:"Заказ",
    height: 300,
    width: 400,
    modal: true,
	buttons:{},
	resizable:false
	});
	$('#dialogform2').dialog({autoOpen: false,
	title:"Заказ звонка",
    height: 300,
    width: 400,
    modal: true,
	buttons:{},
	resizable:false
	});
	$('.formshow').click(function(){
		$('#dialogform').dialog('open');
		$('#dialogform .nameinp').blur();
	});
	$('.formshow2').click(function(){
		$('#dialogform2').dialog('open');
		$('#dialogform2 .nameinp2').blur();
	});
	updateDate();
	setInterval(updateDate, 1000);
});
function setSender(a) {
	$('#senderid').val(a);
}