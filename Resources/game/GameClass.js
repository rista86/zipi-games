function GameClass(){
	var GameDatabaseModel = require("./mode/GameDatabaseModel");
	var FirstPageView = require('./view/firstPageView');
	
	var game = this;
	
	game.open = function(){
		game.firstPage = new FirstPageView();
		game.firstPage.open();
	}
	
	return game;
}

module.exports = GameClass;