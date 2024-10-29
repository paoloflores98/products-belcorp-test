import Footer from "../components/Footer"
import Header from "../components/Header"

interface Props {
  children: React.ReactNode
}

export default function Layout({children}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        {children}
      </main>
      <Footer />
    </div>
  )
}