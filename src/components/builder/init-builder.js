// file: init-builder.ts
// import your custom component
import HelloWorld from "./HelloWorld.vue"
import MedusaProductGrid from "./MedusaProductGrid.vue"

export const registeredComponents = [
  {
    component: HelloWorld,
    name: 'Hello World',
    inputs: [
      {
        name: 'text',
        type: 'string',
        defaultValue: 'World',
      },
    ],
  },
  {
    component: MedusaProductGrid,
    name: "Medusa Products Layout",
    inputs: [],
  }
]