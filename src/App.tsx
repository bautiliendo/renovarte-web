import { NavBar } from './components/common/NavBar'
import { Hero } from './components/Hero'
import { Productos } from './components/Productos'
import { ProductDetail } from './components/ProductDetail'
import { Footer } from './components/common/Footer'
import { Routes, Route, Navigate } from "react-router-dom";
import { PoliticaPrivacidad } from './components/PoliticaPrivacidad';
import { TerminosyCond } from './components/TerminosyCond';
import { Carrito } from './components/Carrito';
import { Empresa } from './components/Empresa';
import { ScrollTop } from './helpers/ScrollTop';
import { Comprar } from './components/Comprar';
import { FiltersProvider } from './context/filters';
import { BotonWsp } from './components/BotonWsp';

function App() {
  return (
    <FiltersProvider>
      <ScrollTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:productoTitle" element={<ProductDetail />} />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/politicapriv" element={<PoliticaPrivacidad />} />
        <Route path="/terminosycond" element={<TerminosyCond />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BotonWsp />
      <Footer />
    </FiltersProvider>
  )
}

export default App
