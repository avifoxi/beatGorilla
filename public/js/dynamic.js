console.log('hello from dynamic.js')


function SetupTable() {
  this.json;
}

SetupTable.prototype = {
  getSeqSpecs : function() {
    var _this = this;
    $.ajax({
      url: '/sequence_specs',
      type: 'json',
      method: 'get'
      })
      .done( function(data) {
        _this.json = JSON.parse(data);
      })
      .fail( function(){
        console.log('failure...')
    });
  }
}




// Perform other work here ...

// Set another completion function for the request above
// jqxhr.always(function() {
//   alert( "second complete" );
// });







// function PonyExpress( ponyStatsObj ) {
//   this._method = method;
//   this._url = url;
//   this._type = type;
//   this._callbacks = callbacks;

//   this._request = null;
// }


// PonyExpress.prototype = {

//   prepRequest : function(){
//     var request = new XMLHttpRequest();
//     request.open(method, url, true);
//     request.responseType = type;
//     this._request = request;
//   },
//   prepSuccessRfail : function() {
//     var _this = this;
//     _this._request.onload = function(data) {
//       console.log(data);
//     }
//   },
//   sendAjax : function{
//     this._request.send()
//   }
// }
