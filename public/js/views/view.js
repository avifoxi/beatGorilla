/// THE VIEW WILL HOLD THE MODEL IN THIS STRUCTURE - TO MAINTAIN OBSERVER PATTERN. ELEMENTS WILL BE ARRAY - THOUGH ONLY 1 BUTTON IN THIS EXAMPLE
// console.log('hello from views!')
function View(model, elements) {
  this._model = model;
  this._elements = elements;

  this.buttonClicked = new Event(this);

  var _this = this;

  // attach listener to button

  this._elements.button.onclick = function(){
      _this.buttonClicked.notify();
  }
}
