
<script>
    import scrollama from "scrollama"; 
	import * as d3 from "d3";
	import { onMount } from "svelte";
	import story from "$data/story.json";

	$: active = false;
	onMount(() => {
// using d3 for convenience
var main = d3.select("main");
		var scrolly = main.select("#scrolly");
		var figure = scrolly.select("figure");
		var article = scrolly.select("article");
		var step = article.selectAll(".step");

		// initialize the scrollama
		var scroller = scrollama();

		// generic window resize listener event
		function handleResize() {
			// 1. update height of step elements
			var stepH = Math.floor(window.innerHeight * 0.75);
			step.style("height", stepH + "px");

			var figureHeight = window.innerHeight / 2;
			var figureMarginTop = (window.innerHeight - figureHeight) / 2;

			figure
				.style("height", figureHeight + "px")
				.style("top", figureMarginTop + "px");

			// 3. tell scrollama to update new element dimensions
			scroller.resize();
		}

		// scrollama event handlers
		function handleStepEnter(response) {
			console.log(response);
			// response = { element, direction, index }

			// add active to the current step only
			step.classed("is-active", function(d, i) {
				return i === response.index;
			});

			// update graphic based on step
			figure.select("p").text(
				story.aspects[response.index].text
			);
		}

		function setupStickyfill() {
			d3.selectAll(".sticky").each(function () {
				Stickyfill.add(this);
			});
		}

		function init() {
			setupStickyfill();

			// 1. force a resize on load to ensure proper dimensions are sent to scrollama
			handleResize();

			// 2. setup the scroller passing options
			// 		this will also initialize trigger observations
			// 3. bind scrollama event handlers (this can be chained like below)
			scroller
				.setup({
					step: "#scrolly article .step",
					offset: 0.33,
					debug: true
				})
				.onStepEnter(handleStepEnter);
		}

		// kick things off
		init();
		});
</script>



<section id="scrolly">
	<article>
		{#each story.aspects as text, i}
			<div class="step {active === true ? 'is-active' : ''}" data-step={i}>
				<p>{text.aspect}</p>
			</div>
		{/each}
	</article>

	<figure>
		<p></p>
	</figure>
</section>


<style>
    #scrolly {
			position: relative;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			background-color: #f3f3f3;
			padding: 1rem;
		}

		#scrolly>* {
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1;
		}

		article {
			position: relative;
			padding: 0 1rem;
			max-width: 25rem;
		}

		figure {
			position: -webkit-sticky;
			position: sticky;
			width: 100%;
			margin: 0;
			-webkit-transform: translate3d(0, 0, 0);
			-moz-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
			background-color: #8a8a8a;
			z-index: 0;
		}

		figure p {
			text-align: left;
			padding: 1rem;
			position: absolute;
			top: 50%;
			left: 50%;
			-moz-transform: translate(-50%, -50%);
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			font-size: 1.2rem;
			font-weight: 500;
			color: #fff;
			line-height: 1.2em;
		}

		.step {
			margin: 0 auto 2rem auto;
			background-color: #3b3b3b;
			color: #fff;
		}

		.step:last-child {
			margin-bottom: 0;
		}

		.step.is-active {
			background-color: goldenrod;
			color: #3b3b3b;
		}

		.step p {
			text-align: center;
			padding: 1rem;
			font-size: 3rem;
			font-family: 'Libre Baskerville', serif;
			font-style: italic;
			font-weight: 700;
			font-variant: small-caps;
			word-break: break-all;
			line-height: 0.9;

		}
        
    </style>