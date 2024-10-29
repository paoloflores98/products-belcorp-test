import { Button, Text, Flex } from "@radix-ui/themes"

function App() {
  
  return (
    <>
      <h1 className="text-3xl mb-4">Hola mundo</h1>
      <Flex direction="row" gap="2">
        <Text>Hola mundo desde Radix UI</Text>
        <Button size="2" variant="soft">Vamos</Button>
      </Flex>
    </>
  )
}

export default App