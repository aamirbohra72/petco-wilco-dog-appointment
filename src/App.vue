<!-- src/App.vue
<script setup>
import { defineComponent } from 'vue';
import HeaderTop from './components/HeaderTop.vue';
import FooterBottom from './components/FooterBottom.vue';
</script>

<template>
  <div id="app">
    <HeaderTop />
    <div class="px-8">
      <router-view></router-view>
    </div>
    <FooterBottom />
  </div>
</template> -->

<!-- src/App.vue -->
<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import HeaderTop from './components/HeaderTop.vue';
import FooterBottom from './components/FooterBottom.vue';
import '@builder.io/sdk-vue/css';

const route = useRoute();

// Optional: you can set `isBuilderPage.value = true` based on some condition
</script>


<template>
  <div id="app">
    <HeaderTop />

    <div class="px-8">
      <!-- Conditionally render either Builder content or router view -->
      <BuilderContent v-if="isBuilderPage" />
      <router-view v-else :key="route.fullPath" />
    </div>
    
    <FooterBottom />
  </div>
</template>
