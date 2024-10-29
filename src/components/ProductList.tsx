import { useEffect, useState } from "react"
import { AgGridReact } from 'ag-grid-react'
import { ColDef, ICellRendererParams } from "ag-grid-community"
import { Button } from "@radix-ui/themes"
import { EyeOpenIcon, TrashIcon } from "@radix-ui/react-icons"

import { useProductStore } from "../store"
import { Product } from "../types"
import ProductModal from "./ProductModal"
import { formatCurrency } from "../utils"

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

export default function ProductList() {
  const { products, fetchProducts, deleteProduct } = useProductStore()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])
  
  const handleConfirm = (price: string) => {
    alert(`Precio confirmado: ${price}`)
  }

  const columns: ColDef[] = [
    { headerName: 'ID', field: 'id', filter: 'agNumberColumnFilter' },
    { headerName: 'Title', field: 'title', filter: 'agTextColumnFilter' },
    { headerName: 'Description', field: 'description', filter: 'agTextColumnFilter' },
    {
      headerName: 'Price',
      field: 'price',
      valueFormatter: (params) => formatCurrency(params.value),
      filter: 'agTextColumnFilter'
    },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: (params: ICellRendererParams<Product>) =>(
        <div className="flex space-x-2">
          <Button onClick={() => setSelectedProduct(params.data as Product)} color="cyan" variant="soft">
            <EyeOpenIcon /> Mostrar
          </Button>
          <Button 
            onClick={() => {if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) return deleteProduct(params.data!.id)}} 
            color="crimson" 
            variant="soft"
          >
            <TrashIcon /> Eliminar
          </Button>
        </div>
      ),
      filter: false
    }
  ]

  return (
    <div className="ag-theme-alpine" style={{ height: 450, width: '100%' }}>
      <h2 className="text-2xl text-center text-violet-600 font-bold mb-4">Lista de productos Belcorp</h2>
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