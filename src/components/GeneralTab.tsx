import { useState } from "react"

interface GeneralTabProps {
  onConfirm: (price: string) => void
}

export default function GeneralTab({ onConfirm }: GeneralTabProps) {
  const [brand, setBrand] = useState("Esika")
  const [price, setPrice] = useState("0.000000")

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPrice(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validar formato al confirmar
    if (/^(0(\.\d{1,6})?|1(\.0{1,6})?)$/.test(price)) {
      onConfirm(price)
    } else {
      alert("El precio debe estar entre 0 y 1, con hasta 6 decimales")
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="p-6 my-4 bg-white rounded-lg shadow-lg border">
      <div className="mb-3">
        <label className="text-violet-500 font-semibold">Marca:</label>
        <select
          className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="Esika">Esika</option>
          <option value="Lbel">Lbel</option>
          <option value="Cyzone">Cyzone</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="text-violet-500 font-semibold">Precio:</label>
        <input
          type="text"
          value={price}
          onChange={handlePriceChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </div>
      <button
        type="submit"
        className="w-full mt-4 bg-violet-500 text-white font-semibold py-2 rounded-lg hover:bg-violet-600 transition-colors"
      >Confirmar</button>
    </form>
  )
}