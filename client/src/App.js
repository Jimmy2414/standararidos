// import { Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Admin from './components/Admin/Admin';
import LoginAdmin from './components/LoginAdmin/LoginAdmin';
import Subir from './components/accionesAdmin/subirCosas/Subir';
import FileUpload from './Firebase/fileUpload';
import Revestimientos from './components/RevestimientosText/revestimientos';
import LatexColor from './components/LatexColor/latex';
import LatexInterior from './components/LatexColor/TiposLatex/LatexInterior';
import LatexInteriorLavable from './components/LatexColor/TiposLatex/LatexInteriorLavable';
import LatexInteriorSatinado from './components/LatexColor/TiposLatex/LatexInteriorSatinado';
import LatexInteriorCielorraso from './components/LatexColor/TiposLatex/LatexInteriorCielorraso';
import LatexInteriorColor from './components/LatexColor/TiposLatex/LatexInteriorColor';
import LatexExterior from './components/LatexColor/TiposLatex/LatexExterior';
import LatexExteriorImpermeabilizante from './components/LatexColor/TiposLatex/LatexExteriorImpermeabilizante';
import Fijadores from './components/TechosYSuperficies/Fijadores';
import Enduidos from './components/TechosYSuperficies/Enduidos';
import Accesorios from './components/TechosYSuperficies/Accesorios';
import Membranas from './components/Membranas/membranas';
import PreparacionSuperficie from './components/Preparacion de la superficie/PreparacionSuperficie';
import Auxiliares from './components/Auxiliares/auxiliares';
import Contacto from './components/contacto/Contacto';
import Detalle from './components/Detalles/DetallesProducto';
import ModificarProductos from './components/accionesAdmin/modificarCosas/modificar';
import EliminarProducto from './components/accionesAdmin/eliminarCosas/eliminar';
import EditarProducto from './components/accionesAdmin/modificarCosas/editar';
import DetalleAdmin from './components/detalleAdmin/detalleAdmin';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/admin" element={<Admin />} exact />
        <Route path="/upLoad" element={<FileUpload />} exact />
        <Route path="/upDate" element={<ModificarProductos />} exact />
        <Route path="/upDate/:id" element={<ModificarProductos />} exact />
        <Route
          path="/revestimientos-texturados"
          element={<Revestimientos />}
          exact
        />
        <Route path="/latex-interior" element={<LatexInterior />} exact />
        <Route path='/latex-interior-lavable' element={<LatexInteriorLavable />} exact />
        <Route path='/latex-interior-satinado' element={<LatexInteriorSatinado />} exact />
        <Route path='/latex-interior-cielorraso' element={<LatexInteriorCielorraso />} exact />
        <Route path='/latex-interior-color' element={<LatexInteriorColor />} exact />
        <Route path='/latex-exterior-impermeabilizante' element={<LatexExteriorImpermeabilizante />} exact />
        <Route path='latex-exterior' element={<LatexExterior />} exact />
        <Route path="/membranas" element={<Membranas />} exact />
        <Route path='fijadores' element={<Fijadores />} exact />
        <Route path='/enduidos' element={<Enduidos />} exact />
        <Route path='/accesorios' element={<Accesorios />} exact />
        <Route
          path="/preparacion-de-la-superficie"
          element={<PreparacionSuperficie />}
          exact
        />
        <Route path="/auxilires" element={<Auxiliares />} exact />
        <Route path="/contacto" element={<Contacto />} exact />
        <Route path="/search/:id" element={<Detalle />} exact />
        <Route path="/delete" element={<EliminarProducto />} exact />
        <Route path="/admin/detalle/:id" element={<DetalleAdmin />} exact />
      </Routes>
    </div>
  );
}

export default App;
