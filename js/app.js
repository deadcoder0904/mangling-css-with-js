document.addEventListener('DOMContentLoaded',function() {
	const inputs = document.querySelectorAll('input');

	function changeVariables(e) {
		const suffix = this.dataset.sizing || '';
		document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
	}

	inputs.forEach(function(el) {
		['change','mousemove'].forEach(event => el.addEventListener(event, changeVariables));
	});
});
