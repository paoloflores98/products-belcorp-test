import { useEffect, useState } from "react"
import { Product } from "../types"

interface DetailTabProps {
  product: Product
}

export default function DetailTab({ product }: DetailTabProps) {
  const [currentDateTime, setCurrentDateTime] = useState("")

  useEffect(() => {
    const now = new Date()
    const formattedDateTime = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
    setCurrentDateTime(formattedDateTime)
  }, [])


  return (
    <div>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Title:</strong> {product.title}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Fecha y Hora:</strong> {currentDateTime}</p>
    </div>
  )
}