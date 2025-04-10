<template>
  <HeaderTop/>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <!-- Progress Bar -->
      <div class="px-4 py-5 sm:px-6 bg-primary text-white">
        <h3 class="text-lg leading-6 font-medium">Book Your Dog's Appointment</h3>
        <div class="mt-3 flex items-center">
          <div class="w-full bg-primary-foreground/30 rounded-full h-2.5">
            <div 
              class="bg-white h-2.5 rounded-full transition-all duration-300" 
              :style="{ width: `${(currentStep / 4) * 100}%` }"
            ></div>
          </div>
          <span class="ml-4 text-sm">Step {{ currentStep }} of 4</span>
        </div>
      </div>

      <!-- Form Content -->
      <div class="p-6">
        <!-- Step 1: Dog & Owner Information -->
        <div v-if="currentStep === 1">
  <h2 class="text-xl font-semibold mb-6">Dog & Owner Information</h2>

  <div class="space-y-4">
    <!-- Pet Name -->
    <div>
      <label for="petName" class="block text-sm font-medium text-gray-700">
        Pet Name <span class="text-red-500">*</span>
      </label>
      <input
        id="petName"
        v-model="formData.petName"
        type="text"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        :class="{ 'border-red-500': errors.petName }"
      />
      <p v-if="errors.petName" class="mt-1 text-sm text-red-600">{{ errors.petName }}</p>
    </div>

    <!-- Pet Breed -->
    <div>
      <label for="petBreed" class="block text-sm font-medium text-gray-700">
        Pet Breed <span class="text-red-500">*</span>
      </label>
      <input
        id="petBreed"
        v-model="formData.petBreed"
        type="text"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        :class="{ 'border-red-500': errors.petBreed }"
      />
      <p v-if="errors.petBreed" class="mt-1 text-sm text-red-600">{{ errors.petBreed }}</p>
    </div>

    <!-- Pet Species -->
    <div>
      <label for="petSpecies" class="block text-sm font-medium text-gray-700">
        Pet Species <span class="text-red-500">*</span>
      </label>
      <select
        id="petSpecies"
        v-model="formData.petSpecies"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        :class="{ 'border-red-500': errors.petSpecies }"
      >
        <option value="">Select species</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="other">Other</option>
      </select>
      <p v-if="errors.petSpecies" class="mt-1 text-sm text-red-600">{{ errors.petSpecies }}</p>
    </div>

    <!-- Owner Name -->
    <div>
      <label for="ownerName" class="block text-sm font-medium text-gray-700">
        Owner Name <span class="text-red-500">*</span>
      </label>
      <input
        id="ownerName"
        v-model="formData.ownerName"
        type="text"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        :class="{ 'border-red-500': errors.ownerName }"
      />
      <p v-if="errors.ownerName" class="mt-1 text-sm text-red-600">{{ errors.ownerName }}</p>
    </div>

    <!-- Date of Birth -->
    <div>
      <label for="dob" class="block text-sm font-medium text-gray-700">
        Date of Birth <span class="text-red-500">*</span>
      </label>
      <input
        id="dob"
        v-model="formData.dob"
        type="date"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        :class="{ 'border-red-500': errors.dob }"
      />
      <p v-if="errors.dob" class="mt-1 text-sm text-red-600">{{ errors.dob }}</p>
    </div>

    <!-- Pet Weight -->
    <div>
      <label for="petWeight" class="block text-sm font-medium text-gray-700">
        Pet Weight (kg) <span class="text-red-500">*</span>
      </label>
      <input
        id="petWeight"
        v-model="formData.petWeight"
        type="number"
        step="0.1"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        :class="{ 'border-red-500': errors.petWeight }"
      />
      <p v-if="errors.petWeight" class="mt-1 text-sm text-red-600">{{ errors.petWeight }}</p>
    </div>

    <!-- Email -->
    <div>
      <label for="ownerEmail" class="block text-sm font-medium text-gray-700">
        Email <span class="text-red-500">*</span>
      </label>
      <input
        id="ownerEmail"
        v-model="formData.ownerEmail"
        type="email"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        :class="{ 'border-red-500': errors.ownerEmail }"
      />
      <p v-if="errors.ownerEmail" class="mt-1 text-sm text-red-600">{{ errors.ownerEmail }}</p>
    </div>

    <!-- Phone Number -->
    <div>
      <label for="ownerPhone" class="block text-sm font-medium text-gray-700">
        Phone Number <span class="text-red-500">*</span>
      </label>
      <input
        id="ownerPhone"
        v-model="formData.ownerPhone"
        type="tel"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        :class="{ 'border-red-500': errors.ownerPhone }"
      />
      <p v-if="errors.ownerPhone" class="mt-1 text-sm text-red-600">{{ errors.ownerPhone }}</p>
    </div>

    <!-- Street Address -->
    <div>
      <label for="street" class="block text-sm font-medium text-gray-700">
        Street Address <span class="text-red-500">*</span>
      </label>
      <input
        id="street"
        v-model="formData.street"
        type="text"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        :class="{ 'border-red-500': errors.street }"
      />
      <p v-if="errors.street" class="mt-1 text-sm text-red-600">{{ errors.street }}</p>
    </div>

    <!-- City -->
    <div>
      <label for="city" class="block text-sm font-medium text-gray-700">
        City <span class="text-red-500">*</span>
      </label>
      <input
        id="city"
        v-model="formData.city"
        type="text"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        :class="{ 'border-red-500': errors.city }"
      />
      <p v-if="errors.city" class="mt-1 text-sm text-red-600">{{ errors.city }}</p>
    </div>

    <!-- State -->
    <div>
      <label for="state" class="block text-sm font-medium text-gray-700">
        State <span class="text-red-500">*</span>
      </label>
      <input
        id="state"
        v-model="formData.state"
        type="text"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        :class="{ 'border-red-500': errors.state }"
      />
      <p v-if="errors.state" class="mt-1 text-sm text-red-600">{{ errors.state }}</p>
    </div>

    <!-- Pet License ID -->
    <div>
      <label for="license" class="block text-sm font-medium text-gray-700">
        Pet License ID (optional)
      </label>
      <input
        id="license"
        v-model="formData.license"
        type="text"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
      />
    </div>
  </div>

  <!-- Save & Continue Button -->
  <div class="mt-6">
    <button
      type="button"
      @click="validateStepOne"
      class="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#003B5C] hover:bg-[#002f4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003B5C]"
    >
      Save & Continue
    </button>
  </div>
</div>


        <!-- Step 2: Date & Location Selection -->
        <div v-if="currentStep === 2">
          <h2 class="text-xl font-semibold mb-6">Date & Location Selection</h2>
          
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Select Date <span class="text-red-500">*</span></label>
              <div class="bg-white border border-gray-300 rounded-lg shadow-sm p-4">
                <!-- Simple Calendar UI -->
                <div class="grid grid-cols-7 gap-1 text-center mb-2">
                  <div v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']" :key="day" class="text-xs font-medium text-gray-500">
                    {{ day }}
                  </div>
                </div>
                <div class="grid grid-cols-7 gap-1">
                  <div v-for="date in 31" :key="date" 
                    class="h-10 flex items-center justify-center rounded-full cursor-pointer text-sm"
                    :class="{
                      'bg-primary text-white': formData.appointmentDate === `2025-04-${date}`,
                      'hover:bg-gray-100': formData.appointmentDate !== `2025-04-${date}`,
                      'text-gray-400': date < 9 // Dates in the past
                    }"
                    @click="selectDate(date)"
                  >
                    {{ date }}
                  </div>
                </div>
              </div>
              <p v-if="errors.appointmentDate" class="mt-1 text-sm text-red-600">{{ errors.appointmentDate }}</p>
            </div>

            <div>
              <label for="zipcode" class="block text-sm font-medium text-gray-700">Zipcode <span class="text-red-500">*</span></label>
              <input 
                id="zipcode" 
                v-model="formData.zipcode" 
                type="text" 
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                :class="{ 'border-red-500': errors.zipcode }"
                placeholder="Enter your zipcode"
              >
              <p v-if="errors.zipcode" class="mt-1 text-sm text-red-600">{{ errors.zipcode }}</p>
            </div>
          </div>
        </div>

        <!-- Step 3: Time Slot Selection -->
        <div v-if="currentStep === 3">
          <h2 class="text-xl font-semibold mb-6">Time Slot & Location Selection</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-medium mb-3">Available Locations</h3>
              <div class="space-y-3">
                <div 
                  v-for="(location, index) in availableLocations" 
                  :key="index"
                  class="border rounded-lg p-4 cursor-pointer"
                  :class="{ 'border-primary bg-primary/5': formData.selectedLocation === index, 'border-gray-200 hover:border-gray-300': formData.selectedLocation !== index }"
                  @click="formData.selectedLocation = index"
                >
                  <h4 class="font-medium">{{ location.name }}</h4>
                  <p class="text-sm text-gray-600">{{ location.address }}</p>
                  <p class="text-sm text-gray-600">{{ location.phone }}</p>
                </div>
              </div>
              <p v-if="errors.selectedLocation" class="mt-1 text-sm text-red-600">{{ errors.selectedLocation }}</p>
            </div>

            <div>
              <h3 class="text-lg font-medium mb-3">Available Time Slots</h3>
              <div class="grid grid-cols-3 gap-3 sm:grid-cols-4">
                <button
                  v-for="(slot, index) in availableTimeSlots"
                  :key="index"
                  type="button"
                  class="rounded-md py-2 px-3 text-sm font-medium"
                  :class="{ 
                    'bg-primary text-white': formData.selectedTimeSlot === index,
                    'bg-gray-100 text-gray-900 hover:bg-gray-200': formData.selectedTimeSlot !== index
                  }"
                  @click="formData.selectedTimeSlot = index"
                >
                  {{ slot }}
                </button>
              </div>
              <p v-if="errors.selectedTimeSlot" class="mt-1 text-sm text-red-600">{{ errors.selectedTimeSlot }}</p>
            </div>
          </div>
        </div>

        <!-- Step 4: Appointment Review -->
        <div v-if="currentStep === 4">
          <h2 class="text-xl font-semibold mb-6">Appointment Review</h2>
          
          <div class="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 class="font-medium text-lg mb-4">Summary</h3>
            
            <div class="space-y-4">
              <div>
                <h4 class="text-sm font-medium text-gray-500">Pet Information</h4>
                <p class="mt-1"><span class="font-medium">Name:</span> {{ formData.petName }}</p>
                <p><span class="font-medium">Breed:</span> {{ formData.petBreed }}</p>
                <p><span class="font-medium">Species:</span> {{ formData.petSpecies }}</p>
              </div>
              
              <div>
                <h4 class="text-sm font-medium text-gray-500">Owner Information</h4>
                <p class="mt-1"><span class="font-medium">Name:</span> {{ formData.ownerName }}</p>
                <p><span class="font-medium">Email:</span> {{ formData.ownerEmail }}</p>
                <p><span class="font-medium">Phone:</span> {{ formData.ownerPhone }}</p>
              </div>
              
              <div>
                <h4 class="text-sm font-medium text-gray-500">Appointment Details</h4>
                <p class="mt-1"><span class="font-medium">Date:</span> {{ formatDate(formData.appointmentDate) }}</p>
                <p><span class="font-medium">Time:</span> {{ availableTimeSlots[formData.selectedTimeSlot] }}</p>
                <p><span class="font-medium">Location:</span> {{ availableLocations[formData.selectedLocation]?.name }}</p>
                <p><span class="font-medium">Address:</span> {{ availableLocations[formData.selectedLocation]?.address }}</p>
              </div>
              
              <div>
                <h4 class="text-sm font-medium text-gray-500">Service Details</h4>
                <p class="mt-1"><span class="font-medium">Service:</span> Standard Grooming</p>
                <p><span class="font-medium">Price:</span> $65.00</p>
              </div>
            </div>
          </div>
          
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm text-yellow-700">
                  This is a static form. In a real application, this would submit to an API.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="mt-8 flex justify-between">
          <button 
            v-if="currentStep > 1" 
            @click="prevStep" 
            type="button" 
            class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Previous
          </button>
          <div v-else></div>
          
          <button 
            v-if="currentStep < 4" 
            @click="nextStep" 
            type="button" 
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {{ currentStep === 3 ? 'Review' : 'Continue' }}
          </button>
          <button 
            v-else 
            @click="submitForm" 
            type="button" 
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#003B5C] hover:bg-[#002f4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003B5C]"
          >
            Confirm Appointment
          </button>
        </div>
      </div>
    </div>
  </div>
  <FooterBottom/>
</template>

<script setup>
import { ref, reactive } from 'vue';
import HeaderTop from '../components/HeaderTop.vue';
import FooterBottom from '@/components/FooterBottom.vue'; 

// Form data
const formData = reactive({
  // Step 1: Dog & Owner Information
  petName: '',
  petBreed: '',
  petSpecies: 'dog',
  ownerName: '',
  ownerEmail: '',
  ownerPhone: '',
  
  // Step 2: Date & Location Selection
  appointmentDate: '',
  zipcode: '',
  
  // Step 3: Time Slot Selection
  selectedLocation: 0,
  selectedTimeSlot: null,
});

// Current step
const currentStep = ref(1);

// Validation errors
const errors = reactive({});

// Mock data for available locations
const availableLocations = [
  {
    name: 'Pawsome Grooming - Downtown',
    address: '123 Main St, Anytown, CA 90210',
    phone: '(555) 123-4567',
  },
  {
    name: 'Pawsome Grooming - Westside',
    address: '456 Ocean Ave, Anytown, CA 90211',
    phone: '(555) 987-6543',
  },
  {
    name: 'Pawsome Grooming - Northside',
    address: '789 Mountain Rd, Anytown, CA 90212',
    phone: '(555) 456-7890',
  }
];

// Mock data for available time slots
const availableTimeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
];

// Format date for display
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

// Select a date
const selectDate = (day) => {
  // Prevent selecting dates in the past
  if (day < 9) return; // Assuming today is April 9, 2025
  
  formData.appointmentDate = `2025-04-${day}`;
  errors.appointmentDate = '';
};

// Validate current step
const validateStep = () => {
  errors.petName = '';
  errors.petBreed = '';
  errors.ownerName = '';
  errors.ownerEmail = '';
  errors.ownerPhone = '';
  errors.appointmentDate = '';
  errors.zipcode = '';
  errors.selectedLocation = '';
  errors.selectedTimeSlot = '';
  
  let isValid = true;
  
  if (currentStep.value === 1) {
    if (!formData.petName.trim()) {
      errors.petName = 'Pet name is required';
      isValid = false;
    }
    
    if (!formData.petBreed.trim()) {
      errors.petBreed = 'Pet breed is required';
      isValid = false;
    }
    
    if (!formData.ownerName.trim()) {
      errors.ownerName = 'Owner name is required';
      isValid = false;
    }
    
    if (!formData.ownerEmail.trim()) {
      errors.ownerEmail = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.ownerEmail)) {
      errors.ownerEmail = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (!formData.ownerPhone.trim()) {
      errors.ownerPhone = 'Phone number is required';
      isValid = false;
    }
  }
  
  else if (currentStep.value === 2) {
    if (!formData.appointmentDate) {
      errors.appointmentDate = 'Please select an appointment date';
      isValid = false;
    }
    
    if (!formData.zipcode.trim()) {
      errors.zipcode = 'Zipcode is required';
      isValid = false;
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipcode)) {
      errors.zipcode = 'Please enter a valid zipcode';
      isValid = false;
    }
  }
  
  else if (currentStep.value === 3) {
    if (formData.selectedLocation === null) {
      errors.selectedLocation = 'Please select a location';
      isValid = false;
    }
    
    if (formData.selectedTimeSlot === null) {
      errors.selectedTimeSlot = 'Please select a time slot';
      isValid = false;
    }
  }
  
  return isValid;
};

// Navigation methods
const nextStep = () => {
  if (validateStep()) {
    currentStep.value++;
  }
};

const prevStep = () => {
  currentStep.value--;
};

// Submit form
const submitForm = () => {
  alert('Appointment booked successfully! In a real application, this would submit to an API.');
  // Here you would typically make an API call to save the appointment
};
</script>

<style>
/* Custom theme styles */
:root {
  --color-primary: #003B5C; /* Deep Navy Blue */
  --color-primary-foreground: #ffffff;
}

/* Background Colors */
.bg-primary {
  background-color: var(--color-primary);
}

.bg-primary\/5 {
  background-color: rgba(0, 59, 92, 0.05); /* Soft tint of primary */
}

.bg-primary\/90 {
  background-color: rgba(0, 59, 92, 0.9); /* Almost solid primary */
}

/* Text Colors */
.text-primary {
  color: var(--color-primary);
}

/* Borders */
.border-primary {
  border-color: var(--color-primary);
}

/* Focus States */
.focus\:border-primary:focus {
  border-color: var(--color-primary);
}

.focus\:ring-primary:focus {
  --tw-ring-color: var(--color-primary);
}

/* Hover Effects */
.hover\:bg-primary\/90:hover {
  background-color: rgba(0, 59, 92, 0.9);
}

/* Optional extras for better appearance */
.button-primary {
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
}

.button-primary:hover {
  background-color: rgba(0, 59, 92, 0.8);
}

.card {
  background-color: #f8fafc; /* subtle background */
  border: 1px solid rgba(0, 59, 92, 0.1);
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 59, 92, 0.05);
}
</style>


<!-- <style>
/* Add any custom styles here */
:root {
  --color-primary: #10b981; /* Emerald-500 */
  --color-primary-foreground: #ffffff;
}

.bg-primary {
  background-color: var(--color-primary);
}

.bg-primary\/5 {
  background-color: rgba(16, 185, 129, 0.05);
}

.bg-primary\/90 {
  background-color: rgba(16, 185, 129, 0.9);
}

.text-primary {
  color: var(--color-primary);
}

.border-primary {
  border-color: var(--color-primary);
}

.focus\:border-primary:focus {
  border-color: var(--color-primary);
}

.focus\:ring-primary:focus {
  --tw-ring-color: var(--color-primary);
}

.hover\:bg-primary\/90:hover {
  background-color: rgba(16, 185, 129, 0.9);
}
</style> -->