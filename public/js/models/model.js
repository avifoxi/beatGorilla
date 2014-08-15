// MODEL HOLDS THE AUDIO CONTEXT (the web audio api utility) AND DECODED AUDIO DATA
console.log('hello from Model!')


function Model(context) {
  this._context = context;
  this._decodedBuffers = [];
  // this._metronome = new Metronome( this._context )
}

Model.prototype = {

  playSound : function() {
    var context = this._context;
    var source = context.createBufferSource();
    source.buffer = this._decodedBuffers[0];
    source.connect(context.destination);
    source.start(0);
  },
  prepareSample : function(url) {
    var _this = this;
    var request= new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
      _this._context.decodeAudioData(request.response, function(buffer) {
          _this._decodedBuffers.push(buffer);
        }, function(){alert('oh shit...')} );
      }
    request.send();
  }
}
