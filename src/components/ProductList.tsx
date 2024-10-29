import { useEffect, useState } from "react"
import { AgGridReact } from 'ag-grid-react'
import { ColDef, ICellRendererParams } from "ag-grid-community"
import { Button } from "@radix-ui/themes"
import { EyeOpenIcon } from "@radix-ui/react-icons"

import { useProductStore } from "../store"
import { Product } from "../types"
import ProductModal from "./ProductModal"
import { formatCurrency } from "../utils"

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

export default function ProductList() {
  const { products, fetchProducts } = useProductStore()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])
  
  const handleConfirm = (price: string) => {
    alert(`Precio confirmado: ${price}`)
  }

  const columns: ColDef[] = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Description', field: 'description' },
    {
      headerName: 'Price',
      field: 'price',
      valueFormatter: (params) => formatCurrency(params.value)
    },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: (params: ICellRendererParams<Product>) => {
        return (
          <Button onClick={() => setSelectedProduct(params.data as Product)} color="cyan" variant="soft">
            <EyeOpenIcon /> Mostrar
          </Button>
        )
      }
    }
  ]

  return (
    <div className="ag-theme-alpine" style={{ height: 450, width: '100%' }}>
      <h1 className="text-3xl text-center text-violet-600 font-bold mb-4">Lista de productos Belcorp</h1>
      <AgGridReact
        rowData={products}
        columnDefs={columns}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 15, 20]}
        onGridReady={(params) => params.api.sizeColumnsToFit()} // Ajustar columnas
      />

      <ProductModal 
        selectedProduct={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onConfirm={handleConfirm} 
      />
    </div>
  )
}