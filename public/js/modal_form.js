$(document).ready(function(){
  console.log("hi")

  $("#loginButton").click(function(event){
    event.preventDefault();
    $("form#loginForm").fadeIn( "slow", function(){
    });
  });

  $("#loginAway").click(function(event){
    event.preventDefault();
    $("form#loginForm").fadeOut( "slow", function(){
      });
  });

  $("form#loginForm").submit(function(event){
    event.preventDefault();

  // $.ajax({
  //   url: "/login",
  //   type: "POST"
  //   data: $(this).serialize(),
  //   dataType: "html",
  //   success: function(data) {
  //     console.log(data);

  //     $('.navigation').html(data);
  //       // $('#nav').remove();
  //       // $();
  //     $('.logged-out').removeClass('show');
  //     $('.logged-in').addClass('show');
  //   }
  //   });
  });

  $("#signupButton").click(function(event){
    event.preventDefault();
    $("form#signupForm").fadeIn( "slow", function(){
     });
  });

  $("#signupAway").click(function(event){
    event.preventDefault();
    $("form#signupForm").fadeOut( "slow", function(){
    });
  });

  $("form#signupForm").submit(function(event){
    event.preventDefault();
  });

});
