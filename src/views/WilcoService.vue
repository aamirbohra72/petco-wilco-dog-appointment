<script lang="ts" setup>
import { ref, onMounted, toRefs } from 'vue';
import medusa from '@/lib/medusa';
import { useRoute } from 'vue-router';

import {
  SfScrollable,
  SfButton,
  SfIconChevronLeft,
  SfIconChevronRight,
  type SfScrollableOnDragEndData,
  SfCounter,
  SfLink,
  SfRating,
  useId,
} from '@storefront-ui/vue';
import { unrefElement, useIntersectionObserver } from '@vueuse/core';
import { watch, type ComponentPublicInstance } from 'vue';
import { clamp } from '@storefront-ui/shared';
import { useCounter } from '@vueuse/core';

// import image1 from '@/assets/Deshade-1.jpg';
// import image2 from '@/assets/Deshade-2.webp';
// import image3 from '@/assets/Deshade-3.jpg';
import ProductList from '@/components/ProductList.vue';


// const images = [
//   { imageSrc: image1, imageThumbSrc: image1, alt: 'Image 1' },
//   { imageSrc: image2, imageThumbSrc: image2, alt: 'Image 2' },
//   { imageSrc: image3, imageThumbSrc: image3, alt: 'Image 3' },
// ];

const thumbsRef = ref<HTMLElement>();
const firstThumbRef = ref<HTMLButtonElement>();
const lastThumbRef = ref<HTMLButtonElement>();
const firstThumbVisible = ref(false);
const lastThumbVisible = ref(false);
const activeIndex = ref(0);
const images = ref([]);

watch(
  thumbsRef,
  (thumbsRef) => {
    if (thumbsRef) {
      useIntersectionObserver(
        firstThumbRef,
        ([{ isIntersecting }]) => {
          firstThumbVisible.value = isIntersecting;
        },
        {
          root: unrefElement(thumbsRef),
          rootMargin: '0px',
          threshold: 1,
        },
      );
    }
  },
  { immediate: true },
);

watch(
  thumbsRef,
  (thumbsRef) => {
    if (thumbsRef) {
      useIntersectionObserver(
        lastThumbRef,
        ([{ isIntersecting }]) => {
          lastThumbVisible.value = isIntersecting;
        },
        {
          root: unrefElement(thumbsRef),
          rootMargin: '0px',
          threshold: 1,
        },
      );
    }
  },
  { immediate: true },
);



const onDragged = (event: SfScrollableOnDragEndData) => {
  if (event.swipeRight && activeIndex.value > 0) {
    activeIndex.value -= 1;
  } else if (event.swipeLeft && activeIndex.value < images.value.length - 1) {
    activeIndex.value += 1;
  }
};

const assignRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (!el) return;
  if (index === images.value.length - 1) {
    lastThumbRef.value = el as HTMLButtonElement;
  } else if (index === 0) {
    firstThumbRef.value = el as HTMLButtonElement;
  }
};

const inputId = useId();
const min = ref(1);
const max = ref(999);
const { count, inc, dec, set } = useCounter(1, { min: min.value, max: max.value });

function handleOnChange(event: Event) {
  const currentValue = (event.target as HTMLInputElement)?.value;
  const nextValue = parseFloat(currentValue);
  set(clamp(nextValue, min.value, max.value));
}
import { defineProps } from 'vue';
const route = useRoute();
const productIdParam = route.params.productId;

const props = defineProps<{
  productId: string;
  variantId: string
}>();

if (typeof productIdParam === 'string') {
  const productId = productIdParam;
  // Proceed with using productId
} else {
  // Handle the error or unexpected type
  console.error('Invalid productId:', productIdParam);
}

// Create reactive references to props
// const { productId } = toRefs(props);
const product = ref(null);
const variantId = ref(null);

// Fetch product data on component mount
watch(
  () => route.params.productId,
  async (newProductId) => {
    if (typeof newProductId === 'string') {
      try {
        const { product: fetchedProduct } = await medusa.products.retrieve(newProductId);
        product.value = fetchedProduct;
        images.value = fetchedProduct.images.map((img, index) => ({
          imageSrc: img.url,
          imageThumbSrc: img.url,
          alt: `Image ${index + 1}`,
        }));
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    } else {
      console.error('Invalid productId:', newProductId);
    }
  },
  { immediate: true }
);

const selectedVariant = ref(null);

function selectVariant(variant:any) {
  selectedVariant.value = variant;
  emit('variant-selected', variant);
}

// --------------------------------------------------
// const selectedVariant = ref(null);

// const selectVariant = (variant) => {
//   selectedVariant.value = variant;
//   // Emit the selected variant to parent component
//   emit('variant-selected', variant);
// };

const emit = defineEmits(['variant-selected']);

// Helper function to get appropriate dog image based on size
const getDogImageForSize = (size:any) => {
  const images = {
    // 'S': '/placeholder.svg?height=200&width=200&text=Small+Dog',
    'S': 'https://media.istockphoto.com/id/524508267/photo/mixed-breed-dog-puppy-on-white-background.jpg?s=612x612&w=0&k=20&c=jw-DfXn35IqQ2TroL_8fUDnJteW8s1dwnav7BLj0LxE=',
    'M': 'https://media.istockphoto.com/id/1094019176/photo/adorable-schnauzer-wearing-a-red-bowtie-pants-while-standing.jpg?s=612x612&w=0&k=20&c=vFnkvYxoP1kVJYbFMyGrwjrPWUbfehbObQuFSZ6zWW0=',
    'L': 'https://media.istockphoto.com/id/1482716810/photo/serious-dog-looking-at-camera-front-view.jpg?s=612x612&w=0&k=20&c=bsPWEjrBaPbeRY_q6RKk8deW5O2RG9cxI0uUVz56-VA=',
    'XL': 'https://media.istockphoto.com/id/820792054/photo/portrait-of-a-red-and-white-pitbull-the-amanda-collection.jpg?s=612x612&w=0&k=20&c=9e96tYu0U8R9liCgSMZxIExrGOsly6YynvIe0V2dlmo='
  };
  
  // Replace these placeholder URLs with your actual dog images for each size
  return images[size] || images['M'];
};

// Helper function to get weight range based on size
const getWeightRange = (size) => {
  const ranges = {
    'S': '0-15 lbs',
    'M': '16-30 lbs',
    'L': '31-60 lbs',
    'XL': '61+ lbs'
  };
  
  return ranges[size] || '';
};

// Format price
const formatPrice = (price:any) => {
  return `$${parseFloat(price).toFixed(2)}`;
};

</script>

<template>
  
  <div class="grid px-8 grid-cols-2 gap-4">
    <div class="col-span-1">
      <div class="relative flex w-full max-h-[600px] aspect-[3/4]">
        <SfScrollable ref="thumbsRef"
          class="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          direction="vertical" :active-index="activeIndex" :previous-disabled="activeIndex === 0"
          :next-disabled="activeIndex === images.length - 1" buttons-placement="floating">
          <template #previousButton="defaultProps">
            <SfButton v-if="!firstThumbVisible" v-bind="defaultProps" :disabled="activeIndex === 0"
              class="absolute !rounded-full z-10 top-4 rotate-90 bg-white" variant="secondary" size="sm" square>
              <SfIconChevronLeft size="sm" />
            </SfButton>
          </template>
          <button v-for="({ imageThumbSrc, alt }, index) in images" :key="`${alt}-${index}-thumbnail`"
            :ref="(el) => assignRef(el, index)" type="button" :aria-label="alt" :aria-current="activeIndex === index"
            :class="`md:w-[78px] md:h-auto relative shrink-0 pb-1 mx-4 -mb-2 border-b-4 snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0  ${activeIndex === index ? 'border-primary-700' : 'border-transparent'
              }`" @mouseover="activeIndex = index" @focus="activeIndex = index">
            <img :alt="alt" class="border border-neutral-200" width="78" height="78" :src="imageThumbSrc" />
          </button>
          <template #nextButton="defaultProps">
            <SfButton v-if="!lastThumbVisible" v-bind="defaultProps" :disabled="activeIndex === images.length"
              class="absolute !rounded-full z-10 bottom-4 rotate-90 bg-white" variant="secondary" size="sm" square>
              <SfIconChevronRight size="sm" />
            </SfButton>
          </template>
        </SfScrollable>
        <SfScrollable
          class="w-full h-full snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          :active-index="activeIndex" direction="vertical" wrapper-class="h-full m-auto" is-active-index-centered
          buttons-placement="none" :drag="{ containerWidth: true }" @on-drag-end="onDragged">
          <div v-for="({ imageSrc, alt }, index) in images" :key="`${alt}-${index}`"
            class="flex justify-center h-full basis-full shrink-0 grow snap-center snap-always">
            <img :aria-label="alt" :aria-hidden="activeIndex !== index" class="object-cover w-auto h-full" :alt="alt"
              :src="imageSrc" />
          </div>
        </SfScrollable>
      </div>
    </div>
    <div class="col-span-1">
      <section class="md:max-w-[640px]">

        <!-- <h1 class="mb-1 font-bold typography-headline-4 text-2xl">Deshedding Treatment</h1> -->
        <!-- <WilcoPetGrooming :product-id="productId" /> -->
        <div v-if="product">
          <h1 class="mb-1 font-bold typography-headline-4 text-2xl">{{ product.title }}</h1>
        </div>
        <div v-else>
          <p>Loading product details...</p>
        </div>



        <!-- <div v-for="(variant, index) in product.variants" :key="variant.id" class="mb-4"></div> -->
        <!-- <strong class="block font-bold typography-headline-3">${{ product.variants[0].prices[0].amount / 100 }}</strong> -->
  

        <div class="inline-flex items-center mt-4 mb-2">
          <SfRating size="xs" :value="3" :max="5" />
          <SfCounter class="ml-1" size="xs">123</SfCounter>
          <SfLink href="#" variant="secondary" class="ml-2 text-xs text-neutral-500"> 123 reviews </SfLink>
        </div>

        <!-- Varient Selector -->

        <!-- <div class="my-2">
    <p class="text-sm font-semibold !my-2">Select the pet size according to weight</p>
    <div class="flex gap-2">
      <SfButton
        v-for="variant in product.variants"
        :key="variant.id"
        size="lg"
        class="!rounded-full !bg-[#003B5C]"
        @click="selectVariant(variant)"
      >
        {{ variant.title }}
      </SfButton>
    </div>
  </div> -->

  <!-- --------------------------------------------------------------- -->


  <div class="my-4">
    <p class="text-sm font-semibold mb-3">Select the pet size according to weight</p>
    
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div 
        v-for="variant in product.variants" 
        :key="variant.id"
        class="size-card relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200"
        :class="selectedVariant && selectedVariant.id === variant.id ? 'border-[#003B5C] shadow-md' : 'border-gray-200 hover:border-[#003B5C]'"
        @click="selectVariant(variant)"
      >
        <!-- Card Content -->
        <div class="flex flex-col items-center p-3">
          <!-- Circular Image -->
          <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md mb-2">
            <img :src="getDogImageForSize(variant.title)" :alt="`${variant.title} size dog`" class="w-full h-full object-cover" />
          </div>
          
          <!-- Size Title -->
          <h3 class="font-bold text-gray-800">{{ variant.title }}</h3>
          
          <!-- Weight Range -->
          <p class="text-xs text-gray-500 mb-1">{{ getWeightRange(variant.title) }}</p>
          
          <!-- Price -->
          <!-- <p class="text-emerald-600 font-semibold">{{ formatPrice(variant.price) }}</p> -->
          <!-- <span v-if="selectedVariant.prices && selectedVariant.prices.length > 0">
        ${{ (selectedVariant.prices[0].amount / 100).toFixed(2) }}
      </span>  -->
        </div>
        
        <!-- Selected Indicator -->
        <div 
          v-if="selectedVariant && selectedVariant.id === variant.id" 
          class="absolute top-2 right-2 bg-[#003B5C] text-white rounded-full p-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- ------------------------------------------------------------------------- -->

   <div v-if="selectedVariant" class="mt-4">
    <!-- <h2 class="text-lg font-semibold">Selected Price</h2> -->
    <p>
      Price:
      <span v-if="selectedVariant.prices && selectedVariant.prices.length > 0">
        ${{ (selectedVariant.prices[0].amount / 100).toFixed(2) }}
      </span>
      <span v-else>
        Not available
      </span>
    </p>
  
    <p>
      Size:
      {{ selectedVariant.options?.[0]?.value || 'N/A' }}
    </p>
  </div>
        

        <div class="!my-4 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-5 ">
          <!-- Title -->
          <h2 class="text-2xl font-bold text-gray-900">What’s Included</h2>

          <!-- Subtitle -->
          <p class="text-gray-600 text-sm">
            <!-- Our Deshedding Treatment includes a full grooming experience tailored for pets that shed heavily.
         -->
            {{ product.description }}
          </p>

          <!-- Package Features -->
          <ul class="space-y-3 ">
            <li class="flex items-start gap-3">
              <span class="text-green-600">✔️</span>
              <span class="text-gray-700">Gentle bath with deep cleansing deshedding shampoo</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-600">✔️</span>
              <span class="text-gray-700">Blow dry and undercoat removal</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-600">✔️</span>
              <span class="text-gray-700">Nail trimming and paw pad cleaning</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-600">✔️</span>
              <span class="text-gray-700">Anal gland expression</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-600">✔️</span>
              <span class="text-gray-700">Ear cleaning</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-600">✔️</span>
              <span class="text-gray-700">Brush-out and finishing spray</span>
            </li>
          </ul>

          <!-- Book Appointment -->
          <router-link :to="{ name: 'appointment', params: { productId: product.id } }">
          <SfButton class="!bg-[#003B5C] !p-4 mt-10">
            <p class="font-semibold">Book Appointment</p>
          </SfButton>
        </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.size-card {
  transition: transform 0.2s;

}

.size-card:hover {
  transform: translateY(-4px);
}
</style>