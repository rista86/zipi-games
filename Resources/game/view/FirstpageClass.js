function FirstpageClass(){
	var firstPage = this;
	
	firstPage.main = Titanium.UI.createWindow({
		title:"Test",
		backgroundColor:"#FFFFFF",
		exitOnClose: true,
		orientationModes:[Ti.UI.PORTRAIT]
	});
	
	firstPage.welcomeHeading = Titanium.UI.createLabel({
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
	
	firstPage.button = Ti.UI.createButton({
		title: 'Submit',
		bottom:"45%",
		width:"60%"
	});
		
	firstPage.start = function(){
		firstPage.main.add(firstPage.welcomeHeading);
		firstPage.main.add(firstPage.button);
		firstPage.main.open();
	}
};

module.exports = FirstpageClass;