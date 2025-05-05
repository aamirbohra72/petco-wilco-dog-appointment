<script setup lang="ts">
import type { BuilderContent } from '@builder.io/sdk-vue';
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue';
import { onMounted, ref } from 'vue';
import ProductList from "@/components/ProductList.vue";
const apiKey = '239780719aa94fa4915d2d2d1f26f4fb';

import { registeredComponents } from '@/components/builder/init-builder';

const model = 'page';
const staticPath = '/'; 

const content = ref<BuilderContent | null>(null);
const canShowContent = ref(false);

// For the custom component
const custom_component = {
  name : "BuilderContent",
  components: { Content },
  data: {
    content: null
  },
  methods: {
    getRegisteredComponents(){
      return registeredComponents;
    }
  },
}

onMounted(async () => {
  content.value = await fetchOneEntry({
    model,
    apiKey,
    userAttributes: {
      urlPath: staticPath,
    },
  });

  canShowContent.value = !!content.value || isPreviewing();
});
</script>

<template>
  <Content
    v-if="canShowContent"
    :model="model"
    :content="content"
    :api-key="apiKey"
    :customComponents="custom_component.methods.getRegisteredComponents()"
  />
  <div v-else>Content not found</div>

  <!-- <ProductList /> -->
  <!-- <BuilderContents /> -->
</template>
