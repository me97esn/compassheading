function deviceOrientationListener(event) {
	System.import('index.js').then(heading => {})
	

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