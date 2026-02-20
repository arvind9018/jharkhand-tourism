import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Destinations from "./pages/Destinations"
import DestinationDetails from "./pages/DestinationDetails"
import MapView from "./pages/MapView"
import Homestays from "./pages/Homestays"
import Marketplace from "./pages/Marketplace"
import AdminDashboard from "./pages/AdminDashboard"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetails />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/homestays" element={<Homestays />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
