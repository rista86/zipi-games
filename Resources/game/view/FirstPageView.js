function FirstPageView(){
	var LevelView = require('LevelView');
	
	var firstPageView = this;
	
	firstPageView.main = Ti.UI.createWindow({
		title: "Test",
		backgroundColor: "#FFFFFF",
		orientationModes: [Ti.UI.PORTRAIT],
		width: Ti.Platform.displayCaps.platformWidth,		
		exitOnClose: true,
		navBarHidden: true,
		fullscreen: true
	});
	
	firstPageView.header = Ti.UI.createLabel({
		text: "LOGO KVIZ SRBIJA",
		color: "#000000",
		backgroundColor: "#dfedd6",
		font: { fontSize:56 },
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		top: 0,
		left: 0,
	    height: "10%",
		width: Ti.Platform.displayCaps.platformWidth
	});
	
	firstPageView.play = Ti.UI.createButton({
		title: "Igraj",
		top: "30%",
		width: "60%"
	});
	
	firstPageView.statistic = Ti.UI.createButton({
		title: "Statistika",
		top: "45%",
		width: "60%"
	});
	
	firstPageView.option = Ti.UI.createButton({
		title: "Opcije",
		top: "60%",
		width: "60%"
	});
	
	firstPageView.bottomImage = Ti.UI.createLabel({
		text: "Neka slika",
		color: "#000000",
		font: { fontSize: 56 },
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor: "#dfedd6",
		bottom: 0,
		left: 0,
	    height: "15%",
		width: Ti.Platform.displayCaps.platformWidth
	});
	
	/*
	 * All first page events
	 */
	firstPageView.addEvents = function(){
		firstPageView.play.addEventListener("click", function(){
			firstPageView.levelView = new LevelView();
			firstPageView.levelView.open();
		});
	}
	
	/*
	 * Adding fields to window 
	 */
	firstPageView.addToWindow = function(){
		firstPageView.main.add(firstPageView.header);
		firstPageView.main.add(firstPageView.play);
		firstPageView.main.add(firstPageView.statistic);
		firstPageView.main.add(firstPageView.option);
		firstPageView.main.add(firstPageView.bottomImage);
	}
	
	/*
	 * Initialize all main functions 
	 */
	firstPageView.initPage = function(){
		firstPageView.addEvents();
		firstPageView.addToWindow();
	}
	
	/*
	 * Start the window
	 */
	firstPageView.open = function(){
		firstPageView.initPage();		
		firstPageView.main.open();
	}
}

module.exports = FirstPageView;