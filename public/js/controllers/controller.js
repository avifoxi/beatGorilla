/// AND THE CONTROLLER - RESPONDS TO USER ACTIONS, AND INVOKES CHANGES TO MODEL

function Controller(model, view) {
  this._model = model;
  this._view = view;
  var _this = this;

  var beatCount = 0;

  this.sequenceUpdated = new Event(this);

  this.sequenceUpdated.attach( function() {
    _this._model.updateSequenceDependencies();
    _this._view.updateSequence();
  })

  // this.

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
  getSeqSpecs : function(sequence_id) {
    var url = '/sequence_specs';
    if (sequence_id) {
      url.concat(sequence_id)
    }
    var _this = this;
    $.ajax({
      url: url,
      type: 'json',
      method: 'get'
      })
      .done( function(data) {
        _this.updateSequence( JSON.parse(data) )
        // _this.
      })
      .fail( function(){
        console.log('failure...')
    });
  },
  updateSequence : function( sequenceObj ) {
    this._model._sequence = sequenceObj;
    this.sequenceUpdated.notify();
  }


}

console.log('hello from Controller!')
