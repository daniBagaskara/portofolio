<template>
  <footer class="bg-gray-900 text-gray-400 py-10 mt-20">
    <div
      class="px-6 md:px-20 mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
    >
      <p>&copy; 2025 Dani Bagaskara. All rights reserved.</p>

      <div class="flex space-x-6 text-xl">
        <a
          href="https://github.com/"
          target="_blank"
          class="hover:text-yellow-400 transition"
        >
          <Icon icon="mdi:github" />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          class="hover:text-yellow-400 transition"
        >
          <Icon icon="mdi:linkedin" />
        </a>
        <a
          href="mailto:you@example.com"
          class="hover:text-yellow-400 transition"
        >
          <Icon icon="mdi:email" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
