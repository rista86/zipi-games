function AnimationClass(){
	var animation = this;
	
	animation.duration = 500;
	
	animation.setDuration = function(duration){
		animation.duration = duration;
	}
};

module.exports = AnimationClass;