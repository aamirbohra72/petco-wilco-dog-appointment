<script lang="ts" setup>
import { ref } from 'vue';
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

import image1 from '@/assets/Deshade-1.jpg';
import image2 from '@/assets/Deshade-2.webp';
import image3 from '@/assets/Deshade-3.jpg';

const images = [
  { imageSrc: image1, imageThumbSrc: image1, alt: 'Image 1' },
  { imageSrc: image2, imageThumbSrc: image2, alt: 'Image 2' },
  { imageSrc: image3, imageThumbSrc: image3, alt: 'Image 3' },
];

const thumbsRef = ref<HTMLElement>();
const firstThumbRef = ref<HTMLButtonElement>();
const lastThumbRef = ref<HTMLButtonElement>();
const firstThumbVisible = ref(false);
const lastThumbVisible = ref(false);
const activeIndex = ref(0);

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
  } else if (event.swipeLeft && activeIndex.value < images.length - 1) {
    activeIndex.value += 1;
  }
};

const assignRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (!el) return;
  if (index === images.length - 1) {
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
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="col-span-1">
      <div class="relative flex w-full max-h-[600px] aspect-[3/4]">
        <SfScrollable
          ref="thumbsRef"
          class="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          direction="vertical"
          :active-index="activeIndex"
          :previous-disabled="activeIndex === 0"
          :next-disabled="activeIndex === images.length - 1"
          buttons-placement="floating"
        >
          <template #previousButton="defaultProps">
            <SfButton
              v-if="!firstThumbVisible"
              v-bind="defaultProps"
              :disabled="activeIndex === 0"
              class="absolute !rounded-full z-10 top-4 rotate-90 bg-white"
              variant="secondary"
              size="sm"
              square
            >
              <SfIconChevronLeft size="sm" />
            </SfButton>
          </template>
          <button
            v-for="({ imageThumbSrc, alt }, index) in images"
            :key="`${alt}-${index}-thumbnail`"
            :ref="(el) => assignRef(el, index)"
            type="button"
            :aria-label="alt"
            :aria-current="activeIndex === index"
            :class="`md:w-[78px] md:h-auto relative shrink-0 pb-1 mx-4 -mb-2 border-b-4 snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0  ${
              activeIndex === index ? 'border-primary-700' : 'border-transparent'
            }`"
            @mouseover="activeIndex = index"
            @focus="activeIndex = index"
          >
            <img :alt="alt" class="border border-neutral-200" width="78" height="78" :src="imageThumbSrc" />
          </button>
          <template #nextButton="defaultProps">
            <SfButton
              v-if="!lastThumbVisible"
              v-bind="defaultProps"
              :disabled="activeIndex === images.length"
              class="absolute !rounded-full z-10 bottom-4 rotate-90 bg-white"
              variant="secondary"
              size="sm"
              square
            >
              <SfIconChevronRight size="sm" />
            </SfButton>
          </template>
        </SfScrollable>
        <SfScrollable
          class="w-full h-full snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          :active-index="activeIndex"
          direction="vertical"
          wrapper-class="h-full m-auto"
          is-active-index-centered
          buttons-placement="none"
          :drag="{ containerWidth: true }"
          @on-drag-end="onDragged"
        >
          <div
            v-for="({ imageSrc, alt }, index) in images"
            :key="`${alt}-${index}`"
            class="flex justify-center h-full basis-full shrink-0 grow snap-center snap-always"
          >
            <img
              :aria-label="alt"
              :aria-hidden="activeIndex !== index"
              class="object-cover w-auto h-full"
              :alt="alt"
              :src="imageSrc"
            />
          </div>
        </SfScrollable>
      </div>
    </div>
    <div class="col-span-1">
      <section class="md:max-w-[640px]">
    <h1 class="mb-1 font-bold typography-headline-4 text-2xl">Deshedding Treatment</h1>
    <strong class="block font-bold typography-headline-3">$ 50.99</strong>
    <div class="inline-flex items-center mt-4 mb-2">
      <SfRating size="xs" :value="3" :max="5" />
      <SfCounter class="ml-1" size="xs">123</SfCounter>
      <SfLink href="#" variant="secondary" class="ml-2 text-xs text-neutral-500"> 123 reviews </SfLink>
    </div>
    
    <!-- Varient Selector -->
    <div class="my-2">
      <p class="text-sm font-semibold !my-2">Select the pet size according to weight</p>
      <div class="flex gap-2">
        <SfButton size="lg" class="!rounded-full !bg-[#003B5C]">XS</SfButton>
        <SfButton size="lg" class="!rounded-full !bg-[#003B5C]">S</SfButton>
        <SfButton size="lg" class="!rounded-full !bg-[#003B5C]">M</SfButton>
        <SfButton size="lg" class="!rounded-full !bg-[#003B5C]">L</SfButton>
        <SfButton size="lg" class="!rounded-full !bg-[#003B5C]">XL</SfButton>
      </div>
    </div>

    <div class="!my-4 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-5">
      <!-- Title -->
      <h2 class="text-2xl font-bold text-gray-900">What’s Included</h2>

      <!-- Subtitle -->
      <p class="text-gray-600 text-sm">
        Our Deshedding Treatment includes a full grooming experience tailored for pets that shed heavily.
      </p>

      <!-- Package Features -->
      <ul class="space-y-3">
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
       <SfButton class="!bg-[#003B5C] !p-4">
          <p class="font-semibold">Book Appointment</p>
       </SfButton>
    </div>
    </section>
    </div>
  </div>
</template>