<script>
import { ref, onMounted } from "vue";
import medusa from "@/lib/medusa";
import ProductList from '@/components/ProductList.vue';

export default {
    setup() {  
      onMounted(async () => {
        try {
          const res = await medusa.products.list().then(({ products }) => {
            console.log("This is the product data in service page---", products);
            return products
          })
          // product_data.value = res.products;
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      });
    },
  };
</script>

<template>
  <div class="wilco-grooming">
    <!-- Hero Section -->
    <div class="bg-white dark:bg-gray-900 !my-2">
      <section class="grid grid-cols-2">
        <!-- Left content -->
        <div class="col-span-1">
          <h1
            class="text-3xl !px-10 md:text-2xl xl:text-5xl font-extrabold tracking-tight leading-tight dark:text-white">
            Wilco Grooming is Ready to Pamper Your Pets.
          </h1>
          <p
            class="!px-10 !my-2 font:extrabold text-gray-500 dark:text-gray-400 text-lg lg:text-xl font-light max-w-2xl mx-auto lg:mx-0">
            Call to book an appointment or schedule online Choose a wilco location near you and linked it to in store
            Wilco rewards
          </p>
          <!-- <div class="!px-8">
            <button class="border b-2 !p-4 rounded-full bg-[#003B5C]">
              <p class="text-lg text-white font-semibold">Book Now</p>
            </button>
          </div> -->
        </div>

        <!-- Right image -->
        <div class="col-span-1 flex items-end justify-end pr-10">
          <img src="@/assets/Home_Pet_banner-removebg-preview.png" alt="Pet Grooming Banner" class="max-w-full h-auto object-contain">
        </div>
      </section>
    </div>

    <!-- Booking CTA -->
    <section class="!px-8 !my-4">
        <div class="!bg-[#003B5C] !p-6">
          <h2 class="text-center text-neutral-50 dark:text-neutral-50 text-2xl font semibold">Want to book a grooming appointment online?</h2>
          <h2 class="text-center text-neutral-50 dark:text-neutral-50">Pair your Farmstore.com account to your Wilco Family Rewards number.</h2>
          <a href="#" class="text-neutral-50 underline-offset-2 text-center"></a>
          <!-- <SfLink href="#" variant="secondary" class="!text-neutral-50 !flex !justify-center">Click here to learn more!</SfLink> -->
        </div>
    </section>

    <!-- Services Section -->
    <ProductList />

    <!-- Additional Info Section -->
    <section class="!px-8 !my-4">
        <div class="!bg-[#003B5C] !p-6">
          <h2 class="text-center text-neutral-50 dark:text-neutral-50">
            If you would like your pet to be groomed regularly with the groomer working through this,
            it is advised we can provide for an additional cost. We, if you require a longer period
            for grooming, immediately you guarantee to complete the groom, we must charge for the
            additional time. Please note that all pets must be up to date with their vaccinations and
            in good health and current on rabies vaccinations for all appointments and walk-in
            services.
          </h2>
        </div>
    </section>
  </div>
</template>

<script setup>
import ProductList from '@/components/ProductList.vue';
import { SfLink } from '@storefront-ui/vue';
</script>
