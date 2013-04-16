function LevelView(){
	var levelView = this;
	
	levelView.main = Titanium.UI.createWindow({
		title: "Nivo",
		backgroundColor: "#FFFFFF",
		orientationModes: [Ti.UI.PORTRAIT],
		width: Ti.Platform.displayCaps.platformWidth,
		exitOnClose: false,
		navBarHidden: true,		
		fullscreen: true
	});
	
	levelView.header = Titanium.UI.createLabel({
		text: "Izaberi nivo",
		color: "#000000",
		backgroundColor: "#dfedd6",
		font: { fontSize:56 },
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		top: 0,
		left: 0,
	    height: "10%",
		width: Ti.Platform.displayCaps.platformWidth
	});
	
		
	
	/*
	 * All first page events
	 */
	levelView.addEvents = function(){		
		levelView.main.addEventListener("android:back", function(){
			levelView.main.close({
		    	activityExitAnimation: Ti.Android.R.anim.slide_out_right
			});
		});
	}
	
	/*
	 * Adding fields to window 
	 */
	levelView.addToWindow = function(){
		levelView.main.add(levelView.header);
	}
	
	/*
	 * Initialize all main functions 
	 */
	levelView.initPage = function(){
		levelView.addEvents();
		levelView.addToWindow();
	}
	
	/*
	 * Start the window
	 */
	levelView.open = function(){
		levelView.initPage();
		levelView.main.open({
		    activityEnterAnimation: Ti.Android.R.anim.slide_in_left
		});
	}
}

module.exports = LevelView;