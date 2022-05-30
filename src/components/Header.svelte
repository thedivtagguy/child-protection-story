<script>
  import story from "$data/story.json";
</script>
    <section >  
      <div id="text" class="container px-6 py-16 mx-auto text-center h-screen flex justify-center items-center">
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
      color: var(--color-bone);
      border-radius: 5px;
      border: var(--color-bone) 2px solid;
      font-size: 1.7rem;
      font-weight: 700;
      font-family: 'Inter', sans-serif;
      text-transform: uppercase;
      margin: 2rem 0;
      background-color: var(--color-purple);
    }

    section {
      background-image: url("/assets/header.png");
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
      /* Image opacity */
    }

    #text {
      opacity: 1;
    }
  </style>