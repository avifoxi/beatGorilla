console.log('hello from dynamic.js')

var title = document.getElementById('sequenceName')
var seq = controller._model._sequence

var sequenceName = document.createElement('h2')
sequenceName.innerHTML = seq.name
title.appendChild(sequenceName)

var table = document.getElementsByTagName('table')[0]
var row = document.createElement('tr')
