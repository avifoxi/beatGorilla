/// AND THE CONTROLLER - RESPONDS TO USER ACTIONS, AND INVOKES CHANGES TO MODEL

function Controller(model, view) {
  this._model = model;
  this._view = view;
  var _this = this;

  var beatCount = 0;

  // this._view.buttonClicked.attach( function() {
  //   _this.playSound();
  // });

  this._model._metronome.beatDropped.attach( function() {
    // console.log(beatCount += 1)
    _this._view.newBeat();
  });

  this._view.playButtClicked.attach( function() {
    // console.log(beatCount += 1)
    _this._model._metronome.startPlay();
  });

  this._view.stopButtClicked.attach( function() {
    // console.log(beatCount += 1)
    _this._model._metronome._isPlaying = false;
  });

}

Controller.prototype = {
  playSound : function() {
    this._model.playSound();
  },
  prepareSample : function(url){
    this._model.prepareSample(url);
  },
  prepareKit : function(obj) {
    // console.log(obj);
    this._model.prepareKit(obj);
  },
  getKitFromServer : function(){
    //on page load -- this should make Ajax call with to find out what our sounds for the current kit are gonna be. then call this.prepareKit
  }
}

console.log('hello from Controller!')
