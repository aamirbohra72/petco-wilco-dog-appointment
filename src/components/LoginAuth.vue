<template>
    <div class="grid grid-cols-3 gap-4 items-center min-h-screen px-8">
        <div class="col-span-2">
            <p class="text-neutral-900 text-4xl font-extrabold text-[#003B5C]">Welcome Back</p>
            <p class="text-neutral-700 font-medium text-base font-semibold text-[#003B5C]">Let's sign you in</p>
            <img class="w-full max-w-2xl h-auto" src="@/assets/grooming-salon.jpg" alt="Login image" />
        </div>

        <div class="col-span-1">
            <form class="space-y-4" @submit.prevent="handleSubmit">
                <!-- Email Input -->
                <div>
                    <label for="email" class="block mb-1 text-sm font-medium">Email</label>
                    <input id="email" type="email" v-model="form.email" placeholder="Enter your email"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B5C]" />
                    <p v-if="form_errors.email" class="text-red-600 text-sm mt-1">{{ form_errors.email }}</p>
                </div>

                <div class="relative">
                <label for="password" class="block mb-1 text-sm font-medium">Password</label>

                <input
                    :type="showPwd ? 'text' : 'password'"
                    id="password"
                    v-model="form.password"
                    placeholder="Enter your password"
                    class="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B5C]"
                />

                <!-- eye button -->
                <button
                    type="button"
                    @click="showPwd = !showPwd"
                    class="absolute right-3 top-9 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <svg
                    v-if="showPwd"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <!-- eye icon -->
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                    </svg>
                    <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <!-- eye‑off icon -->
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.943-9.543-7a9.969 9.969 0 012.64-4.568m2.154-1.667A9.956 9.956 0 0112 5c4.478 0 8.269 2.943 9.543 7a9.97 9.97 0 01-4.119 5.222M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3l18 18"
                    />
                    </svg>
                </button>
                </div>

                <button @click="handleSubmit"
                    class="w-full my-4 bg-[#003B5C] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#002940] transition duration-300">
                    Continue
                </button>

                <p class="text-center text-sm font-semibold my-2">or continue</p>

                <div class="flex gap-4 justify-center">
                    <img class="rounded-lg object-cover h-16 w-16 cursor-pointer" src="@/assets/google id.png"
                        alt="Google login" />
                    <img class="rounded-lg object-cover h-16 w-16 cursor-pointer" src="@/assets/facebook.png"
                        alt="Facebook login" />
                    <img class="rounded-lg object-cover h-16 w-16 cursor-pointer" src="@/assets/apple id.png"
                        alt="Apple login" />
                </div>

                <p class="text-center text-sm font-semibold my-2">
                    Don't have an account?
                    <a href="/signup" class="text-blue-500 hover:underline">Create account</a>
                </p>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref, reactive } from 'vue';
    import { z } from 'zod';
    import { loginCustomer } from '@/lib/request';
    import { useRouter } from 'vue-router';
    const router = useRouter();

    // Login zod schema
    const loginSchema = z.object({
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters long" })
    });

    /* NEW: password visibility */
    const showPwd = ref(false)

    const form = reactive({
        email: '',
        password: ''
    });

    const form_errors = reactive({
        email: '',
        password: ''
    });

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        const result = loginSchema.safeParse(form);

        form_errors.email = '';
        form_errors.password = '';

        if (!result.success) {
            for (const issue of result.error.issues) {
                form_errors[issue.path[0] as 'email' | 'password'] = issue.message
            }
            return
        };

        try{
            await loginCustomer(form.email, form.password);
            router.push('/');
        }
        catch(error){
            form_errors.password = error.message ?? 'Login failed'
        }
    }
</script>