import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { Services } from "@/pages/Services"
import { Projects } from "@/pages/Projects"
import { Clients } from "@/pages/Clients"

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
