<script>
    import story from "$data/story.json";
import Graph1 from "./StoryComponents/Graph1.svelte";
import QuestionCard from "./StoryComponents/QuestionCard.svelte";
import Questions from "./StoryComponents/Questions.svelte";
    import StickySide from "./StoryComponents/StickySide.svelte";

	let index;
</script>
<div class="max-w-6xl px-8 pt-12 mx-auto text-justify lg:w-3/5">
    <p class="text-base lg:text-xl">
        {story.introduction.intro}
          </p>
          <h2 class="text-5xl font-bold py-8 tracking-tight font-baskerville leading-[60px] text-center">~ <br> Aspects of <br>Child Protection <br>~</h2>

    <p class="text-base lg:text-xl">
        {story.introduction.outro}
          </p>
 </div>
 
<StickySide />
 
<Questions />


<QuestionCard number="1" question={story.q[0][1]}/>

<Graph1 />