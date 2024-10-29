import { create } from 'zustand'
import { fetchProductsFromAPI } from './services/ProductService'
import { Product } from './types'

interface ProductStore {
  products: Product[]
  fetchProducts: () => Promise<void>
  deleteProduct: (id: number) => void
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  fetchProducts: async () => {
    const products = await fetchProductsFromAPI()
    set(() => ({
      products
    }))
  },
  deleteProduct: (id) => set((state) => ({
    products: state.products.filter((product) => product.id !== id)
  })),
}))