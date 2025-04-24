/* ───────────────────── api.js ─────────────────────
 *
 * Tiny Axios wrapper that supports:
 *   • GET / POST / PUT / PATCH / DELETE
 *   • query‑params via plain objects
 *   • JSON bodies
 *   • per‑request or global headers
 *   • extra Axios config when you need it
 * ------------------------------------------------- */

import axios from 'axios';
import medusa from './medusa';
import Cookies from 'js-cookie';
import { custom } from 'zod';

/* 1. Create ONE Axios instance for the whole app */
const http = axios.create({
  baseURL: import.meta?.env?.VITE_API_URL || 'https://api.example.com',
  timeout: 10000, // 10 s
});

/* 2. Example: attach a Bearer token automatically */
http.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
});

/* 3. Generic request helper */
export async function request({ method, url, params, data, headers, config = {} }) {
  const res = await http.request({
    method,
    url,
    params,   // ➜ serialized to ?a=1&b=2
    data,     // ➜ sent as JSON body (for POST, PUT, PATCH)
    headers,  // ➜ merged with defaults/interceptor
    ...config // ➜ override anything (timeout, responseType, etc.)
  })
  return res.data            // return the payload directly
};

// export async function loginCustomer(email, password){
//     const data = await medusa.auth.getToken({
//         email,
//         password
//     }).then(({ access_token }) => {
//         return access_token;
//     });

//     if(data){
//         Cookies.set("wilco_access_token", data, {
//             secure: true,
//             sameSite: 'strict',
//             expires: 7
//         })
//     };
// };

export async function loginCustomer(email, password){
    await medusa.auth.authenticate({
        email,
        password
    }).then(({ customer }) => {
        return customer;
    });
};

export async function createCustomer(form_data){
    await medusa.customers.create({
        first_name: form_data.firstName,
        last_name: form_data.lastName,
        email: form_data.email,
        password: form_data.password
    }).then(( { customer } ) => {
        console.log("This is created customer -->", customer);
    })
}


/* 4. Named export for convenience */
// export const api = { request, loginCustomer }

/* ─────────────── Usage snippets ───────────────

import { api } from './api'

// GET list
const users = await api.request({
  method: 'GET',
  url: '/users'
})

// GET with query params
const admins = await api.request({
  method: 'GET',
  url: '/users',
  params: { role: 'admin', page: 2 }
})

// POST with body + extra header
const loginResp = await api.request({
  method: 'POST',
  url: '/auth/login',
  data: { email, password },
  headers: { 'X-Tenant': 'foo' }
})

// PUT by id
await api.request({
  method: 'PUT',
  url: `/users/${id}`,
  data: { name: 'New Name' }
})

// DELETE with custom timeout
await api.request({
  method: 'DELETE',
  url: `/users/${id}`,
  config: { timeout: 3000 }
})

────────────────────────────────────────────── */
