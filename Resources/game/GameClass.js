function GameClass(){
	var FirstPage = require('./view/FirstpageClass');
	
	var game = this;
	
	game.start = function(){
		game.firstPage = new FirstPage();
		game.firstPage.start();
	}
	
	return game;
}

module.exports = GameClass;