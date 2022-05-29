<script>
    import story from "$data/story.json";
    import StickySide from "./helpers/StickySide.svelte";
	let index;
</script>
<div class="max-w-6xl px-8 pt-12 mx-auto text-justify lg:w-3/5">
    <p class="text-base lg:text-xl">
        {story.introduction.intro}
          </p>
    <p class="text-base lg:text-xl">
        {story.introduction.outro}
          </p>
 </div>

 

<StickySide bind:index>
<div slot="steps">
	{#each story.aspects as text, i}
	<div class="step" data-step={i}>
		<section>{text.text}</section>
	</div>
	{/each}
</div>
<div slot="figure">
	<figure>
		<p>{index + 1}</p>
</figure>
</StickySide>	