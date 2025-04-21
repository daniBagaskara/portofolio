<template>
  <section class="mt-20 text-white" id="service">
    <div class="px-6 md:px-20 pt-24 pb-12 xl:pl-16 mx-auto">
      <h2 class="text-4xl font-bold text-white mb-4">My Services</h2>
      <p class="text-gray-300 max-w-2xl mb-12">
        I offer comprehensive digital solutions to help your business grow in
        the online space.
      </p>

      <!-- Cards Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0"
      >
        <!-- Service Card -->
        <div
          v-for="service in services"
          :key="service.id"
          class="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl border border-gray-700"
        >
          <div class="flex flex-col h-full">
            <!-- Icon -->
            <div
              class="mb-6 p-4 bg-gray-700 rounded-lg w-16 h-16 flex items-center justify-center"
            >
              <img
                :src="service.icon"
                :alt="service.name + ' icon'"
                class="w-10 h-10 object-contain"
                loading="lazy"
              />
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold mb-3 text-yellow-400">
              {{ service.name }}
            </h3>

            <!-- Description -->
            <p class="text-gray-300 mb-6 flex-grow">
              {{ service.description }}
            </p>

            <!-- Learn More Link -->
            <a
              href="#"
              class="text-yellow-400 hover:text-yellow-300 font-medium inline-flex items-center mt-auto"
            >
              Learn more
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
import { ref } from "vue";
const services = ref([
  {
    id: 1,
    icon: "https://img.icons8.com/ios-filled/100/ffffff/google-code.png",
    name: "WEB DEVELOPMENT",
    description:
      "Custom website development with modern technologies like Vue.js, React, and Node.js for optimal performance.",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/external-vectorslab-glyph-vectorslab/100/fffeee/external-Technical-Writing-mobile-app-development-vectorslab-glyph-vectorslab.png",
    name: "Technical Writing",
    description:
      "Clear documentation and technical articles to help users understand complex systems and processes.",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/external-solid-design-circle/100/ffffff/external-Mobile-Development-digital-marketing-solid-design-circle.png",
    name: "Mobile Development",
    description:
      "Cross-platform mobile applications built with Flutter or React Native for iOS and Android.",
  },
  {
    id: 4,
    icon: "https://img.icons8.com/ios-filled/100/ffffff/email-open.png",
    name: "Email Development",
    description:
      "Responsive HTML email templates that work across all major email clients and devices.",
  },
  {
    id: 5,
    icon: "https://img.icons8.com/ios-filled/100/ffffff/windows10-personalization.png",
    name: "Graphic Design",
    description:
      "Visually appealing designs for logos, branding materials, and marketing collateral.",
  },
  {
    id: 6,
    icon: "https://img.icons8.com/ios-filled/100/ffffff/web-design.png",
    name: "Web Design",
    description:
      "User-centered website designs with focus on usability, accessibility, and conversion optimization.",
  },
]);
</script>
