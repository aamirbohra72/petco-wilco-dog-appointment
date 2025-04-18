<template>
  <form ref="referenceRef" role="search" class="relative w-full" @submit.prevent="submit">
    <SfInput
      ref="inputRef"
      v-model="inputModel"
      aria-label="Search"
      placeholder="Search for the services ....."
      @focus="open"
      @keydown="handleInputKeyDown"
    >
      <template #prefix><SfIconSearch /></template>
      <template #suffix>
        <button
          v-if="inputModel"
          type="button"
          aria-label="Reset search"
          class="flex rounded-md"
          @click="reset"
        >
          <SfIconCancel />
        </button>
      </template>
    </SfInput>

  <!-- Dropdown -->
  <div
    v-if="isOpen"
    ref="floatingRef"
    :style="style"
    class="absolute z-10 left-0 right-0"
  >
    <!-- Loader -->
    <div
      v-if="isLoadingSnippets"
      class="flex items-center justify-center w-full h-20 py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md"
    >
      <SfLoaderCircular />
    </div>

    <!-- Search Results -->
    <div
      v-else
      class="bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md max-h-[320px] overflow-y-auto"
    >
      <!-- Show "No result found" -->
      <p
        v-if="snippets.length === 0"
        class="text-center py-4 text-neutral-500 font-medium"
      >
        No result found
      </p>

      <!-- Show matching results -->
      <ul
        v-else
        ref="dropdownListRef"
        class="divide-y divide-neutral-100"
      >
        <li
          v-for="{ highlight, rest, product } in snippets"
          :key="product.id"
          class="hover:bg-neutral-100 transition-colors"
        >
          <SfListItem
            tag="button"
            type="button"
            class="flex justify-between items-center p-2 w-full"
            @click="() => selectValue(product.title, product.id)"
            @keydown.enter.space.prevent="selectValue(product.title, product.id)"
          >
            <div class="grid grid-cols-2 gap-4">
              <div class="col-span-1">
                <!-- Image on the right -->
                <img
                  :src="product.thumbnail"
                  alt=""
                  class="w-12 h-12 object-cover rounded ml-4"
                />
              </div>
              <div class="col-span-1">
                <!-- Title on the left -->
                <p class="text-left text-lg">
                  <span class="text-primary-700">{{ highlight }}</span
                  ><span class="font-medium">{{ rest }}</span>
                </p>
              </div>

            </div>
          </SfListItem>
        </li>
      </ul>
    </div>
  </div>

  </form>
</template>

<script lang="ts" setup>
import medusa from '@/lib/medusa';
import { type Ref, ref, watch, onMounted } from 'vue';
import { offset } from '@floating-ui/vue';
import { watchDebounced } from '@vueuse/shared';
import { unrefElement } from '@vueuse/core';
import {
  SfIconCancel,
  SfIconSearch,
  SfInput,
  SfListItem,
  SfLoaderCircular,
  useDisclosure,
  useDropdown,
  useTrapFocus,
} from '@storefront-ui/vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const product_data = ref([]);
const selectValue = (phrase: string, productId: string) => {
  inputModel.value = phrase;
  close();
  reset();
  router.push(`/service/${productId}`);
};

onMounted(async () => {
  try {
    const { products } = await medusa.products.list({
      type_id: ["grooming-service"],
    });
    product_data.value = products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});

const inputModel = ref('');
const inputRef = ref();
const dropdownListRef = ref();
const isLoadingSnippets = ref(false);
const snippets = ref<{ highlight: string; rest: string; product: Product }[]>([]);
const { isOpen, close, open } = useDisclosure();
const { referenceRef, floatingRef, style } = useDropdown({
  isOpen,
  onClose: close,
  placement: 'bottom-start',
  middleware: [offset(4)],
});
const { focusables: focusableElements } = useTrapFocus(dropdownListRef as Ref<HTMLElement>, {
  trapTabs: false,
  arrowKeysUpDown: true,
  activeState: isOpen,
  initialFocus: false,
});

const submit = () => {
  close();
  alert(`Search for phrase: ${inputModel.value}`);
};

const focusInput = () => {
  const inputEl = unrefElement(inputRef)?.querySelector('input');
  inputEl?.focus();
};

const reset = () => {
  inputModel.value = '';
  snippets.value = [];
  close();
  focusInput();
};

// const selectValue = (phrase: string) => {
//   inputModel.value = phrase;
//   close();
//   focusInput();
// };

const handleInputKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') reset();
  if (event.key === 'ArrowUp') {
    open();
    if (isOpen && focusableElements.value.length > 0) {
      focusableElements.value[focusableElements.value.length - 1].focus();
    }
  }
  if (event.key === 'ArrowDown') {
    open();
    if (isOpen && focusableElements.value.length > 0) {
      focusableElements.value[0].focus();
    }
  }
};

watch(inputModel, () => {
  if (inputModel.value === '') {
    reset();
  }
});

watchDebounced(
  inputModel,
  () => {
    if (inputModel.value) {
      const searchProducts = async (phrase: string) => {
        open();
        isLoadingSnippets.value = true;

        const results = product_data.value
          .filter((product) =>
            product.title?.toLowerCase().includes(phrase.toLowerCase()),
          )
          .map((product) => {
            const matchIndex = product.title
              .toLowerCase()
              .indexOf(phrase.toLowerCase());
            const highlight = product.title.substring(0, matchIndex + phrase.length);
            const rest = product.title.substring(matchIndex + phrase.length);
            return { highlight, rest, product };
          });

        snippets.value = results;
        isLoadingSnippets.value = false;
      };

      searchProducts(inputModel.value);
    }
  },
  { debounce: 500 },
);

interface Product {
  id: string;
  title: string;
  thumbnail: string;
}
</script>
