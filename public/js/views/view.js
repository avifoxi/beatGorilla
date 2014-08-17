/// THE VIEW WILL HOLD THE MODEL IN THIS STRUCTURE - TO MAINTAIN OBSERVER PATTERN. ELEMENTS WILL BE ARRAY - THOUGH ONLY 1 BUTTON IN THIS EXAMPLE
// console.log('hello from views!')
function View(model, elements) {
  this._model = model;
  this._elements = elements;

  this.numSounds = $('tr').length;
  this.beatsPerSound = $('td').length / this.numSounds;

  this._beatPosition = 2;

  this.playButtClicked = new Event(this);
  this.stopButtClicked = new Event(this);

  var _this = this;

  // attach listener to button

  this._elements.playButt.onclick = function(){
      _this.playButtClicked.notify();
  }

  this._elements.stopButt.onclick = function(){
      _this.stopButtClicked.notify();
  }

  //  HI GUYS! we are passing the newBeat function in here - it recieves a notification at each beat of the metronome. on YOUR end - setup an Event (see above and check Event class), where newBeat triggers a sender in the view, and gets a bunch of listeners that respond. I can explain
}

View.prototype = {
  newBeat : function() {
    console.log('wake up view, its beat time!');
    this.highlightCurrentBeat();
    this.checkForScheduled();
  },


  highlightCurrentBeat : function() {
    var _this = this;
    $('.currentBeat').removeClass("currentBeat");
    $('td:nth-child(' + _this._beatPosition + ')').addClass("currentBeat");
    _this._beatPosition += 1;
    if (_this._beatPosition > _this.beatsPerSound) { _this._beatPosition = 2;
    }
  },

  checkForScheduled : function() {
    var _this = this;
    var columns = document.getElementsByClassName('currentBeat');
    for (var i =0; i < columns.length; i++) {
      var column = columns[i];
      var checkbox = column.childNodes[1]

      if (checkbox.checked === true ) {
        var name = column.classList[0];
        name = name.replace(/\d/g,'');
        console.log(name);
        _this._model.playSound(name);
      }
    }
  },
  updateSequence : function() {
    console.log('view sequence: ' + this._model._sequence )
  }
}
