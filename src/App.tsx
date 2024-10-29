import Footer from "./components/Footer"
import Header from "./components/Header"
import ProductList from "./components/ProductList"

function App() {
  
  return (
    // <>
    //   <div className="w-10/12 mx-auto p-4">
    //     <ProductList />
    //   </div>
    // </>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <ProductList />
      </main>
      <Footer />
    </div>
  )
}

export default App