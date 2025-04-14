import Medusa from "@medusajs/medusa-js";

const medusa = new Medusa({
  baseUrl: import.meta.env.VITE_BACKEND_URL, // Replace with your Medusa backend URL
  maxRetries: 3,
});

export default medusa;
