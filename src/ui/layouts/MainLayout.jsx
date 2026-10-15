import Navbar from '../organisms/Navbar'
import Footer from '../organisms/Footer'

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
