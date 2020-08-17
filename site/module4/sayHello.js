(function (window) {
	var speakword = "Hello";
	var speakhello = function(name){

		console.log(speakword + " " + name)

	}

	window.speakhello = speakhello;
})(window);