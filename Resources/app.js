var win = Titanium.UI.createWindow({
	title:"Test",
	backgroundColor:"#FFFFFF",
	exitOnClose: true
});

var logoName = Titanium.UI.createLabel({
	text:"Izaberi logo!",
	color:'white',
	backgroundColor:"black",
	font: { fontSize:48 },
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top:0,
	left:0,
    height:100,
	width:"100%"
});

var imageOne = Titanium.UI.createImageView({
	image:"/images/Monster.png",
	title: "Monster",
	width:98,
	height:119,
	top:200,
	left:"25%"
});

var imageTwo = Titanium.UI.createImageView({
	image:"/images/Nasa.png",
	title: "NASA",
	width:118,
	height:114,
	top:200,
	left:"50%"
});

var imageThree = Titanium.UI.createImageView({
	image:"/images/Netscape.png",
	title: "Netscape",
	width:115,
	height:114,
	top:200,
	left:"75%"
});

var imageFour = Titanium.UI.createImageView({
	image:"/images/Rover.png",
	title: "Rover",
	width:103,
	height:130,
	top:200,
	left:0
});

var textField = Titanium.UI.createTextField({
	bottom:"55%",
    width:"50%",
    hintText:"Izaberi logo!", //Hint text is displayed to the user before the field has been edited
    softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS // SOFT_KEYBOARD_DEFAULT_ON_FOCUS
});

var button = Ti.UI.createButton({
	title: 'Submit',
	bottom:"45%",
	width:"30%"
});

// Set the selected image
var imageSelected;

imageOne.addEventListener("click", function(e){
	imageSelected = e.source.title;
	textField.softKeyboardOnFocus = Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS;
    textField.focus();
	//logoName.text = e.source.title;
});

imageTwo.addEventListener("click", function(e){
	imageSelected = e.source.title;
	textField.softKeyboardOnFocus = Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS;
    textField.focus();
	//logoName.text = e.source.title;
});

imageThree.addEventListener("click", function(e){
	imageSelected = e.source.title;
	textField.softKeyboardOnFocus = Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS;
    textField.focus();
	//logoName.text = e.source.title;
});

imageFour.addEventListener("click", function(e){
	imageSelected = e.source.title;
	textField.softKeyboardOnFocus = Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS;
    textField.focus();
	//logoName.text = e.source.title;
});

textField.addEventListener('blur', function() {
    textField.softKeyboardOnFocus = Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS;
});

button.addEventListener("click", function(e){
	if(textField.value.toLowerCase() == imageSelected.toLowerCase()){
		logoName.text = 'TACNO! :D';
	}
	else{
		logoName.text = 'Netacno! :(';
	}
});

win.addEventListener("click", function(e){
	textField.softKeyboardOnFocus = Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS;
});

win.add(imageOne);
win.add(imageTwo);
win.add(imageThree);
win.add(imageFour);
win.add(logoName);
win.add(textField);
win.add(button);

win.open();