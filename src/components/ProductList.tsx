import { useEffect } from "react"
import { useProductStore } from "../store"

export default function ProductList() {
  const { products, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <>
      <h1 className="text-3xl text-center text-violet-600 font-bold mb-4">Lista de productos Belcorp</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </>
  )
}