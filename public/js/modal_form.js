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

    var response = $.ajax('/login',
    { method: 'post',
      data: $(this).serialize()
    });

    response.done(function() {
      window.location.reload(true);
     });

    $("form#loginForm").fadeOut( "slow", function(){
      });
  });

  // response.done(function(responseData) {
  //   console.log("got response")
  //   // $("#" + responseData[0]).html(responseData[1])
  // });


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

    var response = $.ajax('/users/new',
    { method: 'post',
      data: $(this).serialize()
     });

    response.done(function() {
      window.location.reload(true);
     });

    $("form#signupForm").fadeOut( "slow", function(){
      });

  });

});
