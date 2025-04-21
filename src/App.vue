<template>
  <div class="min-h-screen bg-[#111827]">
    <Navbar :active-section="activeSection" @scroll-to="scrollToSection" />
    <Hero />
    <Service />
    <Skills />
    <Project />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from "vue";

const activeSection = ref(null);
const menu = [
  { name: "Service", link: "service" },
  { name: "Skills", link: "skills" },
  { name: "Projects", link: "projects" },
  { name: "Contact", link: "contact" },
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const handleScroll = () => {
  let current = "";
  const scrollY = window.scrollY;

  for (const item of menu) {
    const section = document.getElementById(item.link);
    if (section && scrollY >= section.offsetTop - 100) {
      current = item.link;
    }
  }

  activeSection.value = current;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const Navbar = defineAsyncComponent(() => import("./components/Navbar.vue"));
const Hero = defineAsyncComponent(() => import("./components/Hero.vue"));
const Service = defineAsyncComponent(() => import("./components/Service.vue"));
const Skills = defineAsyncComponent(() => import("./components/Skills.vue"));
const Contact = defineAsyncComponent(() => import("./components/Contact.vue"));
const Project = defineAsyncComponent(() => import("./components/Project.vue"));
const Footer = defineAsyncComponent(() => import("./components/Footer.vue"));
</script>
