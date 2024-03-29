import "@/assets/styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AuthProvider from "@/components/AuthProvider"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { GlobalProvider } from "@/context/GlobalContext"
import "photoswipe/dist/photoswipe.css"

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
}

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang="en">
          <body>
            <Navbar />
            <div className="flex flex-col justify-between min-h-screen">
              {children}
              <ToastContainer />
              <Footer />
            </div>
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  )
}

export default MainLayout
