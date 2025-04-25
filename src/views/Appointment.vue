<template>
  <div class="bg-gray-50 bg-cover bg-center" style="background-image: url('src/assets/paw-bg.jpg')">
    <div v-if="errorMessage" class="fixed top-0 my-2 left-1/2 transform -translate-x-1/2 z-50">
      <div
        role="alert"
        class="flex items-center max-w-[600px] shadow-md bg-red-100 pr-2 pl-4 ring-1 ring-red-300 text-red-800 typography-text-sm md:typography-text-base py-1 rounded-md"
      >
        <p class="py-2 mr-2 font-semibold">{{ errorMessage }}</p>
      </div>
    </div>
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <!-- Progress Bar -->
      <div class="px-4 py-5 sm:px-6 bg-primary text-white">
        <h3 v-if="currentStep === 1" class="text-lg leading-6 font-medium">
          Book a {{ formData.service_title }} Appointment
        </h3>
        <h3 v-if="currentStep === 2" class="text-lg leading-6 font-medium">
          Choose a location for {{ formData.petName }}'s {{ formData.service_title }} Appointment
        </h3>
        <h3 v-if="currentStep === 3" class="text-lg leading-6 font-medium">
          Pick a time for {{ formData.petName }}'s at  {{ spliLocation(formData.location_address) }}
        </h3>
        <h3 v-if="currentStep === 4" class="text-lg leading-6 font-medium">
          Pay for {{ formData.petName }}'s {{ formData.service_title }}
        </h3>
        <h3 v-if="currentStep === 5" class="text-lg leading-6 font-medium">
          Review and confirm your appointment
        </h3>
        <div class="mt-3 flex items-center">
          <div class="flex-1 bg-primary-foreground/30 rounded-full h-2.5">
            <div class="bg-white h-2.5 rounded-full transition-all duration-300"
              :style="{ width: `${(currentStep / 5) * 100}%` }"></div>
          </div>
          <span class="ml-4 text-sm flex-shrink-0">Step {{ currentStep }} of 5</span>
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
              <label for="petName" class="block text-sm font-medium text-gray-700">
                Pet Name <span class="text-red-500">*</span>
              </label>
              <input id="petName" v-model="formData.petName" type="text"
                class="mt-1 h-8 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                :class="{ 'border-red-500': errors.petName }" />
              <p v-if="errors.petName" class="mt-1 text-sm text-red-600">
                {{ errors.petName }}
              </p>
            </div>

            <!-- Pet Breed -->
            <div>
              <label for="petBreed" class="block text-sm font-medium text-gray-700">
                Pet Breed <span class="text-red-500">*</span>
              </label>
              <input id="petBreed" v-model="formData.petBreed" type="text"
                class="mt-1 h-8 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                :class="{ 'border-red-500': errors.petBreed }" />
              <p v-if="errors.petBreed" class="mt-1 text-sm text-red-600">
                {{ errors.petBreed }}
              </p>
            </div>

            <!-- Pet Species -->
            <div>
              <label for="petSpecies" class="block text-sm font-medium text-gray-700">
                Pet Species <span class="text-red-500">*</span>
              </label>
              <select id="petSpecies" v-model="formData.petSpecies"
                class="mt-1 h-8 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                :class="{ 'border-red-500': errors.petSpecies }">
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
              <input id="dob" v-model="formData.dob" type="date"
                class="mt-1 h-8 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                :class="{ 'border-red-500': errors.dob }" />
              <p v-if="errors.dob" class="mt-1 text-sm text-red-600">
                {{ errors.dob }}
              </p>
            </div>

            <!-- Pet Weight -->
            <div>
              <label for="petWeight" class="block text-sm font-medium text-gray-700">
                Pet Weight (lbs) <span class="text-red-500">*</span>
              </label>
              <input id="petWeight" v-model="formData.petWeight" type="number" step="0.1"
                class="mt-1 h-8 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                :class="{ 'border-red-500': errors.petWeight }" />
              <p v-if="errors.petWeight" class="mt-1 text-sm text-red-600">
                {{ errors.petWeight }}
              </p>
            </div>

            <!-- Pet License ID -->
            <div>
              <label for="license" class="block text-sm font-medium text-gray-700">
                Pet License ID (optional)
              </label>
              <input id="license" v-model="formData.license" type="text"
                class="mt-1 h-8 pl-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
            </div>
          </div>
        </div>

        <!-- Step 2: Date & Location Selection -->
        <div v-if="currentStep === 2">
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-medium mb-3">Available Locations</h3>
              
              <form class="my-4">
                <label for="search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input id="zipcode" v-model="formData.zipcode" type="text"
                    class="block font-extrabold w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-50 dark:placeholder-gray-400 dark:text-gray-900"
                    :class="{ 'border-red-500': errors.zipcode }"
                    placeholder="Enter your zip code" required />
                  <button type="button" @click="findLocations"
                    class="text-white absolute end-2.5 bottom-2.5 !bg-[#003B5C] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
              </form>

              <div class="grid grid-cols-2 gap-4">
                <div
                  v-for="(location, index) in available_locations"
                  :key="index"
                  class="border rounded-lg p-4 cursor-pointer"
                  :class="{
                    'bg-primary text-white': formData.selectedLocation === index && formData.location_id !== '',
                    'hover:bg-gray-100': !(formData.selectedLocation === index && formData.location_id !== ''),
                  }"
                  @click="formData.selectedLocation = index; formData.location_id = location.id; formData.location_address = location.address[0].address"
                >
                  <h4 class="font-medium">{{ location.address[0].address }}</h4>
                  <p class="text-sm text-gray-500">{{ location.address[0].zip_code }}</p>
                </div>
              </div>
              <p v-if="errors.selectedLocation" class="mt-1 text-sm text-red-600">
                {{ errors.selectedLocation }}
              </p>
            </div>
          </div>
        </div>

        <!-- Step 3: Time Slot Selection -->
        <div v-if="currentStep === 3">
          <div class="space-y-6">
            <div>
              <vue-cal
                class="vuecal--rounded-theme custom-blue-theme !w-full"
                xsmall
                hide-view-selector
                :time="false"
                active-view="month"
                :disable-views="['week']"
                style="width: 270px; height: 300px"
                @cell-click="onDateSelect"
              />
              <p v-if="errors.appointmentDate" class="mt-1 text-sm text-red-600">
                {{ errors.appointmentDate }}
              </p>
            </div>

            <div>
              <h3 class="text-lg font-medium mb-3">Available Time Slots</h3>
              <div class="grid grid-cols-3 gap-3 sm:grid-cols-4">
                <button v-for="(slot, index) in available_slots" :key="index" type="button"
                  class="rounded-md py-2 px-3 text-sm font-medium" :class="{
                    'bg-primary text-white':
                      formData.selectedTimeSlot === index,
                    'bg-gray-100 text-gray-900 hover:bg-gray-200':
                      formData.selectedTimeSlot !== index,
                  }" @click="formData.selectedTimeSlot = index; formData.time_slot_id = slot.id">
                  {{ slot.start_time }} - {{ slot.end_time }}
                </button>
              </div>
              <p v-if="errors.selectedTimeSlot" class="mt-1 text-sm text-red-600">
                {{ errors.selectedTimeSlot }}
              </p>
            </div>
          </div>
        </div>

        <!-- Step 4: Payment -->
        <div v-if="currentStep === 4">
          <section class="bg-white antialiased dark:bg-gray-900">
            <div class="mx-auto">
              <div class="mx-auto max-w-5xl">
                <h2 class="text-xl font-semibold text-[#003B5C] dark:text-white">Payment</h2>

                <div class="mt-6 sm:mt-8 gap-3 lg:flex lg:items-start">
                  <form action="#" class="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8">
                    <div class="mb-6 grid grid-cols-2 gap-4">
                      <div class="col-span-2 sm:col-span-1">
                        <label for="full_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Full name (as displayed on card)* </label>
                        <input type="text" id="full_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" required />
                      </div>

                      <div class="col-span-2 sm:col-span-1">
                        <label for="card-number-input" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Card number* </label>
                        <input type="text" id="card-number-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="xxxx-xxxx-xxxx-xxxx" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required />
                      </div>

                      <div>
                        <label for="card-expiration-input" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Card expiration* </label>
                        <div class="relative">
                          <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                            <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                              <path
                                fill-rule="evenodd"
                                d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input datepicker datepicker-format="mm/yy" id="card-expiration-input" type="text" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="12/23" required />
                        </div>
                      </div>
                      <div>
                        <label for="cvv-input" class="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">
                          CVV*
                          <button data-tooltip-target="cvv-desc" data-tooltip-trigger="hover" class="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
                            <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd" />
                            </svg>
                          </button>
                          <div id="cvv-desc" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                            The last 3 digits on back of card
                            <div class="tooltip-arrow" data-popper-arrow></div>
                          </div>
                        </label>
                        <input type="number" id="cvv-input" aria-describedby="helper-text-explanation" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="•••" required />
                      </div>
                    </div>
                  </form>

                  <div class="mt-6 grow sm:mt-8 lg:mt-0">
                    <div class="rounded-lg border border-gray-100 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800">
                      <div class="space-y-2">
                        <dl class="flex items-center justify-between gap-4">
                          <dt class="text-base font-semibold text-gray-500 dark:text-gray-400">Original price</dt>
                          <dd class="text-base font-medium text-gray-900 dark:text-white">${{formData.service_price.prices[0].amount}}</dd>
                        </dl>

                        <dl class="flex items-center justify-between gap-4">
                          <dt class="text-base font-semibold text-gray-500 dark:text-gray-400">Savings</dt>
                          <dd class="text-base font-medium text-green-500">-$0</dd>
                        </dl>

                        <dl class="flex items-center justify-between gap-4">
                          <dt class="text-base font-semibold text-gray-500 dark:text-gray-400">Store Pickup</dt>
                          <dd class="text-base font-medium text-gray-900 dark:text-white">$0</dd>
                        </dl>

                        <dl class="flex items-center justify-between gap-4">
                          <dt class="text-base font-semibold text-gray-500 dark:text-gray-400">Tax</dt>
                          <dd class="text-base font-medium text-gray-900 dark:text-white">$0</dd>
                        </dl>
                      </div>

                      <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                        <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                        <dd class="text-base font-bold text-gray-900 dark:text-white">${{formData.service_price.prices[0].amount}}</dd>
                      </dl>
                    </div>

                    <div class="mt-6 flex items-center justify-center gap-4">
                      <img class="h-6 w-6 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="" />
                      <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg" alt="" />
                      <img class="h-6 w-6 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="" />
                      <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" alt="" />
                      <img class="h-6 w-6 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="" />
                      <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Step 5: Appointment Review -->
        <div v-if="currentStep === 5">
          <h2 class="text-xl font-semibold mb-6">Appointment Review</h2>

          <div class="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-200">
            <h3 class="text-xl font-semibold text-[#003b5c] mb-6">Summary</h3>

            <div class="space-y-6 text-[15px]">
              <!-- Pet Information -->
              <div>
                <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Pet Information
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
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
                    {{ formData.petWeight }} lbs
                  </p>
                </div>
              </div>

              <!-- Appointment Details -->
              <div>
                <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Appointment Details
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                  <p>
                    <span class="font-medium">Date:</span>
                    {{ formatDate(formData.appointmentDate) }}
                  </p>
                  <p>
                    <span class="font-medium">Time:</span>
                    {{
                      formData.selectedTimeSlot !== null
                        ? available_slots[formData.selectedTimeSlot].start_time + "-" + available_slots[formData.selectedTimeSlot].end_time
                        : ""
                    }}
                  </p>
                  <p>
                    <span class="font-medium">Location:</span>
                    {{ available_locations[formData.selectedLocation]?.address[0].address }}
                  </p>
                  <p>
                    <span class="font-medium">Address:</span>
                    {{ available_locations[formData.selectedLocation]?.address[0].address }}
                  </p>
                  <p>
                    <span class="font-medium">Zipcode:</span>
                    {{ formData.zipcode }}
                  </p>
                </div>
              </div>

              <!-- Service Details -->
              <div>
                <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Service Details
                </h4>
                <div class="text-gray-700">
                  <p>
                    <span class="font-medium">Service:</span> {{ formData.service_title }}
                  </p>
                  <!-- <p><span class="font-medium">Price:</span> $65.00</p> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="mt-8 flex justify-between">
          <button v-if="currentStep > 1" @click="prevStep" type="button"
            class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Previous
          </button>
          <div v-else></div>

          <!-- Step-specific action buttons -->
          <div>
            <!-- Step 1: Add Pet button -->
            <button v-if="currentStep === 1" @click="validateAndProceed" type="button"
              class="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#003B5C] hover:bg-[#002f4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003B5C]">
              Add Pet
            </button>

            <!-- Step 2: Select Time Slot button -->
            <button v-else-if="currentStep === 2" @click="validateAndProceed" type="button"
              class="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Select Time Slot
            </button>

            <!-- Step 3: Appointment Review button -->
            <button v-else-if="currentStep === 3" @click="validateAndProceed" type="button"
              class="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Continue to payment
            </button>

            <!-- Step 4: Confirm Appointment button -->
            <button v-else-if="currentStep === 4" @click="validateAndProceed" type="button"
              class="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#003B5C] hover:bg-[#002f4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003B5C]">
              Review Appointment
            </button>

            <!-- Step 5: Confirm Appointment button -->
            <button v-else @click="submitForm" type="button"
              class="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#003B5C] hover:bg-[#002f4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003B5C]">
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import medusa from "@/lib/medusa";
import axios from "axios";
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
const route = useRoute();
const router = useRouter();
const { customer } = storeToRefs(useAuthStore());

const available_locations = ref([]);
const available_slots = ref([])
const errorMessage = ref("");

const spliLocation = (str) =>{
  console.log("inside the split function--+++", str);
  const splited_string = str.split(",");
  console.log("splited string is---", splited_string)
  return splited_string[0];
}

onMounted(async () => {
  formData.product_id = route.query.productId;
  formData.variant_id = route.query.variantId;

  await medusa.products.retrieve(route.query.productId).then(({ product }) => {
    const variant_price = product.variants.find(v => v.id === route.query.variantId);
    formData.service_title = product.title;
    formData.service_price = variant_price;
  });
});

// Form data
const formData = reactive({
  // Step 1: Pet Information
  service_title: "",
  service_price: "",
  product_id: "",
  variant_id: "",
  location_id: "",
  pet_id: "",
  petName: "",
  petBreed: "",
  petSpecies: "",
  dob: "",
  petWeight: "",
  license: "",

  // Step 2: Location Selection
  selectedLocation: 0,
  zipcode: "",
  location_address: "",

  // Step 3: Time Slot Selection
  appointmentDate: "",
  selectedTimeSlot: null,
  time_slot_id: "",

  // Owner Information (for review step)
  ownerName: "John Doe", // Placeholder for review
  ownerEmail: "john@example.com", // Placeholder for review
  ownerPhone: "(555) 123-4567", // Placeholder for review
});

// Current step
const currentStep = ref(1);

// Validation errors
const errors = reactive({});

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

// Formate date for passing to backend
const backendDate = (dateObj) => {
  const year = dateObj.getFullYear() // "2025"
  const month = String(dateObj.getMonth() + 1).padStart(2, '0') // "04"
  const day = String(dateObj.getDate()).padStart(2, '0') // "18"
  return `${year}-${month}-${day}` // "2025-04-18"
}

// Select a date
const selectDate = (day) => {
  // Prevent selecting dates in the past
  if (day < 9) return; // Assuming today is April 9, 2025

  formData.appointmentDate = `2025-04-${day}`;
  errors.appointmentDate = "";
};

// Validate step 1 (Pet Information)
const validateStep1 = async () => {
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

  const body = {
    name: formData.petName,
    breed: formData.petBreed,
    species: formData.petSpecies,
    date_of_birth: formData.dob,
    weight: formData.petWeight,
    license_id: formData.license
  }

  const res = await axios.post('http://localhost:9000/store/pet',body, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
  });
  formData.pet_id = res.data.pet.id

  // console.log("after response----", formData)

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

  // console.log("on the step 2 ----->", formData);

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

// Validate step 4 (Payment selection)
const validatePayment = () =>{
  let isValid = true;
  return isValid;
}

// Validate current step and proceed to next step if valid
const validateAndProceed = () => {
  let isValid = false;

  if (currentStep.value === 1) {
    isValid = validateStep1();
  } else if (currentStep.value === 2) {
    isValid = validateStep2();
  } else if (currentStep.value === 3) {
    isValid = validateStep3();
  } else if (currentStep.value === 4) {
    isValid = validatePayment();
  }

  if (isValid) {
    currentStep.value++;
  }
};

// Function to find the location based on zip
const findLocations = async () => {
  try{
    const locations = await axios.get(`http://localhost:9000/store/location?zip_code=${formData.zipcode}&&p_id=${formData.product_id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
    if(locations.data.location <= 0){
      errorMessage.value = "No store is available for this area!";
      setTimeout(() => {
        errorMessage.value = "";
      }, 3000);
    }
    available_locations.value = locations.data.location;
  }
  catch(error){
    console.log("Error occured is", error);
  }
}

// Go back to previous step
const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

// On selecting the date
const onDateSelect = async (event) => {
  const date = backendDate(event)
  formData.appointmentDate = date
  try{
    const available_time_slots = await axios.get(`http://localhost:9000/store/appointment/available?location_id=${formData.location_id}&date=${date}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true // 👈 needed if server expects cookies
    });

    if(available_time_slots.data.appointment.length <= 0) {
      errorMessage.value = "No appointments are available for this date!";
      setTimeout(() => {
        errorMessage.value = "";
      }, 3000);
    }
    available_slots.value = available_time_slots.data.appointment[0].time_slots
  }
  catch(error){
    errorMessage.value = error.response.data.message;
    // Clear slots
    available_slots.value = [];
    setTimeout(() => {
      errorMessage.value = ""
    }, 3000);
  }
};

const submitForm = async () => {
  // Your form submission logic here
  // After successful submission:
  const body = {
    location_id: formData.location_id,
    product_id: formData.product_id,
    variant_id : formData.variant_id,
    customer_id: customer.value.id,
    pet_id: formData.pet_id,
    time_slot_id: formData.time_slot_id,
    date: formData.appointmentDate,
    location_address: {
        address: formData.location_address,
        zip_code: formData.zipcode
    }
  }
  const book_appointment = await axios.post('http://localhost:9000/store/appointment', body, {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
  console.log("booking appointment ---", book_appointment);
  router.push(`/confirm/${book_appointment.data.confirmation_number}`);
}
</script>

<style>
/* Custom theme styles */
:root {
  --color-primary: #003b5c;
  /* Deep Navy Blue */
  --color-primary-foreground: #ffffff;
}

/* Background Colors */
.bg-primary {
  background-color: var(--color-primary);
}

.bg-primary\/5 {
  background-color: rgba(0, 59, 92, 0.05);
  /* Soft tint of primary */
}

.bg-primary\/90 {
  background-color: rgba(0, 59, 92, 0.9);
  /* Almost solid primary */
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

.custom-blue-theme .vuecal__cell--selected,
.custom-blue-theme .vuecal__title-bar,
.custom-blue-theme .vuecal__cell--has-events,
.custom-blue-theme .vuecal__event,
.custom-blue-theme .vuecal__cell:hover {
  background-color: #003B5C !important;
  color: #ffffff !important;
}

.vuecal__cell-date {
  color: black;
}

/* When the date is selected or hovered (inside your custom theme) */
.custom-blue-theme .vuecal__cell--selected .vuecal__cell-date,
.custom-blue-theme .vuecal__cell:hover .vuecal__cell-date {
  color: white !important;
}
</style>
