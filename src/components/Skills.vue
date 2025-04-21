<template>
  <section class="mt-20 text-white" id="skills">
    <div class="px-6 md:px-20 pt-24 pb-12 xl:pl-16 mx-auto">
      <h2 class="text-4xl font-bold text-white mb-4">Skills</h2>
      <p class="text-gray-300 max-w-2xl mb-12">
        These are some of the technologies I work with:
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="flex flex-col items-center bg-gray-800 hover:bg-gray-700 p-6 rounded-xl transition"
        >
          <Icon :icon="skill.icon" class="text-yellow-400 w-12 h-12 mb-4" />
          <span class="text-white font-semibold">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const skills = [
  { name: "HTML5", icon: "vscode-icons:file-type-html" },
  { name: "CSS3", icon: "vscode-icons:file-type-css" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "Vue.js", icon: "logos:vue" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "Laravel", icon: "logos:laravel" },
  { name: "MySQL", icon: "logos:mysql-icon" },
];
</script>
