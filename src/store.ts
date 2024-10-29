// src/store/productStore.ts
import { create } from 'zustand'

interface Product {
  id: number
  title: string
  description: string
  price: number
}

interface ProductStore {
  products: Product[]
  fetchProducts: () => Promise<void>
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  fetchProducts: async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    set({ products: data.products })
  },
}))