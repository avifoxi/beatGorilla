// MODEL HOLDS THE AUDIO CONTEXT (the web audio api utility) AND DECODED AUDIO DATA
console.log('hello from Model!')


function Model(context, tempo) {
  this._context = context;
  this._decodedBuffers = {};
  this._metronome = new Metronome( this._context, tempo);
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
  prepareKit : function(namesUrls){
    // console.log(namesUrls);
    var _this = this;
    var names = Object.getOwnPropertyNames(namesUrls);
    // console.log(names);
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      // console.log(namesUrls[name]);
      _this.prepareSample(namesUrls[name], name);
    }
  },
  updateSequenceDependencies : function() {
    console.log('the new sequence looks like this:' + this._sequence );
  }
}
