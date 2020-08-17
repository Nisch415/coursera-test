(function(window){
	var speakword = "Goodbye";
	var speakbye = function(name){

		console.log(speakword + " "+name);
	}
	window.speakbye = speakbye;
})(window);