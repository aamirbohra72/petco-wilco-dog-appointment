<template>
  <div class="grid grid-cols-3 gap-4 items-center min-h-screen px-8">
    <!-- ✅  Left column -->
    <div class="col-span-2">
      <p class="text-4xl font-extrabold text-[#003B5C]">Create Account</p>
      <p class="text-base font-semibold text-[#003B5C]">Signup to get started</p>
      <img
        class="w-full max-w-2xl h-auto rounded-lg object-cover"
        src="@/assets/pet-grooming.jpg"
        alt="Signup image"
      />
    </div>

    <!-- ✅  Right column: form -->
    <div class="col-span-1">
      <form class="space-y-4" @submit.prevent="handleSubmit">
        <!-- First name -->
        <div>
          <label for="first" class="text-sm font-medium block mb-1">First Name</label>
          <input
            id="first"
            v-model="form.firstName"
            type="text"
            placeholder="Enter your first name"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B5C]"
          />
          <p v-if="errors.firstName" class="text-red-600 text-sm mt-1">{{ errors.firstName }}</p>
        </div>

        <!-- Last name -->
        <div>
          <label for="last" class="text-sm font-medium block mb-1">Last Name</label>
          <input
            id="last"
            v-model="form.lastName"
            type="text"
            placeholder="Enter your last name"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B5C]"
          />
          <p v-if="errors.lastName" class="text-red-600 text-sm mt-1">{{ errors.lastName }}</p>
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="text-sm font-medium block mb-1">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B5C]"
          />
          <p v-if="errors.email" class="text-red-600 text-sm mt-1">{{ errors.email }}</p>
        </div>

        <!-- Password + eye toggle -->
        <div class="relative">
          <label for="pwd" class="text-sm font-medium block mb-1">Password</label>
          <input
            :type="showPwd ? 'text' : 'password'"
            id="pwd"
            v-model="form.password"
            placeholder="Enter your password"
            class="w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B5C]"
          />
          <button
            type="button"
            @click="showPwd = !showPwd"
            class="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
          >
            <svg
              v-if="showPwd"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.943-9.543-7a9.969 9.969 0 012.64-4.568m2.154-1.667A9.956 9.956 0 0112 5c4.478 0 8.269 2.943 9.543 7a9.97 9.97 0 01-4.119 5.222M15 12a3 3 0 11-6 0 3 3 0 016 0zM3 3l18 18" />
            </svg>
          </button>
          <p v-if="errors.password" class="text-red-600 text-sm mt-1">{{ errors.password }}</p>
        </div>

        <!-- Continue -->
        <button
          type="submit"
          class="w-full bg-[#003B5C] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#002940] transition duration-300"
        >
          Continue
        </button>

        <!-- Social / sign in links – unchanged -->
        <p class="text-center text-sm font-semibold my-2">or continue</p>
        <div class="flex gap-4 justify-center">
          <img class="rounded-lg object-cover h-12 w-12 cursor-pointer" src="@/assets/google id.png" />
          <img class="rounded-lg object-cover h-12 w-12 cursor-pointer" src="@/assets/facebook.png" />
          <img class="rounded-lg object-cover h-12 w-12 cursor-pointer" src="@/assets/apple id.png" />
        </div>

        <p class="text-center text-sm font-semibold mt-4">
          Already have an account?
          <a href="/login" class="text-blue-500 hover:underline">Sign In</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { z } from 'zod'
  import { useRouter } from 'vue-router'
  import { createCustomer } from '@/lib/request'
  import { useAuthStore } from '@/stores/auth';
  const router = useRouter();
  const auth = useAuthStore();

  const signupSchema = z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' })
  })

  const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const errors = reactive<Record<string, string>>({})
  const showPwd = ref(false)

  async function handleSubmit() {
    Object.keys(errors).forEach(k => (errors[k] = ''))

    const result = signupSchema.safeParse(form)
    if (!result.success) {
      result.error.issues.forEach((i) => {
        errors[i.path[0] as string] = i.message
      })
      return
    }

    try {
      const customer = await createCustomer(form);
      auth.setCustomer(customer);
      router.push('/');
    } catch (e: any) {
      // surface server‑side validation here
      console.error(e)
    }
  }
</script>
