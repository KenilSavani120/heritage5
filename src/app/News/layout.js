import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}