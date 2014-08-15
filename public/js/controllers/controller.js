/// AND THE CONTROLLER - RESPONDS TO USER ACTIONS, AND INVOKES CHANGES TO MODEL

function Controller(model, view) {
  this._model = model;
  this._view = view;
  var _this = this;

  var beatCount = 0;

  this._view.buttonClicked.attach( function() {
    _this.playSound();
  });

  this._model._metronome.beatDropped.attach( function() {
    // console.log(beatCount += 1)
    _this._view.newBeat();
  })
}

Controller.prototype = {
  playSound : function() {
    this._model.playSound();
  },
  prepareSample : function(url){
    this._model.prepareSample(url);
  }
}

console.log('hello from Controller!')
