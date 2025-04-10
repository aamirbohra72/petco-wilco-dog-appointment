<!-- src/App.vue -->
<script setup>
import { defineComponent } from 'vue';
</script>

<template>
  <div id="app">
    <header>
      <!-- You can add a navigation menu here if needed -->
    </header>

    <!-- This is where the routed components will be injected based on the current route -->
    <router-view></router-view>
  </div>
</template>
