<template>
  <div class="min-h-screen bg-[#111827]">
    <Navbar />
    <Hero />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const Navbar = defineAsyncComponent(() => import("./components/Navbar.vue"));
const Hero = defineAsyncComponent(() => import("./components/Hero.vue"));
</script>
