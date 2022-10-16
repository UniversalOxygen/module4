(function(window){
	var byespeaker={};
	var speakword="Good bye  ";
	byespeaker.hello=function(name){
	console.log(speakword+""+name);
	}
	window.byespeaker=byespeaker;
}
)(window);