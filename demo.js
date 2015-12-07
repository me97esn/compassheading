function deviceOrientationListener(event) {

	document.getElementById('compass').innerHTML = 'hej'

	this.orientation = {
		gamma: event.gamma,
		beta: event.beta,
		alpha: event.alpha,
		heading: event.webkitCompassHeading || (360 - event.alpha),
		accuracy: event.webkitCompassAccuracy || event.compassAccuracy
	};
}

window.addEventListener('deviceorientation', deviceOrientationListener);