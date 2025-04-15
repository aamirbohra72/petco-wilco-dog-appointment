<template>
  <HeaderTop/>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
      <!-- Checkmark Icon -->
      <div class="flex justify-center mb-6">
        <svg
          class="w-16 h-16 text-blue-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>

      <!-- Thank You Message -->
      <h1 class="text-3xl font-bold text-blue-800 mb-4">Thank You!</h1>

      <p class="text-gray-600 mb-10">
        Your submission has been received successfully.
      </p>

      <div class="space-y-2 text-gray-700 text-left mb-6">
        <div class="flex">
          <span class="w-36 font-semibold">Confirmation No:</span>
          <span>1234567890</span>
        </div>
        <div class="flex">
          <span class="w-36 font-semibold">Store Address:</span>
          <span>Wilco Farm Store - Corvallis</span>
        </div>
        <div class="flex">
          <span class="w-36 font-semibold">License Id:</span>
          <span>1314151617</span>
        </div>
        <div class="flex">
          <span class="w-36 font-semibold">Timings:</span>
          <span>10:00 AM - 11:00 AM</span>
        </div>
      </div>

      <!-- Important Reminder -->
      <div class="bg-blue-100 p-4 rounded-lg border border-blue-800">
        <p class="text-blue-800 font-medium">� Important Reminder:</p>
        <p class="text-blue-700 mt-2">
          Please remember to bring your rabies certification with you.
        </p>
      </div>
    </div>
  </div>
  <FooterBottom/>
</template>

<script setup>
// export default {

//   name: "ThankYouPage",

// };
import HeaderTop from '@/components/HeaderTop.vue';
import FooterBottom from '@/components/FooterBottom.vue';


</script>
