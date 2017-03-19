jQuery(document).ready(function($) {
	$("#form_first_ajax").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					result = '<div class="show_hide">Ваша заявка успешно отправлена</div>';
					formReset();
				} else {
					result = msg;
				}
				$('#note_first').html(result);
			}
		});
		return false;
	});
});

jQuery(document).ready(function($) {
	$("#form_second_ajax").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					result = '<div class="show_hide">Ваша заявка успешно отправлена</div>';
					formReset();
				} else {
					result = msg;
				}
				$('#note_second').html(result);
			}
		});
		return false;
	});
});

jQuery(document).ready(function($) {
	$("#form_third_ajax").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					result = '<div class="show_hide">Ваша заявка успешно отправлена</div>';
					formReset();
				} else {
					result = msg;
				}
				$('#note_third').html(result);
			}
		});
		return false;
	});
});

jQuery(document).ready(function($) {
	$("#form_fourth_ajax").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					result = '<div class="show_hide">Ваша заявка успешно отправлена</div>';
					formReset();
				} else {
					result = msg;
				}
				$('#note_fourth').html(result);
			}
		});
		return false;
	});
});

jQuery(document).ready(function($) {
	$("#form_six_ajax").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					result = '<div class="show_hide">Ваша заявка успешно отправлена</div>';
					formReset();
				} else {
					result = msg;
				}
				$('#note_six').html(result);
			}
		});
		return false;
	});
});

jQuery(document).ready(function($) {
	$("#form_add_ajax").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					result = '<div class="show_hide">Ваша заявка успешно отправлена</div>';
					formReset();
				} else {
					result = msg;
				}
				$('#note_add').html(result);
			}
		});
		return false;
	});
});

function formReset(){
	var a=document.forms.form_first_ajax; 
	a.reset();
	var b=document.forms.form_second_ajax;
	b.reset(); 
	var c=document.forms.form_third_ajax;
	c.reset();
	var d=document.forms.form_fourth_ajax;
	d.reset();
	var e=document.forms.form_add_ajax;
	e.reset();
	var f=document.forms.form_six_ajax;
	f.reset();
}