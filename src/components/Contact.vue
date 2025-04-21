<template>
  <section class="mt-20 text-white" id="contact">
    <div class="px-6 md:px-20 pt-24 pb-12 xl:pl-16 mx-auto max-w-4xl">
      <h2 class="text-4xl font-bold text-yellow-400 mb-4">Contact Me</h2>
      <p class="text-gray-300 mb-12 max-w-2xl">
        Let's work together or just say hello! Fill out the form below and I'll
        get back to you soon.
      </p>

      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-300"
            >Name</label
          >
          <input
            v-model="form.name"
            type="text"
            class="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div>
          <label class="block mb-2 text-sm font-medium text-gray-300"
            >Email</label
          >
          <input
            v-model="form.email"
            type="email"
            class="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div>
          <label class="block mb-2 text-sm font-medium text-gray-300"
            >Message</label
          >
          <textarea
            v-model="form.message"
            rows="5"
            class="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import notyf from "../plugins/notyf";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  notyf.success("Message sent successfully!");
  form.name = "";
  form.email = "";
  form.message = "";
};
</script>
