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
      .done( function(json) {
        _this.sequencify(json);

        // once turned to sequence obj, and its contituent parts => then call _this.updateSequence
        // _this.
      })
      .fail( function(){
        console.log('failure...')
    });
  },
  updateSequence : function( sequenceObj ) {
    this._model._sequence = sequenceObj;
    this.sequenceUpdated.notify();
  },
  sequencify : function( json ) {
    var _this = this;
    var sequence = new Sequence( JSON.parse(json) );
    console.log(sequence);
    var sps = Object.getOwnPropertyNames(sequence.soundPatterns);
    for (var i = 0; i < sps.length; i++){
      
      sequence.soundPatterns[sps[i] ] = _this.soundify(sequence.soundPatterns[sps[i] ]);

      // console.log(sps[i])
    }
    // console.log(sequence);
  },
  soundify : function(sp) {
    var _this = this;
    var sound = new Sound({'url': sp.url, 'beats': _this.beatsify(sp.beats)});
    // console.log(sp.beats)
    return sound
  },
  beatsify : function (beats) {
    var _this = this;
    var modelBeats = {};
    // console.log(beats);
    var names = Object.getOwnPropertyNames(beats);
    for (var i =0; i < names.length; i++ ){
      modelBeats[ names[i] ] = _this.beatify(beats[ names[i] ]);  
    }
    return modelBeats;
  },
  beatify : function (beat) {
    // console.log(beat)
    var modelBeat = new Beat({'position': beat.position, 'play' : beat.play });
    return modelBeat;
  }
}

console.log('hello from Controller!')
