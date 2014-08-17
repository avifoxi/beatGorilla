// MODEL HOLDS THE AUDIO CONTEXT (the web audio api utility) AND DECODED AUDIO DATA
console.log('hello from Model!')


function Model(context) {
  this._context = context;
  this._decodedBuffers = {};
  this._metronome = new Metronome( this._context);
  this._sequence;
}

Model.prototype = {

  playSound : function(name) {
    var context = this._context;
    var source = context.createBufferSource();
    source.buffer = this._decodedBuffers[name];
    source.connect(context.destination);
    source.start(0);
  },
  prepareSample : function(url, name) {
    var _this = this;
    var request= new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
      _this._context.decodeAudioData(request.response, function(buffer) {
          _this._decodedBuffers[name] = buffer;

          // console.log(_this._decodedBuffers);
        }, function(){alert('oh shit...')} );
      }
    request.send();
  },
  prepareKit : function(soundPatterns){
    console.log(soundPatterns);
    var _this = this;
    var names = Object.getOwnPropertyNames(soundPatterns);

    for (var i = 0; i < names.length; i++) {
      var name = names[i];

      // if we haven't already decoded the sound, proceed
      if (!_this._decodedBuffers[name]) {
        _this.prepareSample(soundPatterns[name].url, name);
      }
    }
  },
  updateSequenceDependencies : function() {
    var _this = this;
    this._metronome._tempo = _this._sequence.tempo
    this.prepareKit(_this._sequence.soundPatterns);
  }
}
