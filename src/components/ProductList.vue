<template>
    <div>
        <!-- <h1>hello world</h1>
      <h2>Products</h2> -->
      <ul>
        <li v-for="product in products" :key="product.id">{{ product.title }}</li>
      </ul>
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
          const res = medusa.products.list().then(({ products, limit, offset, count }) => {
          })
          product_data.value = res.products;
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      });
    },
  };
</script>
  