<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8 lg:px-16 my-6">
    <div v-for="(product, index) in product_data" :key="product.id || index"
      class="flex flex-col w-full cursor-pointer border border-neutral-200 rounded-md hover:shadow-xl">
      <router-link :to="{ name: 'service', params: { productId: product.id } }">
        <img :src="product.thumbnail" :alt="product.title"
          class="object-cover w-full h-60 md:h-72 lg:h-80 xl:h-96 rounded-t-md" />
        <div class="flex flex-col items-start p-4 grow">
          <p class="font-extrabold text-lg text-[#003B5C]">{{ product.title }}</p>
          <p class="mt-1 mb-4 font-normal text-gray-700 line-clamp-3">
            {{ product.description }}
          </p>
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
            type_id: ["grooming-service"],
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
