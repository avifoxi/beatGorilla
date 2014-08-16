/// AND ON DOCUMENT READY PUT IT ALL TOGETHER

// document.addEventListener('DOMContentLoaded', function(){
  console.log('hello from application.js!')

    // first the model
  var model = new Model(new AudioContext(), 1000 );

  var button = document.getElementsByTagName('button')[0];
  var view = new View(model, { 'button' : button });

  var controller = new Controller(model, view);
  // controller.prepareSample("/samples/Kit/CyCdh_K3Crash-07.wav");
  console.log(controller);

  // TODO - currently samples are hard coded - this process SHOULD take a json obj from the db and parse it into a form like thsi to load

  controller.prepareKit( { 
		'kick' : '/sounds/mvp_sounds/Kick_ac_close.wav',
		'snare' : '/sounds/mvp_sounds/Snare_ac_close.wav',
		'cymbal' : '/sounds/mvp_sounds/Crash1_ac_close.wav',
		'tom' : '/sounds/mvp_sounds/MidTom_ac_close.wav'
	});

// });



