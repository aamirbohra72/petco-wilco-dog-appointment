import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const customer   = ref(null)
  const isLoggedIn = computed(() => !!customer.value)

  function setCustomer (c) { customer.value = c }
  function logout () { customer.value = null }

  return { customer, isLoggedIn, setCustomer, logout }
}, {
  persist: { key: 'wilco-auth', paths: ['customer'] }
})

