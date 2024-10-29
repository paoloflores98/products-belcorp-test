export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </p>
    </footer>
  )
}