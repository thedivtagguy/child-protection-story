<script>
  import story from "$data/story.json";
</script>
    <section >  
      <div class="container px-6 py-16 mx-auto text-center h-screen flex justify-center items-center">
          <div class="max-w-2xl mx-auto leading-royal">
              <h1 id="heading" >{story.title}</h1>
              <h3 id="subtitle" >{story.subtitle}</h3>
          </div>
      </div>
  </section>

  <style>
    #heading {
      color: var(--color-purple);
      font-size: 5rem;
      font-weight: 700;
      font-family: 'Libre Baskerville', serif;
      font-style: italic;
      text-transform: capitalize;
      line-height: 1.2;
      
    }
    #subtitle {
      color: var(--color-taupe);
      font-size: 1.7rem;
      font-weight: 700;
      font-family: 'Inter', sans-serif;
      text-transform: uppercase;
      margin: 2rem 0;
    }
  </style>