<script setup>
import { SfButton } from '@storefront-ui/vue'
import SearchComponent from './SearchComponent.vue'
import { logOut } from '@/lib/request'

import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore();
/* --- global auth state --- */
const { customer } = storeToRefs(useAuthStore());

const handleLogOut = async () => {
  try{
    await logOut();
    auth.logout()
  }
  catch(error){
    console.error("Error occured:", error.message)
  }
}
</script>

<template>
  <header class="w-full bg-[#003B5C] px-8 z-10 mb-3">
    <div
      class="max-w-7xl mx-auto h-20 grid grid-cols-3 items-center gap-4"
    >
      <!-- ① Search -->
      <div class="flex items-center">
        <SearchComponent />
      </div>

      <!-- ② Logo -->
      <div class="flex justify-center">
        <RouterLink to="/">
          <img
            src="@/assets/wilco.png"
            alt="Wilco logo"
            class="w-32 h-auto"
          />
        </RouterLink>
      </div>

      <!-- ③ Right side: greeting / auth buttons / cart -->
      <div
        class="flex justify-end items-center gap-4 relative overflow-visible"
      >
        <!-- greeting -->
        <div v-if="customer" class="flex gap-2">
          <p
            class="text-neutral-50 whitespace-nowrap mr-2 hidden md:block"
          >
            Welcome&nbsp;back,&nbsp;{{ customer.first_name }} {{ customer.last_name }}
          </p>

          <button class="text-neutral-50" @click="handleLogOut">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
          </button>
        </div>

        <!-- auth buttons (shown only when NOT logged in) -->
        <template v-if="!customer">
          <RouterLink to="/login">
            <SfButton
              size="lg"
              class="!p-2 !bg-neutral-950 text-neutral-50 font-semibold"
            >
              Login
            </SfButton>
          </RouterLink>

          <RouterLink to="/signup">
            <SfButton
              size="lg"
              class="!p-2 !bg-neutral-950 text-neutral-50 font-semibold"
            >
              Register
            </SfButton>
          </RouterLink>
        </template>

        <!-- cart -->
        <RouterLink to="/cart" class="relative">
          <span
            class="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold"
          >
            0
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shopping-cart text-neutral-50"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path
              d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
            />
          </svg>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
export default { name: 'HeaderTop' }
</script>
