<script>
    export let number, question;
    </script>
<!-- Section 1 -->
<section class="w-full px-8 py-16 xl:px-8">
    <div class="max-w-5xl mx-auto">
        <div class="flex flex-col items-center md:flex-row">

            <div class="w-full space-y-5 md:w-3/5 md:pr-16">
                <p class="text-purple-900 font-bold uppercase">Question {number}</p>
                <h2 class="text-3xl font-extrabold leading-normal text-black font-baskerville italic ">
                    {question}
                </h2>
            </div>

            <div class="w-full mt-16 md:mt-0 md:w-2/5">
                <div class="relative z-10 h-auto  overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl">
                   <img src="/assets/question1.png" alt="Hand holding up a pie chart" class="w-full"/>
                </div>
            </div>

        </div>
    </div>
</section>
