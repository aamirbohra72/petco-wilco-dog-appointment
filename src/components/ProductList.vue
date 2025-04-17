<template>
  <div class="flex !px-8 !my-4 flex-wrap gap-4 lg:gap-6 lg:flex-nowrap">
    <div
      v-for="(product, index) in product_data"
      :key="`${product.title}-${index}`"
      class="flex cursor-pointer flex-col min-w-[325px] max-w-[375px] lg:w-[496px] relative border border-neutral-200 rounded-md hover:shadow-xl"
    >
      <router-link :to="{ name: 'service', params: { productId: product.id } }">
        <img :src="product.thumbnail" :alt="product.title" class="object-cover h-auto rounded-t-md aspect-video" />
        <div class="flex flex-col items-start p-4 grow">
          <p class="font-extrabold text-lg typography-text-base text-[#003B5C]">{{ product.title }}</p>
          <p class="mt-1 mb-4 font-normal typography-text-sm text-geay-700 dark:text-neutral-50 line-clamp-3">{{ product.description }}</p>
          <SfButton size="sm" variant="tertiary" class="relative mt-auto">{{ button }}</SfButton>
        </div>
      </router-link>
    </div>
  </div>
</template>

  
<script>
  import { ref, onMounted } from "vue";
  import medusa from "@/lib/medusa";

  export default {
    setup() {
      const product_data = ref([]);

      onMounted(async () => {
        try {
          const { products } = await medusa.products.list({
            type_id: ["pt-uttr667ddwawdw"],
          });
          console.log("Filtered products: ", products);
          product_data.value = products;
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      });

      return {
        product_data,
      };
    },
  };
</script>
