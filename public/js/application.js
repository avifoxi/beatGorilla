/// AND ON DOCUMENT READY PUT IT ALL TOGETHER

// document.addEventListener('DOMContentLoaded', function(){
  console.log('hello from application.js!')

    // first the model
  var model = new Model(new AudioContext() );

  var button = document.getElementsByTagName('button')[0];
  var view = new View(model, { 'button' : button });

  var controller = new Controller(model, view);
  // controller.prepareSample("/samples/Kit/CyCdh_K3Crash-07.wav");
  console.log(controller);
// });
