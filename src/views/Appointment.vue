<template>
  <HeaderTop />
  <div class="my-10 bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div
      class="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
    >
      <!-- Progress Bar -->
      <div class="px-4 py-5 sm:px-6 bg-primary text-white">
        <h3 class="text-lg leading-6 font-medium">
          Book Your Pet's Appointment
        </h3>
        <div class="mt-3 flex items-center">
          <div class="flex-1 bg-primary-foreground/30 rounded-full h-2.5">
            <div
              class="bg-white h-2.5 rounded-full transition-all duration-300"
              :style="{ width: `${(currentStep / 4) * 100}%` }"
            ></div>
          </div>
          <span class="ml-4 text-sm flex-shrink-0"
            >Step {{ currentStep }} of 4</span
          >
        </div>
      </div>

      <!-- Form Content -->
      <div class="p-6">
        <!-- Step 1: Dog & Owner Information -->
        <div v-if="currentStep === 1">
          <h2 class="text-xl font-semibold mb-6">Pet Information</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Pet Name -->
            <div>
              <label
                for="petName"
                class="block text-sm font-medium text-gray-700"
              >
                Pet Name <span class="text-red-500">*</span>
              </label>
              <input
                id="petName"
                v-model="formData.petName"
                type="text"
                class="mt-1 h-8 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                :class="{ 'border-red-500': errors.petName }"
              />
              <p v-if="errors.petName" class="mt-1 text-sm text-red-600">
                {{ errors.petName }}
              </p>
            </div>

            <!-- Pet Breed -->
            <div>
              <label
                for="petBreed"
                class="block text-sm font-medium text-gray-700"
              >
                Pet Breed <span class="text-red-500">*</span>
              </label>
              <input
                id="petBreed"
                v-model="formData.petBreed"
                type="text"
                class="mt-1 h-8 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                :class="{ 'border-red-500': errors.petBreed }"
              />
              <p v-if="errors.petBreed" class="mt-1 text-sm text-red-600">
                {{ errors.petBreed }}
              </p>
            </div>

            <!-- Pet Species -->
            <div>
              <label
                for="petSpecies"
                class="block text-sm font-medium text-gray-700"
              >
                Pet Species <span class="text-red-500">*</span>
              </label>
              <select
                id="petSpecies"
                v-model="formData.petSpecies"
                class="mt-1 h-8 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                :class="{ 'border-red-500': errors.petSpecies }"
              >
                <option value="">Choose a Species</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="other">Other</option>
              </select>
              <p v-if="errors.petSpecies" class="mt-1 text-sm text-red-600">
                {{ errors.petSpecies }}
              </p>
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
                class="mt-1 h-8 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                :class="{ 'border-red-500': errors.dob }"
              />
              <p v-if="errors.dob" class="mt-1 text-sm text-red-600">
                {{ errors.dob }}
              </p>
            </div>

            <!-- Pet Weight -->
            <div>
              <label
                for="petWeight"
                class="block text-sm font-medium text-gray-700"
              >
                Pet Weight (kg) <span class="text-red-500">*</span>
              </label>
              <input
                id="petWeight"
                v-model="formData.petWeight"
                type="number"
                step="0.1"
                class="mt-1 h-8 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                :class="{ 'border-red-500': errors.petWeight }"
              />
              <p v-if="errors.petWeight" class="mt-1 text-sm text-red-600">
                {{ errors.petWeight }}
              </p>
            </div>

            <!-- Pet License ID -->
            <div>
              <label
                for="license"
                class="block text-sm font-medium text-gray-700"
              >
                Pet License ID (optional)
              </label>
              <input
                id="license"
                v-model="formData.license"
                type="text"
                class="mt-1 h-8 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
        </div>

        <!-- Step 2: Date & Location Selection -->
        <div v-if="currentStep === 2">
          <h2 class="text-xl font-semibold mb-6">
            Select Grooming location for {{ formData.petName }}
          </h2>

          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-medium mb-3">Available Locations</h3>

              <div class="relative mt-1 mb-6">
                <label
                  for="zipcode"
                  class="block text-sm font-medium text-gray-700"
                >
                  Zipcode <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <input
                    id="zipcode"
                    v-model="formData.zipcode"
                    type="text"
                    class="h-11 pl-11 pr-4 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    :class="{ 'border-red-500': errors.zipcode }"
                    placeholder="Enter your zipcode"
                  />
                  <!-- Search Icon (Font Awesome or Heroicons SVG) -->
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <svg
                      class="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z"
                      />
                    </svg>
                  </div>
                </div>
                <p v-if="errors.zipcode" class="mt-1 text-sm text-red-600">
                  {{ errors.zipcode }}
                </p>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div
                  v-for="(location, index) in availableLocations"
                  :key="index"
                  class="border rounded-lg p-4 cursor-pointer"
                  :class="{
                    'bg-primary text-white ':
                      formData.selectedLocation === index,
                    'hover:bg-gray-100': formData.selectedLocation !== index,
                  }"
                  @click="formData.selectedLocation = index"
                >
                  <h4 class="font-medium">{{ location.name }}</h4>
                  <p class="text-sm text-gray-500">{{ location.address }}</p>
                  <p class="text-sm text-gray-500">{{ location.phone }}</p>
                </div>
              </div>
              <p
                v-if="errors.selectedLocation"
                class="mt-1 text-sm text-red-600"
              >
                {{ errors.selectedLocation }}
              </p>
            </div>
          </div>
        </div>

        <!-- Step 3: Time Slot Selection -->

        <div v-if="currentStep === 3">
          <h2 class="text-xl font-semibold mb-6">Selecting time slot</h2>
          <!-- Calendar Header with Month & Year -->
          <!-- Static Month and Year Header -->
          <!-- <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-gray-700">April 2025</h3>
          </div> -->

          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2 "
                >Select Date : April 2025 </label
              >
              
              <div
                class="bg-white border border-gray-300 rounded-lg shadow-sm p-4"
              >
                <!-- Simple Calendar UI -->
                <div class="grid grid-cols-7 gap-1 text-center mb-2">
                  <div
                    v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']"
                    :key="day"
                    class="text-xs font-medium text-gray-500"
                  >
                    {{ day }}
                  </div>
                </div>
                <div class="grid grid-cols-7 gap-1">
                  <div
                    v-for="date in 31"
                    :key="date"
                    class="h-10 flex items-center justify-center rounded-full cursor-pointer text-sm"
                    :class="{
                      'bg-primary text-white':
                        formData.appointmentDate === `2025-04-${date}`,
                      'hover:bg-gray-100':
                        formData.appointmentDate !== `2025-04-${date}`,
                      'text-gray-400': date < 9, // Dates in the past
                    }"
                    @click="selectDate(date)"
                  >
                    {{ date }}
                  </div>
                </div>
              </div>
              <p
                v-if="errors.appointmentDate"
                class="mt-1 text-sm text-red-600"
              >
                {{ errors.appointmentDate }}
              </p>
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
                    'bg-primary text-white':
                      formData.selectedTimeSlot === index,
                    'bg-gray-100 text-gray-900 hover:bg-gray-200':
                      formData.selectedTimeSlot !== index,
                  }"
                  @click="formData.selectedTimeSlot = index"
                >
                  {{ slot }}
                </button>
              </div>
              <p
                v-if="errors.selectedTimeSlot"
                class="mt-1 text-sm text-red-600"
              >
                {{ errors.selectedTimeSlot }}
              </p>
            </div>
          </div>
        </div>

        <!-- Step 4: Appointment Review -->
        <div v-if="currentStep === 4">
          <h2 class="text-xl font-semibold mb-6">Appointment Review</h2>

          <div
            class="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-200"
          >
            <h3 class="text-xl font-semibold text-[#003b5c] mb-6">Summary</h3>

            <div class="space-y-6 text-[15px]">
              <!-- Pet Information -->
              <div>
                <h4
                  class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2"
                >
                  Pet Information
                </h4>
                <div
                  class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700"
                >
                  <p>
                    <span class="font-medium">Name:</span>
                    {{ formData.petName }}
                  </p>
                  <p>
                    <span class="font-medium">Breed:</span>
                    {{ formData.petBreed }}
                  </p>
                  <p>
                    <span class="font-medium">Species:</span>
                    {{ formData.petSpecies }}
                  </p>
                  <p>
                    <span class="font-medium">Date of Birth:</span>
                    {{ formData.dob }}
                  </p>
                  <p>
                    <span class="font-medium">Weight:</span>
                    {{ formData.petWeight }} kg
                  </p>
                </div>
              </div>

              <!-- Appointment Details -->
              <div>
                <h4
                  class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2"
                >
                  Appointment Details
                </h4>
                <div
                  class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700"
                >
                  <p>
                    <span class="font-medium">Date:</span>
                    {{ formatDate(formData.appointmentDate) }}
                  </p>
                  <p>
                    <span class="font-medium">Time:</span>
                    {{
                      formData.selectedTimeSlot !== null
                        ? availableTimeSlots[formData.selectedTimeSlot]
                        : ""
                    }}
                  </p>
                  <p>
                    <span class="font-medium">Location:</span>
                    {{ availableLocations[formData.selectedLocation]?.name }}
                  </p>
                  <p>
                    <span class="font-medium">Address:</span>
                    {{ availableLocations[formData.selectedLocation]?.address }}
                  </p>
                  <p>
                    <span class="font-medium">Zipcode:</span>
                    {{ formData.zipcode }}
                  </p>
                </div>
              </div>

              <!-- Service Details -->
              <div>
                <h4
                  class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2"
                >
                  Service Details
                </h4>
                <div class="text-gray-700">
                  <p>
                    <span class="font-medium">Service:</span> Standard Grooming
                  </p>
                  <!-- <p><span class="font-medium">Price:</span> $65.00</p> -->
                </div>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg
                  class="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm text-yellow-700">
                  This is a static form. In a real application, this would
                  submit to an API.
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

          <!-- Step-specific action buttons -->
          <div>
            <!-- Step 1: Add Pet button -->
            <button
              v-if="currentStep === 1"
              @click="validateAndProceed"
              type="button"
              class="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#003B5C] hover:bg-[#002f4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003B5C]"
            >
              Add Pet
            </button>

            <!-- Step 2: Select Time Slot button -->
            <button
              v-else-if="currentStep === 2"
              @click="validateAndProceed"
              type="button"
              class="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Select Time Slot
            </button>

            <!-- Step 3: Appointment Review button -->
            <button
              v-else-if="currentStep === 3"
              @click="validateAndProceed"
              type="button"
              class="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Appointment Review
            </button>

            <!-- Step 4: Confirm Appointment button -->

            <button
              v-else
              @click="submitForm"
              type="button"
              class="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#003B5C] hover:bg-[#002f4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003B5C]"
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterBottom />
</template>

<script setup>
import { ref, reactive } from "vue";
import HeaderTop from "../components/HeaderTop.vue";
import FooterBottom from "@/components/FooterBottom.vue";

// Form data
const formData = reactive({
  // Step 1: Pet Information
  petName: "",
  petBreed: "",
  petSpecies: "",
  dob: "",
  petWeight: "",
  license: "",

  // Step 2: Location Selection
  selectedLocation: 0,
  zipcode: "",

  // Step 3: Time Slot Selection
  appointmentDate: "",
  selectedTimeSlot: null,

  // Owner Information (for review step)
  ownerName: "John Doe", // Placeholder for review
  ownerEmail: "john@example.com", // Placeholder for review
  ownerPhone: "(555) 123-4567", // Placeholder for review
});

// Current step
const currentStep = ref(1);

// Validation errors
const errors = reactive({});

// Array of Wilco Farm Store locations with name, address, and phone number
const availableLocations = [
  {
    name: "Wilco Farm Store - Corvallis",
    address: "1905 NE Four Acre Place, Corvallis, OR 97330",
    phone: "(541) 753-4100",
  },
  {
    name: "Wilco Farm Store - Lake Oswego",
    address: "17711 Jean Way, Lake Oswego, OR 97035",
    phone: "(503) 343-6577",
  },
  {
    name: "Wilco Farm Store - Oregon City",
    address: "19224 S Molalla Ave, Oregon City, OR 97045",
    phone: "(503) 656-0616",
  },
  {
    name: "Wilco Farm Store - Salem",
    address: "3285 Commercial St SE, Salem, OR 97302",
    phone: "(503) 364-0840",
  },
  // {
  //   name: 'Wilco Farm Store - Eugene',
  //   address: '4818 W 11th Ave, Eugene, OR 97402',
  //   phone: '(541) 343-5007',
  // },
  // {
  //   name: 'Wilco Farm Store - Stayton',
  //   address: '1385 N 1st St, Stayton, OR 97383',
  //   phone: '(503) 769-6301',
  // },
  // {
  //   name: 'Wilco Farm Store - Silverton',
  //   address: '734 McClaine St, Silverton, OR 97381',
  //   phone: '(503) 873-8318',
  // },
  // {
  //   name: 'Wilco Farm Store - Canby',
  //   address: '197 S Hazel Dell Way, Canby, OR 97013',
  //   phone: '(503) 266-2213',
  // },
  // {
  //   name: 'Wilco Farm Store - Newberg',
  //   address: '2300 E Hancock St, Newberg, OR 97132',
  //   phone: '(503) 537-2659',
  // },
  // {
  //   name: 'Wilco Farm Store - Cornelius',
  //   address: '664 W Baseline St, Cornelius, OR 97113',
  //   phone: '(503) 992-1346',
  // }
];

// ------------------------------------------------------------------------------
// Mock data for available time slots
const availableTimeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

// Format date for display
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Select a date
const selectDate = (day) => {
  // Prevent selecting dates in the past
  if (day < 9) return; // Assuming today is April 9, 2025

  formData.appointmentDate = `2025-04-${day}`;
  errors.appointmentDate = "";
};

// Validate step 1 (Pet Information)
const validateStep1 = () => {
  // Clear previous errors
  errors.petName = "";
  errors.petBreed = "";
  errors.petSpecies = "";
  errors.dob = "";
  errors.petWeight = "";

  let isValid = true;

  if (!formData.petName.trim()) {
    errors.petName = "Pet name is required";
    isValid = false;
  }

  if (!formData.petBreed.trim()) {
    errors.petBreed = "Pet breed is required";
    isValid = false;
  }

  if (!formData.petSpecies) {
    errors.petSpecies = "Pet species is required";
    isValid = false;
  }

  if (!formData.dob) {
    errors.dob = "Date of birth is required";
    isValid = false;
  }

  if (!formData.petWeight) {
    errors.petWeight = "Pet weight is required";
    isValid = false;
  }

  return isValid;
};

// Validate step 2 (Location Selection)
const validateStep2 = () => {
  // Clear previous errors
  errors.selectedLocation = "";
  errors.zipcode = "";

  let isValid = true;

  // Location is pre-selected, so we only need to validate zipcode
  if (!formData.zipcode.trim()) {
    errors.zipcode = "Zipcode is required";
    isValid = false;
  } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipcode)) {
    errors.zipcode = "Please enter a valid zipcode";
    isValid = false;
  }

  return isValid;
};

// Validate step 3 (Time Slot Selection)
const validateStep3 = () => {
  // Clear previous errors
  errors.appointmentDate = "";
  errors.selectedTimeSlot = "";

  let isValid = true;

  if (!formData.appointmentDate) {
    errors.appointmentDate = "Please select an appointment date";
    isValid = false;
  }

  if (formData.selectedTimeSlot === null) {
    errors.selectedTimeSlot = "Please select a time slot";
    isValid = false;
  }

  return isValid;
};

// Validate current step and proceed to next step if valid
const validateAndProceed = () => {
  let isValid = false;

  if (currentStep.value === 1) {
    isValid = validateStep1();
  } else if (currentStep.value === 2) {
    isValid = validateStep2();
  } else if (currentStep.value === 3) {
    isValid = validateStep3();
  }

  if (isValid) {
    currentStep.value++;
  }
};

// Go back to previous step
const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

// Submit form
// const submitForm = () => {
//   // alert(
//   //   "Appointment booked successfully! In a real application, this would submit to an API."
//   // );
//   this.$router.push('/confirm');
//   // Here you would typically make an API call to save the appointment
// };
import { useRouter } from "vue-router";

const router = useRouter();

function submitForm() {
  // Your form submission logic here
  // After successful submission:
  router.push("/confirm");
}
</script>

<style>
/* Custom theme styles */
:root {
  --color-primary: #003b5c; /* Deep Navy Blue */
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
  border: 1px solid rgba(0, 59, 92, 0.1);
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 59, 92, 0.05);
}
</style>
