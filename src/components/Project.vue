<template>
  <section id="projects" class="mt-20 text-white">
    <div class="px-6 md:px-20 pt-24 pb-12 xl:pl-16 mx-auto">
      <h2 class="text-4xl font-bold mb-4 text-white">My Projects</h2>
      <p class="text-gray-300 max-w-2xl mb-12">
        Here are some of the projects I've worked on recently. They showcase my
        skills in frontend and backend development.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 border border-gray-700"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6 flex flex-col h-full">
            <h3 class="text-xl font-bold text-yellow-400 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-300 mb-4 flex-grow">
              {{ project.description }}
            </p>
            <a
              :href="project.link"
              target="_blank"
              class="text-yellow-400 hover:text-yellow-300 font-medium inline-flex items-center"
            >
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A responsive portfolio site built with Vue.js and Tailwind CSS.",
    image: project1, // Gunakan variabel yang diimpor
    link: "#",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description:
      "An online store using Laravel for backend and Vue.js for frontend.",
    image: project2,
    link: "#",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description: "A dynamic dashboard interface with charting and auth system.",
    image: project3,
    link: "#",
  },
];
</script>
