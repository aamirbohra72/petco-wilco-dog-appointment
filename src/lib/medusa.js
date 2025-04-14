import Medusa from "@medusajs/medusa-js";

const medusa = new Medusa({
  baseUrl: "http://localhost:9000", // Replace with your Medusa backend URL
  maxRetries: 3,
});

export default medusa;
