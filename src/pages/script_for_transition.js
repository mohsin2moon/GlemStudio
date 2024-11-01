let fluidRevealEls = gsap.utils.toArray(".fluid-reveal__item");
let wrapper = document.querySelector(".fluid-reveal");

wrapper.style.setProperty("--items", fluidRevealEls.length);

let animateDuration = 5;
let pinDuration = 5;

let wobble;
let content;
let media;

let tl = gsap.timeline({
	scrollTrigger: {
		trigger: wrapper,
		start: "top top",
		end: () => "+=" + ((fluidRevealEls.length - 1) * wrapper.offsetHeight),
		pin: true,
		pinSpacing: true,
		scrub: 1,
		markers: false,
	}
});

let count = 1;

fluidRevealEls.forEach((el) => {
	wobble = el.querySelector("path");
	media = el.querySelector(".fluid-reveal__media");
	content = el.querySelector(".fluid-reveal__content");

	// Image wobble timeline
	if (count > 1) {
		tl.from(wobble, {
			duration: animateDuration,
			xPercent: 100,
			yPercent: 100
		},
			"-=" + animateDuration
		);
	} else {
		tl.from(wobble, {
			duration: animateDuration,
			xPercent: 100,
			yPercent: 100
		});
	}

	// Fade Text content in timeline
	tl.set(el, { pointerEvents: "auto", }) // Make clickable
	tl.from(content, {
		duration: animateDuration,
		opacity: 0,
		yPercent: 100
	},
		"-=" + animateDuration
	)
		.to(el, {
			duration: pinDuration
		});

	// Fade Text content out timeline
	if (count < fluidRevealEls.length) {
		tl.set(el, { pointerEvents: "none", }) // Make not clickable
		tl.to(content, {
			duration: animateDuration,
			opacity: 0,
			yPercent: -100
		},
			"-=" + animateDuration
		);
	}
	count++;
});