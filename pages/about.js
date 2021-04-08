const about = () => {
  return (
    <>
    <div class="w-48 mx-auto pt-6 border-b-2  text-center text-2xl text-black-700">
        Our Team
      </div>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div class="rounded bg-blue-200 overflow-hidden shadow-lg">
          <img class="relative w-56 h-56 rounded-full mx-auto p-3 " src="/members/usui.jpg" alt="Team member" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Usui Takumi</div>
            <div class="text-xl text-blue-500 mb-2">Web Developer</div>
          </div>
        </div>
        <div class="rounded bg-blue-200 overflow-hidden shadow-lg">
          <img class="relative w-56 h-56 rounded-full mx-auto p-3 " src="/members/kotaro.jpg" alt="Team member" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Kotaro Kashima</div>
            <div class="text-xl text-blue-500 mb-2">Graphic Designer</div>
          </div>
        </div>
        <div class="rounded bg-blue-200 overflow-hidden shadow-lg">
          <img class="relative w-56 h-56 rounded-full mx-auto p-3 " src="/members/misaki.jpg" alt="Team member" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Misaki Ayuzawa</div>
            <div class="text-xl text-blue-500 mb-2">Software Engineer</div>
          </div>
        </div>
    </div>
      </>
  );
};
export default about;
