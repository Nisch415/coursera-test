(function (){
	var names = ["Yaakov","Page","Jason","joey", "Frankie","joy","Letty","james","Nisch"];

	for(var i = 0; i < names.length ; i++){
		var firstlet = names[i].charAt(0).toLowerCase();

		if (firstlet == 'j'){
			speakbye(names[i]);
		}

		else{
			speakhello(names[i]);
		}
	}
})()
