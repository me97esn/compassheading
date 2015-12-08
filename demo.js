function deviceOrientationListener(event) {
	System.import('index.js').then(function(heading){
		// safari works differently, but has a event.webkitCompassHeading
		console.log('imported heading')
		const _heading = event.compassHeading || event.webkitCompassHeading || heading.compassHeading({
			gamma: event.gamma,
			beta: event.beta,
			alpha: event.alpha
		})

		document.getElementById('compass').innerHTML = _heading
	})


	
}

window.addEventListener('deviceorientation', deviceOrientationListener);