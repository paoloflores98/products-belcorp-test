import { useState } from "react"

interface GeneralTabProps {
  onConfirm: (price: string) => void
}

export default function GeneralTab({ onConfirm }: GeneralTabProps) {
  const [brand, setBrand] = useState("Esika")
  const [price, setPrice] = useState("0.000000")

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Valida que tenga 6 decimales y esté entre 0 y 1
    if (/^(0(\.\d{0,6})?|1(\.0{0,6})?)$/.test(value)) {
      setPrice(value)
    }else {
      alert("El precio debe estar entre 0 y 1, con hasta 6 decimales")
    }
  }

  const handleConfirmClick = () => {
    onConfirm(price)
  }
  
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>
        Marca:
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="Esika">Esika</option>
          <option value="Lbel">Lbel</option>
          <option value="Cyzone">Cyzone</option>
        </select>
      </label>
      <label>
        Precio:
        <input
          type="number"
          step="0.000001"
          value={price}
          onChange={handlePriceChange}
          min="0"
          max="1"
        />
      </label>
      <button type="button" onClick={handleConfirmClick}>Confirmar</button>
    </form>
  )
}