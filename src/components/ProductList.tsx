import { useEffect, useState } from "react"
import { useProductStore } from "../store"
import { AgGridReact } from 'ag-grid-react'
import { ColDef, ICellRendererParams } from "ag-grid-community"
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { Button, Dialog, Tabs } from "@radix-ui/themes"
import { Product } from "../types"
import GeneralTab from "./GeneralTab"
import DetailTab from "./DetailTab"
import { Cross1Icon, EyeOpenIcon } from "@radix-ui/react-icons"

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
    { headerName: 'Price', field: 'price' },
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

      {selectedProduct && (
        <Dialog.Root open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <Dialog.Content className="dialog-content" aria-describedby={undefined}>
            <Dialog.Title>Detalles del Producto</Dialog.Title>

            <Tabs.Root defaultValue="general">
              <Tabs.List aria-label="Product Details">
                <Tabs.Trigger value="general">General</Tabs.Trigger>
                <Tabs.Trigger value="detail">Detalle</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="general">
                <GeneralTab onConfirm={handleConfirm} />
              </Tabs.Content>

              <Tabs.Content value="detail">
                <DetailTab product={selectedProduct} />
              </Tabs.Content>
            </Tabs.Root>

            <Dialog.Close>
              <Button onClick={() => setSelectedProduct(null)} color="crimson" variant="soft">
                <Cross1Icon /> Cerrar
              </Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Root>
      )}
    </div>
  )
}