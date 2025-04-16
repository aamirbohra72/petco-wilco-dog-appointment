<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="max-w-3xl  bg-white p-8 rounded-lg shadow-lg text-center">
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
        Your Appointment has been confirmed successfully.
      </p>

      
  <div class="max-w-3xl mx-auto px-6  bg-white shadow-lg rounded-2xl border border-gray-100 mb-6">
    <!-- Header -->
    <!-- <div class="mb-8 text-center">
      <h2 class="text-xl font-bold text-gray-800">Appointment Summary</h2>
      <p class="text-gray-500 text-sm">Thank you for booking with us</p>
    </div> -->

    <div class="space-y-1 ">

      <!-- Appointment Details -->
      <div class="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <div class="flex items-center mb-4">
          <h4 class="text-sm font-semibold text-gray-700 uppercase tracking-wider">Appointment Details</h4>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-2 gap-2 text-gray-700">
          <div class="flex ">
            <span class="text-gray-500 px-2">Date:</span>
            <span class="font-medium">April 20, 2025</span>
          </div>
          <div class="flex">
            <span class="text-gray-500 px-2">Time:</span>
            <span class="font-medium">10:30 AM</span>
          </div>
          <div class="flex ">
            <span class="text-gray-500 px-2">Location:</span>
            <span class="font-medium">Wilco Farm Store - Corvallis</span>
          </div>
          <div class="flex">
            <span class="text-gray-500">Address:</span>
            <span class="font-medium">1905 NE Four Acre Pl, Corvallis, OR 97330</span>
          </div>
          <div class="flex">
            <span class="text-gray-500 px-2">Zipcode:</span>
            <span class="font-medium">97330</span>
          </div>
        </div>
      </div>

      <!-- Service Details -->
      <!-- <div class="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <div class="flex items-center mb-4">
          <h4 class="text-sm font-semibold text-gray-700 uppercase tracking-wider">Service Details</h4>
        </div>
        <div class="grid grid-cols-1 gap-4 text-gray-700">
          <div class="flex">
            <span class="w-28 text-gray-500">Service:</span>
            <span class="font-medium">Standard Grooming</span>
          </div>
          <div class="flex">
            <span class="w-28 text-gray-500">Price:</span>
            <span class="font-medium text-emerald-600">$65.00</span>
          </div>
        </div>
      </div> -->

      <!-- Confirmation Details -->
      <div class="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <div class="flex items-center mb-4">
        
          <h4 class="text-sm font-semibold text-gray-700 uppercase tracking-wider">Confirmation Details</h4>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-2 gap-2 text-gray-700">
          <div class="flex">
            
            <span class="text-gray-500 px-2">Confirmation No:</span>
            <span class="font-medium ">123456</span>
          </div>
          <div class="flex items-center">
            
            <span class="text-gray-500 px-2">Store Address: </span>
            <span class=" font-medium">  Wilco Farm Store - Corvallis</span>
          </div>
          <div class="flex items-center">
            <span class="text-gray-500 px-2">License Id:</span>
            <span class=" font-medium">1314151617</span>
          </div>
          <div class="flex items-center">
            <span class="text-gray-500 px-2">Timings:</span>
            <span class=" font-medium">10:00 AM - 11:00 AM</span>
          </div>
        </div>
      </div>
       
       <!-- Pet Information -->
      <div class="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <div class="flex items-center mb-4">
          <h4 class="text-sm font-semibold text-gray-700 uppercase tracking-wider">Pet Information</h4>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
          <div class="flex">
            <span class="text-gray-500 px-2">Name:</span>
            <span class="font-medium">Charlie</span>
          </div>
          <div class="flex">
            <span class="text-gray-500 px-2">Breed:</span>
            <span class="font-medium">Golden Retriever</span>
          </div>
          <div class="flex">
            <span class="text-gray-500 px-2">Species:</span>
            <span class="font-medium">Dog</span>
          </div>
          <div class="flex">
            <span class="text-gray-500 px-2">Date of Birth:</span>
            <span class="font-medium">2020-06-15</span>
          </div>
          <div class="flex">
            <span class="text-gray-500 px-2">Weight:</span>
            <span class="font-medium">25 kg</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <!-- <div class="mt-8 pt-6 border-t border-gray-100 text-center">
      <div class="flex items-center justify-center text-[#003B5C]">
        <p class="text-sm">Please arrive 10 minutes before your scheduled appointment time</p>
      </div>
      
    </div> -->
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
</template>

<script setup>
// export default {

//   name: "ThankYouPage",

// };
</script>
