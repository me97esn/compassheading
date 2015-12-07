function deviceOrientationListener(event) {
	System.import('index.js').then(heading => {
		const _heading = heading.compassHeading({
			gamma: event.gamma,
			beta: event.beta,
			alpha: event.alpha
		})

		document.getElementById('compass').innerHTML = _heading
	})


	
}

window.addEventListener('deviceorientation', deviceOrientationListener);