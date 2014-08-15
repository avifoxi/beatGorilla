/// THE VIEW WILL HOLD THE MODEL IN THIS STRUCTURE - TO MAINTAIN OBSERVER PATTERN. ELEMENTS WILL BE ARRAY - THOUGH ONLY 1 BUTTON IN THIS EXAMPLE
// console.log('hello from views!')
function View(model, elements) {
  this._model = model;
  this._elements = elements;

  this.buttonClicked = new Event(this);

  var _this = this;

  // attach listener to button

  // this._elements.button.onclick = function(){
  //     _this.buttonClicked.notify();
  // }

  //  HI GUYS! we are passing the newBeat function in here - it recieves a notification at each beat of the metronome. on YOUR end - setup an Event (see above and check Event class), where newBeat triggers a sender in the view, and gets a bunch of listeners that respond. I can explain
}

View.prototype = {
  newBeat : function() {
    console.log('wake up view, its beat time!');
  }
}
