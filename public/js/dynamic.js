console.log('hello from dynamic.js')

var title = document.getElementById('sequenceName')
var seq = controller._model._sequence

var sequenceName = document.createElement('h2')
sequenceName.innerHTML = seq.name
title.appendChild(sequenceName)

var table = document.getElementsByTagName('table')[0]
var row = document.createElement('tr')


// make a single beat table data
var beatToTd = function(beat, name) {
	// Beat {play: false, position: 0}
	var td = document.createElement('td');
	
	var cb = document.createElement('input');
	cb.type = 'checkbox';
	cb.value = beat.position;
	cb.name = name;

	if (beat.play){
		cb.checked = true;
	}

	var label = document.createElement('label');
	label.innerHTML = document.createElement('span')

	cb.innerHTML = label;
	td.innerHTML = cb;
	return td;
}