/// AND ON DOCUMENT READY PUT IT ALL TOGETHER

// document.addEventListener('DOMContentLoaded', function(){
  console.log('hello from application.js!')

    // first the model
  var model = new Model(new AudioContext(), 1000 );

  var playButt = document.getElementById("playButt");
  console.log(playButt);

  var stopButt = document.getElementById("stopButt");
  console.log(stopButt);

  var view = new View(model, { 'playButt' : playButt, 'stopButt' : stopButt });

  var controller = new Controller(model, view);
  // controller.prepareSample("/samples/Kit/CyCdh_K3Crash-07.wav");
  console.log(controller);

  // TODO - currently samples are hard coded - this process SHOULD take a json obj from the db and parse it into a form like thsi to load

 //  controller.prepareKit( {
	// 	'mvpSnare' : '/sounds/mvp_sounds/Snare_ac_close.wav',
	// 	'mvpKick' : '/sounds/mvp_sounds/Kick_ac_close.wav',
	// 	'mvpCrashSoft' : '/sounds/mvp_sounds/Crash1_ac_close.wav',
	// 	'mvpCrashHard' : '/sounds/mvp_sounds/Crash2_ac_close.wav',
 //    'mvpHihat' : '/sounds/mvp_sounds/ClosedHat_ac_close.wav',
 //    'mvpLowTom' : '/sounds/mvp_sounds/LowTom_ac_close.wav',
 //    'mvpMidTom' : '/sounds/mvp_sounds/MidTom_ac_close.wav',
 //    'mvpTambr' : '/sounds/mvp_sounds/Tamb_ac_close.wav'
	// });
  controller.getSeqSpecs();
// });



