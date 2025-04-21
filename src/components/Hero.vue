<template>
  <!-- Hero section dengan efek parallax dan animasi -->
  <section
    class="min-h-screen flex items-center px-6 md:px-20 pt-24 pb-12 relative overflow-hidden"
    id="home"
  >
    <!-- Background dengan efek parallax -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 opacity-90"
      ></div>
      <div class="absolute top-0 left-0 w-full h-full">
        <!-- Pattern overlay -->
        <div
          class="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"
        ></div>
      </div>
    </div>

    <!-- Animated gradient orbs -->
    <div
      class="absolute top-20 -left-20 h-64 w-64 rounded-full bg-purple-700 mix-blend-multiply filter blur-xl opacity-30 animate-blob"
    ></div>
    <div
      class="absolute top-40 right-0 h-72 w-72 rounded-full bg-yellow-400 mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
    ></div>
    <div
      class="absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-blue-500 mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
    ></div>

    <!-- Main content -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center w-full max-w-7xl mx-auto relative z-10"
    >
      <!-- Left: Text content with animations -->
      <div
        class="space-y-6 md:space-y-8 text-white order-2 md:order-1 text-center md:text-left"
      >
        <div class="space-y-2">
          <p class="text-yellow-400 font-medium inline-flex items-center">
            <span class="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            Full-Stack Developer
          </p>
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hello, I'm
            <span
              class="text-gradient bg-gradient-to-r from-yellow-300 to-yellow-500"
              >Dani Bagaskara</span
            >
          </h1>
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 pb-2"
          >
            Creating Digital Experiences
          </h2>
        </div>

        <p
          class="text-base sm:text-lg text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed"
        >
          I specialize in crafting modern, responsive websites with clean code
          and exceptional user experiences. Let's transform your ideas into
          reality.
        </p>

        <!-- Social links -->
        <div
          class="flex items-center space-x-4 justify-center md:justify-start text-gray-400"
        >
          <a href="#" class="hover:text-yellow-400 transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a href="#" class="hover:text-yellow-400 transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
          <a href="#" class="hover:text-yellow-400 transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </a>
        </div>

        <!-- CTA buttons -->
        <div class="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
          <button
            class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-400 transition duration-300 shadow-lg text-base flex items-center gap-2"
          >
            <span>Let's Talk</span>
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
          <a
            href="/resume.pdf"
            class="group relative overflow-hidden bg-transparent border border-yellow-400 text-yellow-400 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg text-base flex items-center gap-2"
            download
          >
            <span
              class="relative z-10 group-hover:text-gray-900 transition-colors"
              >Download CV</span
            >
            <svg
              class="w-5 h-5 relative z-10 group-hover:text-gray-900 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            <!-- Hover animation -->
            <span
              class="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            ></span>
          </a>
        </div>
      </div>

      <!-- Right: Profile image with animation and decoration -->
      <div class="order-1 md:order-2 mb-8 md:mb-0 relative">
        <div class="relative mx-auto max-w-sm">
          <!-- Background decorations -->
          <div
            class="absolute -top-6 -right-6 w-32 h-32 border-2 border-yellow-400 rounded-xl opacity-30"
          ></div>
          <div
            class="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-yellow-400 rounded-xl opacity-30"
          ></div>

          <!-- Image container with inner glow -->
          <div
            class="rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900 p-1 backdrop-blur-sm"
          >
            <img
              src="../assets/hero_image.jpg"
              alt="Dani Bagaskara - Web Developer"
              class="rounded-xl shadow-inner w-full object-cover aspect-square transform hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <!-- Floating tech badges -->
          <div
            class="absolute -bottom-4 -right-4 bg-gray-900 shadow-xl rounded-full p-3 border border-gray-800"
          >
            <Icon icon="logos:vue" class="w-6 h-6" />
          </div>
          <div
            class="absolute top-2 -left-4 bg-gray-900 shadow-xl rounded-full p-3 border border-gray-800"
          >
            <Icon icon="logos:laravel" class="w-6 h-6" />
          </div>
          <div
            class="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gray-900 shadow-xl rounded-full p-3 border border-gray-800"
          >
            <Icon icon="logos:javascript" class="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>

    <!-- Floating scrolling hint -->
    <div
      class="hidden sm:absolute bottom-8 left-1/2 transform -translate-x-1/2 sm:flex flex-col items-center text-gray-400"
    >
      <span class="text-sm mb-2">Scroll down</span>
      <div
        class="w-5 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1"
      >
        <div class="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
