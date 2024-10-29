import { useEffect, useState } from "react"
import { Product } from "../types"
import { formatCurrency, formatDate } from "../utils"

interface DetailTabProps {
  product: Product
}

export default function DetailTab({ product }: DetailTabProps) {
  const [currentDateTime, setCurrentDateTime] = useState("")

  useEffect(() => {
    const now = new Date()
    setCurrentDateTime(formatDate(now))
  }, [])

  return (
    <div className="p-6 my-4 bg-whitex rounded-lg shadow-lg border">
      <div className="mb-3">
        <p className="text-violet-500 font-semibold">ID:</p>
        <p className="text-black">{product.id}</p>
      </div>
      <div className="mb-3">
        <p className="text-violet-500 font-semibold">Título:</p>
        <p className="text-black">{product.title}</p>
      </div>
      <div className="mb-3">
        <p className="text-violet-500 font-semibold">Descripción:</p>
        <p className="text-black">{product.description}</p>
      </div>
      <div className="mb-3">
        <p className="text-violet-500 font-semibold">Precio:</p>
        <p className="text-black">{formatCurrency(product.price)}</p> {/* Precio formateado */}
      </div>
      <div className="mt-5">
        <p className="text-violet-500 font-semibold">Fecha y Hora:</p>
        <p className="text-black">{currentDateTime}</p>
      </div>
    </div>
  )
}