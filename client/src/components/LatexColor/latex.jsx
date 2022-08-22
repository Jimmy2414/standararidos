import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducto } from '../../Redux/actions/actions';
import Productos from "../Productos/Productos";
import NavMenu from "../NavMenu/Menu";
import Footer from "../Footer/Footer";
import { useState } from "react";
import s from '../LatexColor/latex.module.css'
import logo from '../../img/standarLogo.jpg';
import bannerLatex from '../../img/bannerLatex.jpg'
export default function LatexColor() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const dispatch = useDispatch();

  const allProductos = useSelector(state => state.Productos);
  console.log(allProductos.map(e => e.descripcion));

  const latexColor = allProductos.filter(e => e.seccion === "Látex Color")

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div className={s.loaderfondo}>
          <div className={s.loader}>
          </div>
        </div>) : (
        <div>

          <div className={s.textoArriba}>
            <p>Pilcomayo 3764 - Villa Tesei (Hurlingham) - Provincia de Buenos Aires</p>
            <p>Copyright · 2022 · Standar Aridos</p>
          </div>


          <div className={s.contenedorLogo}>
            <img src={logo} alt="Logo" />
            {/* <h1>STANDAR ARIDOS</h1> */}
          </div>




          <NavMenu />

          <div className={s.layout}>
            <div className={s.titulo}>
              <h1>Látex Color</h1>
            </div>
            <div className={s.bannerLatex}>
              <img src={bannerLatex} alt="banner-latex" />
            </div>
            <div className={s.contenedorProducto}>
              {latexColor?.map(e => {

                return (
                  <div key={e.id}>
                    <Productos
                      id={e.id}
                      imagen={e.imagen}
                      nombre={e.nombre}
                      descripcion={e.descripcion}
                      categoria={e.categoria}
                      seccion={e.seccion}
                    />
                  </div>
                );


              })}
            </div>
          </div>
          <Footer />
        </div>)}

    </div>
  )
}