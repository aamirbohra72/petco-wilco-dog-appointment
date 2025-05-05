<!-- file: MedusaProductGrid.vue -->
<!-- <template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="product in products" :key="product.id"
            class="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <img v-if="product.thumbnail" :src="product.thumbnail" alt="Product thumbnail"
                class="w-full h-48 object-cover rounded mb-4" />
            <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
            <p class="text-sm text-gray-600">{{ product.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import medusa from '@/lib/medusa';

const products = ref([]);

onMounted(async () => {
    try {
        const { products: fetched } = await medusa.products.list({
            type_id: ['grooming-service'],
        });
        products.value = fetched;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
});
</script> -->

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="product in products" :key="product.id" @click="goToService(product.id)"
            class="cursor-pointer border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <img v-if="product.thumbnail" :src="product.thumbnail" alt="Product thumbnail"
                class="w-full h-48 object-cover rounded mb-4" />
            <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
            <p class="text-sm text-gray-600">{{ product.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import medusa from '@/lib/medusa';

const products = ref([]);
const router = useRouter();

const goToService = (productId) => {
    router.push(`/service/${productId}`);
};

onMounted(async () => {
    try {
        const { products: fetched } = await medusa.products.list({
            type_id: ['grooming-service'],
        });
        products.value = fetched;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
});
</script>