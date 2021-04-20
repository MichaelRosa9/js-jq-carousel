$(document).ready(function(){

  $(".carousel .arrow-left").click(previousImage);
  $(".carousel .arrow-right").click(nextImage);

  function nextImage(){
    var active_img = $(".photos img.active");
    var acctive_icon = $("nav i.active") ;

    active_img.removeClass("active");
    active_img.next(".photos img").addClass("active");
    
    acctive_icon.removeClass("active");
    acctive_icon.next("nav i").addClass("active");

    if(active_img.next(".photos img").length === 0){
      $(".photos img").first().addClass("active");
      $("nav i").first().addClass("active");
    }
  }
 

  function previousImage(){
    var active_img = $(".photos img.active");
    var acctive_icon = $("nav i.active") ;

    active_img.removeClass("active");
    active_img.prev(".photos img").addClass("active");
    
    acctive_icon.removeClass("active");
    acctive_icon.prev("nav i").addClass("active");

    if(active_img.prev(".photos img").length === 0){
      $(".photos img").last().addClass("active");
      $("nav i").last().addClass("active");
    }
  }

});