import { Product } from "../types"

export async function fetchProductsFromAPI(): Promise<Product[]> {
  const response = await fetch('https://dummyjson.com/products')
  const data = await response.json()
  return data.products
}