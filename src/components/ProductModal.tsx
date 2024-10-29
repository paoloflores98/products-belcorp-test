import { Dialog, Tabs, Button } from "@radix-ui/themes"
import { Cross1Icon } from "@radix-ui/react-icons"
import { Product } from "../types"
import GeneralTab from "./GeneralTab"
import DetailTab from "./DetailTab"

interface ProductModalProps {
  selectedProduct: Product | null
  onClose: () => void
  onConfirm: (price: string) => void
}

export default function ProductModal({ selectedProduct, onClose, onConfirm }: ProductModalProps) {
  if (!selectedProduct) return null

  return (
    <Dialog.Root open={!!selectedProduct} onOpenChange={onClose}>
      <Dialog.Content className="dialog-content" aria-describedby={undefined}>
        <Dialog.Title>Detalles del Producto</Dialog.Title>

        <Tabs.Root defaultValue="general">
          <Tabs.List aria-label="Product Details">
            <Tabs.Trigger value="general">General</Tabs.Trigger>
            <Tabs.Trigger value="detail">Detalle</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="general">
            <GeneralTab onConfirm={onConfirm} />
          </Tabs.Content>

          <Tabs.Content value="detail">
            <DetailTab product={selectedProduct} />
          </Tabs.Content>
        </Tabs.Root>

        <Dialog.Close>
          <Button onClick={onClose} color="crimson" variant="soft">
            <Cross1Icon /> Cerrar
          </Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  )
}