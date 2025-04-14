<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <!-- Checkmark Icon -->
        <div class="flex justify-center mb-6">
          <svg class="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
  
        <!-- Thank You Message -->
        <h1 class="text-3xl font-bold text-gray-800 mb-4">
          Thank You!
        </h1>
        
        <p class="text-gray-600 mb-6">
          Your submission has been received successfully.
        </p>
  
        <!-- Important Reminder -->
        <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p class="text-yellow-800 font-medium">
            � Important Reminder:
          </p>
          <p class="text-yellow-700 mt-2">
            Please remember to bring your rabies certification with you.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ThankYouPage'
  }
  </script>