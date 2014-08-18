function Sequence(obj) {
	this.name = obj.name;
	this.sequenceId = obj.sequenceId;
	this.soundPatterns = obj.soundPatterns;
	this.steps = obj.steps;
	this.tempo = obj.tempo;
}

Sequence.prototype = {
}

// function SoundPattern(obj) {
// 	this.sound = obj.sound;
// }

function Sound(obj) {
	this.beats = obj.beats;
	this.url = obj.url;
}

function Beat(obj)  {
	this.play = obj.play;
	this.position = obj.position;
}



