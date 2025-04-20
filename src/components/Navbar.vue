<template>
  <header
    class="fixed top-0 left-0 w-full flex justify-between items-center p-6 bg-opacity-70 z-20 text-white bg-gray-900"
  >
    <div class="flex items-center">
      <h1 class="text-3xl font-bold">My App</h1>
    </div>

    <!-- Desktop Menu -->
    <nav class="hidden md:flex space-x-6">
      <ul class="flex space-x-6">
        <li v-for="item in menu" :key="item.name">
          <a
            :href="item.link"
            class="relative group transition duration-300 ease-in-out text-lg"
            @click.prevent="scrollToSection(item.link)"
          >
            {{ item.name }}
            <span
              class="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Mobile Toggle Button -->
    <div class="md:hidden z-30">
      <button @click="isOpen = !isOpen" class="text-white focus:outline-none">
        <svg
          v-if="isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <nav
        v-if="isOpen"
        class="absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center space-y-6 text-xl md:hidden"
      >
        <ul>
          <li
            v-for="item in menu"
            :key="item.name"
            class="py-4 w-full text-center"
          >
            <a
              :href="item.link"
              class="text-white hover:text-yellow-400 transition duration-300 text-lg"
              @click.prevent="scrollToSection(item.link)"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const menu = ref([
  { name: "Service", link: "#service" },
  { name: "About Me", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
]);

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    isOpen.value = false; // untuk nutup menu mobile
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
