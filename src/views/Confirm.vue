<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from "axios";

const route = useRoute();
const confirmationId = route.params.confirmationId;

const confirmation_data = ref(null);

onMounted(async () => {
  try {
    const confData = await axios.get(`http://localhost:9000/store/appointment?confirmation_number=${confirmationId}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
    confirmation_data.value = confData.data.appointment[0];
  } catch (error) {
    console.error("Failed to fetch appointment data", error);
  }
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-4xl bg-white p-8 rounded-lg shadow-lg text-center">
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

      <h1 class="text-3xl font-bold text-blue-800 mb-4">Thank You!</h1>
      <p class="text-gray-600 mb-10">
        Your Appointment has been confirmed successfully.
      </p>

      <div v-if="confirmation_data" class="space-y-1">

        <!-- Appointment Details -->
        <div class="bg-gray-50 rounded-xl p-5 border border-gray-100 !my-4">
          <div class="flex items-center mb-4">
            <h4 class="text-sm font-semibold text-gray-700 uppercase tracking-wider">Appointment Details</h4>
          </div>
          <div class="flex gap-4">
            <p class="text-gray-500 font-semibold">Date:</p>
            <p class="font-semibold">{{ confirmation_data.date }}</p>
          </div>
          <div class="flex gap-4">
            <p class="text-gray-500 font-semibold">Time:</p>
            <p class="font-semibold">
              {{ confirmation_data.time_slot?.start_time }} - {{ confirmation_data.time_slot?.end_time }}
            </p>
          </div>
          <div class="flex gap-4">
            <p class="text-gray-500 font-semibold">Location:</p>
            <p class="font-semibold">{{ confirmation_data.location?.address?.[0]?.address }}</p>
          </div>
          <div class="flex gap-4">
            <p class="text-gray-500 font-semibold">Address:</p>
            <p class="font-semibold">{{ confirmation_data.location?.address?.[0]?.address }}</p>
          </div>
          <div class="flex gap-4">
            <p class="text-gray-500 font-semibold">Zip Code:</p>
            <p class="font-semibold">{{ confirmation_data.location?.address?.[0]?.zip_code }}</p>
          </div>
        </div>

        <!-- Confirmation Details -->
        <div class="bg-gray-50 rounded-xl p-5 border border-gray-100 !my-4">
          <div class="flex items-center mb-4">
            <h4 class="text-sm font-semibold text-gray-700 uppercase tracking-wider">Confirmation Details</h4>
          </div>
          <div class="flex gap-4">
            <p class="text-gray-500 font-semibold">Confirmation No:</p>
            <p class="font-semibold">{{ confirmationId }}</p>
          </div>
          <div class="flex gap-4">
            <p class="text-gray-500 font-semibold">Store Address:</p>
            <p class="font-semibold">{{ confirmation_data.location?.address?.[0]?.address }}</p>
          </div>
          <div class="flex gap-4">
            <p class="text-gray-500 font-semibold">License Id:</p>
            <p class="font-semibold">{{ confirmation_data.pet?.license_id }}</p>
          </div>
          <div class="flex gap-4">
            <p class="text-gray-500 font-semibold">Timings:</p>
            <p class="font-semibold">
              {{ confirmation_data.time_slot?.start_time }} - {{ confirmation_data.time_slot?.end_time }}
            </p>
          </div>
        </div>

        <!-- Pet Information -->
        <div class="bg-gray-50 rounded-xl p-5 border border-gray-100 !my-4">
          <div class="flex items-center mb-4">
            <h4 class="text-sm font-semibold text-gray-700 uppercase tracking-wider">Pet Information</h4>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
            <div class="flex">
              <span class="text-gray-500 font-semibold">Name:</span>
              <span class="font-medium mx-2">{{ confirmation_data.pet?.name }}</span>
            </div>
            <div class="flex">
              <span class="text-gray-500 font-semibold">Breed:</span>
              <span class="font-medium mx-2">{{ confirmation_data.pet?.breed }}</span>
            </div>
            <div class="flex">
              <span class="text-gray-500 font-semibold">Species:</span>
              <span class="font-medium mx-2">{{ confirmation_data.pet?.species }}</span>
            </div>
            <div class="flex">
              <span class="text-gray-500 font-semibold">Date of Birth:</span>
              <span class="font-medium mx-2">{{ confirmation_data.pet?.date_of_birth }}</span>
            </div>
            <div class="flex">
              <span class="text-gray-500 font-semibold">Weight:</span>
              <span class="font-medium mx-2">{{ confirmation_data.pet?.weight }}</span>
            </div>
          </div>
        </div>

        <!-- Reminder -->
        <div
          v-if="confirmation_data.location?.certification?.length"
          class="bg-blue-100 p-4 rounded-lg border border-blue-800"
        >
          <p class="text-blue-800 font-medium">📌 Important Reminder:</p>
          <p class="text-blue-700 mt-2">
            Please remember to bring your
            <span class="font-semibold">
              {{ confirmation_data.location.certification.join(' and ') }}
            </span>
            certification<span v-if="confirmation_data.location.certification.length > 1">s</span> with you.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
