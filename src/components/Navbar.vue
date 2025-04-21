<template>
  <header
    class="fixed top-0 left-0 w-full flex justify-between items-center p-6 bg-opacity-70 z-20 text-white bg-gray-900"
  >
    <div class="flex items-center">
      <h1 class="text-3xl font-bold">My App</h1>
    </div>

    <!-- Desktop Menu -->
    <nav class="hidden md:flex space-x-6">
      <a
        v-for="item in menu"
        :key="item.link"
        :href="'#' + item.link"
        @click.prevent="scrollToSection(item.link)"
        class="relative group text-xl transition duration-300 text-white"
      >
        {{ item.name }}
        <span
          class="absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300"
          :class="[
            activeSection === item.link ? 'w-full' : 'w-0 group-hover:w-full',
          ]"
        ></span>
      </a>
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
        <a
          v-for="item in menu"
          :key="item.link"
          :href="'#' + item.link"
          @click.prevent="scrollToSection(item.link)"
          class="relative group text-xl transition duration-300 text-white"
        >
          {{ item.name }}
          <span
            class="absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300"
            :class="[
              activeSection === item.link ? 'w-full' : 'w-0 group-hover:w-full',
            ]"
          ></span>
        </a>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const isOpen = ref(false);
const props = defineProps({
  activeSection: String,
});
const emit = defineEmits(["scroll-to"]);

const menu = [
  { name: "Service", link: "service" },
  { name: "Skills", link: "skills" },
  { name: "Projects", link: "projects" },
  { name: "Contact", link: "contact" },
];

const scrollToSection = (id) => {
  emit("scroll-to", id);
  isOpen.value = false; // Close the menu after clicking
};
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
