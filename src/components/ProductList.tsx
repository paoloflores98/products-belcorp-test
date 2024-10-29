import { useEffect } from "react"
import { useProductStore } from "../store"
import { AgGridReact } from 'ag-grid-react'
import { ColDef } from "ag-grid-community"
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

export default function ProductList() {
  const { products, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const columns: ColDef[] = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Description', field: 'description', flex: 1 },
    { headerName: 'Price', field: 'price' }
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
      />
    </div>
  )
}