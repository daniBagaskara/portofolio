<template>
  <section class="px-6 md:px-20 pt-24 pb-12 bg-[#111827] text-white" id="about">
    <div class="mx-auto text-left space-y-6">
      <h2 class="text-3xl md:text-4xl font-bold text-yellow-400">About Me</h2>
      <p class="text-gray-300 text-lg">
        I’m a passionate web developer with a focus on building clean and
        efficient solutions. I enjoy turning complex problems into simple,
        beautiful, and intuitive designs.
      </p>
    </div>

    <div class="mt-12 grid md:grid-cols-3 gap-8 mx-auto">
      <!-- Item 1 -->
      <div
        class="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition duration-300"
      >
        <div class="flex justify-center mb-4">
          <svg
            class="h-10 w-10 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87M16 3.13A4 4 0 0120 7v.01M4 7a4 4 0 014-3.87"
            />
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">Collaboration</h3>
        <p class="text-gray-400 text-sm">
          I love working in a team and believe in collaboration to bring ideas
          to life.
        </p>
      </div>

      <!-- Item 2 -->
      <div
        class="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition duration-300"
      >
        <div class="flex justify-center mb-4">
          <svg
            class="h-10 w-10 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.75 3v1.5m4.5-1.5V4.5m-9 4.5h13.5m-13.5 3h13.5M6 19.5h12"
            />
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">Web Development</h3>
        <p class="text-gray-400 text-sm">
          Building modern, responsive websites using the latest technologies is
          my passion.
        </p>
      </div>

      <!-- Item 3 -->
      <div
        class="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition duration-300"
      >
        <div class="flex justify-center mb-4">
          <svg
            class="h-10 w-10 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 17a4 4 0 104-4 4 4 0 00-4 4zm0 0v4m-4-4a8 8 0 1116 0"
            />
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">Continuous Learning</h3>
        <p class="text-gray-400 text-sm">
          I'm always eager to learn and stay up-to-date with the latest in web
          development.
        </p>
      </div>
    </div>
  </section>
</template>
