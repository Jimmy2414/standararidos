// import { Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Admin from './components/Admin/Admin';
import Subir from './components/accionesAdmin/subirCosas/Subir'
import FileUpload from './Firebase/fileUpload'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} exact />
        <Route path="/upLoad" element={<Subir />} exact />
        <Route path="/file" element={<FileUpload />} exact />

      </Routes>

    </div>
  );
}

export default App;
