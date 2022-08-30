(function () {

  $(window).on("load", function () {
    $("body").addClass("is-load");
    setTimeout(function(){
      $("body").addClass("is-box-end");
    },2200)
  });

}());
