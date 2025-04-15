<script setup>
import { SfButton } from '@storefront-ui/vue';
</script>

<template>
  <header class="header w-full z-10 !mb-3">
    <div class="container">
      <div class="header-content">
        <div class="search-bar">
          <input class="font-semibold text-neutral-950 !dark:text-neutral-950" type="text" placeholder="Search Your Items" />
          <button class="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-search-icon lucide-search text-neutral-950">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </div>

        <div class="logo">
          <a href='/'>
            <img src="@/assets/wilco.png" alt="Wilco Logo" class="logo-img w-32 h-auto" />
          </a>
        </div>

        <div class="nav-links">
          <div class="flex items-center gap-2">
            <!-- Login Button -->
            <SfButton size="lg" class="!p-2 !bg-neutral-950 text-neutral-50  font-semibold">
              Login
            </SfButton>

            <!-- Register Link styled like button -->
            <SfButton size="lg" class="!p-2 !bg-neutral-950 text-neutral-50  font-semibold">
              Register
            </SfButton>
          </div>

          <a href="#" class="relative inline-block">
            <!-- Badge -->
            <span
              class="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold z-10">
              0
            </span>

            <!-- Cart Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-shopping-cart-icon lucide-shopping-cart">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
  name: 'HeaderTop'
};
</script>

<style scoped>
/* Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

a {
  text-decoration: none;
  color: #0056b3;
}

.header {
  background-color: #003b5c;
  padding: 15px 0;
  color: white;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-bar {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 4px;
  padding: 5px 10px;
}

.search-bar input {
  border: none;
  padding: 5px;
  outline: none;
}

.search-button {
  background: none;
  border: none;
  cursor: pointer;
}

.search-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: #003b5c;
  border-radius: 50%;
  position: relative;
}

.search-icon::after {
  content: "";
  position: absolute;
  top: 12px;
  left: 12px;
  width: 6px;
  height: 2px;
  background-color: #003b5c;
  transform: rotate(45deg);
}

.text-logo {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-links a {
  color: white;
  margin-left: 10px;
  font-size: 14px;
}

.divider {
  margin: 0 5px;
  color: white;
}

.cart-icon {
  position: relative;
  margin-left: 15px;
}

.cart-icon::before {
  content: "🛒";
  font-size: 18px;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background: white;
  color: #003b5c;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
</style>
