export default function Home() {
  return (
    <div>
      <div class=" py-40 bg-blue-100">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold mb-2 text-black">
            Next.js and TailwindCSS Boilerplate!
          </h2>
          <h3 class="text-2xl mb-8 text-black-200">
            Use this boilerplate to complete your projects quickly.
          </h3>
          <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            {" "}
            Explore now{" "}
          </button>
        </div>
      </div>
      <div class="w-48 mx-auto pt-6 border-b-2  text-center text-2xl text-black-700">
        Portfolio
      </div>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src="/portfolio/mango.jpg" alt="Mango" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Mango</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis
              eaque,exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #fruit
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #mango
            </span>
          </div>
        </div>

        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src="/portfolio/strawberry.jpg" alt="Strawberry" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Strawberry</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #fruit
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #strawberry
            </span>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src="/portfolio/olive.jpg" alt="Olive" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Olive</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #fruit
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #olive
            </span>
          </div>
        </div>
      </div>
      <div class="w-48 mx-auto pt-6 border-b-2  text-center text-2xl text-black-700">
        Articles
      </div>
      <div class="p-10">
        <div class=" w-full lg:max-w-full lg:flex">
          <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img className="w-full h-full " src="/article/Mountain.jpg" />
          </div>
          <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">
                Best Mountain Trails 2021
              </div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="flex items-center">
              <img
                class="w-10 h-10 rounded-full mr-4"
                src="/article/dinosaur.jpg"
                alt="Avatar of Writer"
              />
              <div class="text-sm">
                <p class="text-gray-900 leading-none">St Meem</p>
                <p class="text-gray-600">Apr 08</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-10 py-4 w-full lg:max-w-full lg:flex">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <img className="w-full h-full " src="/article/Mountain.jpg" />
        </div>
        <div class="border-r border-b border-l border-white-400 lg:border-l-0 lg:border-t lg:border-white-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              Best Mountain Trails 2021
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="flex items-center">
            <img
              class="w-10 h-10 rounded-full mr-4"
              src="/article/dinosaur.jpg"
              alt="Avatar of Writer"
            />
            <div class="text-sm">
              <p class="text-gray-900 leading-none">St Meem</p>
              <p class="text-gray-600">Apr 08</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
