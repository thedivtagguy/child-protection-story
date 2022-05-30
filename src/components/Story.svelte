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
 

<StickySide />

