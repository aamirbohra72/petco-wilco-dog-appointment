<!-- src/App.vue -->
<script setup>
import { defineComponent } from 'vue';
import HeaderTop from './components/HeaderTop.vue';
import FooterBottom from './components/FooterBottom.vue';
</script>

<template>
  <div id="app">
    <HeaderTop />

    <!-- This is where the routed components will be injected based on the current route -->
    <div class="px-8">
      <router-view></router-view>
    </div>
    <FooterBottom />
  </div>
</template>
