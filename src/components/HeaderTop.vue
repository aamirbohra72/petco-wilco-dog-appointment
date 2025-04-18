<script setup>
import { SfButton } from '@storefront-ui/vue'
import SearchComponent from './SearchComponent.vue'
</script>

<template>
  <header class="w-full z-10 mb-3 bg-[#003B5C] px-8">
    <div class="max-w-7xl mx-auto px-4 h-20 grid grid-cols-3 items-center">
      
      <!-- Left: Search -->
      <div class="flex items-center">
        <SearchComponent />
      </div>

      <!-- Center: Logo -->
      <div class="flex justify-center">
        <a href="/">
          <img src="@/assets/wilco.png" alt="Wilco Logo" class="w-32 h-auto" />
        </a>
      </div>

      <!-- Right: Auth & Cart -->
      <div class="flex justify-end items-center gap-4 relative">
        <!-- Login -->
        <SfButton size="lg" class="!p-2 !bg-neutral-950 text-neutral-50 font-semibold">
          Login
        </SfButton>

        <!-- Register -->
        <SfButton size="lg" class="!p-2 !bg-neutral-950 text-neutral-50 font-semibold">
          Register
        </SfButton>

        <!-- Cart -->
        <a href="#" class="relative">
          <!-- Badge -->
          <span class="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold z-10">
            0
          </span>

          <!-- Cart Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-shopping-cart text-neutral-50">
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </a>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderTop'
}
</script>
