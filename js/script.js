 $(document).ready(function () {
  $(".main-form-button").on("click", function() {
    var name1 = $(".name1").val();
    var phone1 = $(".phone1").val();

    if (name1 == 0 && phone1 == 0) {
      $(this).attr("disabled", "disabled");
      $(".main-form-input").css("border", "3px solid rgba(255,0,0,.5)");
    }
    else if (name1 == 0 && phone1 != 0) {
      $(this).attr("disabled", "disabled");
      $(".name1").css("border", "3px solid rgba(255,0,0,.5)");      
    }
    else if (name1 != 0 && phone1 == 0) {
      $(this).attr("disabled", "disabled");
      $(".phone1").css("border", "3px solid rgba(255,0,0,.5)");     
    }
    else {
      $(this).removeAttr("disabled");
    }
  });
  $(".main-form-input").on("click", function() {
    $(this).css("border", "none");
    $(".main-form-button").removeAttr("disabled");
  }); 



  $(".second-form-button").on("click", function() {
    var name2 = $(".name2").val();
    var phone2 = $(".phone2").val();

    if (name2 == 0 && phone2 == 0) {
      $(this).attr("disabled", "disabled");
      $(".second-form-input").css("border", "3px solid rgba(255,0,0,.5)");
    }
    else if (name2 == 0 && phone2 != 0) {
      $(this).attr("disabled", "disabled");
      $(".name2").css("border", "3px solid rgba(255,0,0,.5)");      
    }
    else if (name2 != 0 && phone2 == 0) {
      $(this).attr("disabled", "disabled");
      $(".phone2").css("border", "3px solid rgba(255,0,0,.5)");     
    }
    else {
      $(this).removeAttr("disabled");
    }
  });
  $(".second-form-input").on("click", function() {
    $(this).css("border", "none");
    $(".second-form-button").removeAttr("disabled");
  }); 




  $(".third-form-button").on("click", function() {
    var name3 = $(".name3").val();
    var phone3 = $(".phone3").val();

    if (name3 == 0 && phone3 == 0) {
      $(this).attr("disabled", "disabled");
      $(".third-form-input").css("border", "3px solid rgba(255,0,0,.5)");
    }
    else if (name3 == 0 && phone3 != 0) {
      $(this).attr("disabled", "disabled");
      $(".name3").css("border", "3px solid rgba(255,0,0,.5)");      
    }
    else if (name3 != 0 && phone3 == 0) {
      $(this).attr("disabled", "disabled");
      $(".phone3").css("border", "3px solid rgba(255,0,0,.5)");     
    }
    else {
      $(this).removeAttr("disabled");
    }
  });
  $(".third-form-input").on("click", function() {
    $(this).css("border", "none");
    $(".third-form-button").removeAttr("disabled");
  }); 



  $(".pop-up-form-button").on("click", function() {
    var name4 = $(".name4").val();
    var phone4 = $(".phone4").val();

    if (name4 == 0 && phone4 == 0) {
      $(this).attr("disabled", "disabled");
      $(".pop-up-form-input").css("border", "3px solid rgba(255,0,0,.5)");
    }
    else if (name4 == 0 && phone4 != 0) {
      $(this).attr("disabled", "disabled");
      $(".name4").css("border", "3px solid rgba(255,0,0,.5)");      
    }
    else if (name4 != 0 && phone4 == 0) {
      $(this).attr("disabled", "disabled");
      $(".phone4").css("border", "3px solid rgba(255,0,0,.5)");     
    }
    else {
      $(this).removeAttr("disabled");
    }
  });
  $(".pop-up-form-input").on("click", function() {
    $(this).css("border", "none");
    $(".pop-up-form-button").removeAttr("disabled");
  }); 



  // var field = $(".field").val();
  $(".our-products-button").on("click", function() {
    $(".mask").show();
    $(".pop-up-wrapper").show();
    $(".pop-up-wrapper .white-field").html("Оставьте заявку и наш менеджер свяжется с вами в течении 15 минут");
  });
  $(".pop-up-before").on("click", function() {
    $(".mask").hide();
    $(this).parent().parent().hide();
    $(".field").css("border", "none");
    $(".field").removeAttr("value");
    $(".pop-up-form-button").removeAttr("disabled");
  });



  $(".atribute-button").on("click", function() {
    $(".mask").show();
    $(".pop-up-wrapper").show();
    $(".pop-up-wrapper .white-field").html("Оставьте заявку, и наш менеджер отправит вам полный каталог в течении 15 минут"); 
  });
  $(".pop-up-before").on("click", function() {
    $(".mask").hide();
    $(this).parent().parent().hide();
    $(".field").css("border", "none");
    $(".field").removeAttr("value");
    $(".pop-up-form-button").removeAttr("disabled");
  });
});
