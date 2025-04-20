<template>
  <!-- Tambahkan pt-24 (atau sesuai tinggi navbar) dan pb-12 untuk padding -->
  <section
    class="min-h-screen flex items-center bg-gradient-to-br from-[#111827] to-[#1f2937] px-6 md:px-20 pt-24 pb-12"
    id="home"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full max-w-7xl mx-auto"
    >
      <!-- Left: Text -->
      <div
        class="space-y-4 md:space-y-6 text-white order-2 md:order-1 text-center md:text-left"
      >
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Hello, I'm <span class="text-yellow-400">Dani Bagaskara</span><br />
          A Passionate Web Developer
        </h1>
        <p class="text-base sm:text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
          I specialize in creating modern websites with clean and efficient
          code. Let's work together to build something amazing.
        </p>
        <div class="flex flex-wrap gap-3 justify-center md:justify-start">
          <button
            class="bg-yellow-400 text-gray-900 px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold hover:bg-yellow-300 transition duration-300 shadow-lg text-sm sm:text-base"
          >
            Hire Me
          </button>
          <a
            href="/resume.pdf"
            class="border border-yellow-400 text-yellow-400 px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-gray-900 transition duration-300 shadow-lg text-sm sm:text-base"
            download
          >
            Download Resume
          </a>
        </div>
      </div>

      <!-- Right: Image -->
      <div class="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
        <img
          src="../assets/hero_image.jpg"
          alt="Hero Image"
          class="rounded-3xl shadow-xl w-full max-w-xs sm:max-w-sm object-cover aspect-square"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
