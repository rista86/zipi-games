// Ti.include('/game/game.js');
// 
// var start = game.initializeGames();
// start.open();


var firstScreen = Titanium.UI.createWindow({
	title:"Test",
	backgroundColor:"#FFFFFF",
	exitOnClose: true,
	orientationModes:[Ti.UI.PORTRAIT]
});

var welcomeHeading = Titanium.UI.createLabel({
	text:"LOGO KVIZ SRBIJA",
	color:'#000000',
	backgroundColor:"#dfedd6",
	font: { fontSize:56 },
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top:0,
	left:0,
    height:100,
	width:"100%"
});

var button = Ti.UI.createButton({
	title: 'Submit',
	bottom:"45%",
	width:"60%"
});

firstScreen.add(welcomeHeading);
firstScreen.add(button);
firstScreen.open();