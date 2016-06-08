$(document).ready(function() {
  $(".show-in-modal").click(function(e){
    var img = $(this).attr("src");
    $("#modalShow .modal-body").html("<img src='"+img+"' class='img-responsive'>");
     $("#modalShow").modal("show");
     e.preventDefault()
  });

  $(".show-image").click(function(e){
    var img = $(this).closest(".item-img-wrap").find("img:first").attr("src");
    $("#modalShow .modal-body").html("<img src='"+img+"' class='img-responsive'>");
     $("#modalShow").modal("show");
     e.preventDefault()
  });

  if ($('#ms-menu-trigger')[0]) {
    $('body').on('click', '#ms-menu-trigger', function() {
        $('.ms-menu').toggleClass('toggled');
    });
   }

  $('.chat-sidebar, .nav-controller, .chat-sidebar a').on('click', function(event) {
      $('.chat-sidebar').toggleClass('focus');
  });

  $(".hide-chat").click(function(){
      $('.chat-sidebar').toggleClass('focus');
  });

  $(".btn-toggle-menu").click(function() {
    $("#wrapper").toggleClass("toggled");
  });

  if($(".nav-tabs").length <= 0){
    $("[class^=col-md]").prepend("<div class='col-md-22'><div class='row'><div class='row'>"+$(".page-content").html()+"</div></div></div>")

    if(document.location.hostname == "demos.bootdey.com") {
     $(".col-md-22").addClass("hidden");
    }
   }
})
