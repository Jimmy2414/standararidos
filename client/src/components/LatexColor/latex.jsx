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
import Paginacion from "../Paginado/paginado";
import { NavLink } from 'react-router-dom'
export default function LatexColor() {

  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 100);
  // }, []);

  const dispatch = useDispatch();

  const allProductos = useSelector(state => state.Productos);
  console.log(allProductos.map(e => e.descripcion));

  // const latexColor = allProductos.filter(e => e.seccion === "Látex Color")

  const [curretPage, setCurrentPage] = useState(1);
  const [productosPorPagina, setcountriesPorPagina] = useState(10);
  const indexProductLast = curretPage * productosPorPagina;
  const indexProductFirst = indexProductLast - productosPorPagina;
  const latexColor = allProductos.filter(e => e.seccion === "Látex Color").slice(
    indexProductFirst,
    indexProductLast
  );

  const paginado = pageNumber => {
    let page = curretPage;
    // if (pageNumber === 'inicio') {
    //   setCurrentPage(1);
    // } 
    //  if (pageNumber === 'final') {
    //   setCurrentPage(Math.ceil(allProductos.length / productosPorPagina));
    // } 
    if (
      pageNumber === 'siguiente' &&
      curretPage < Math.ceil(allProductos.length / productosPorPagina)
    ) {
      page = curretPage + 1;
      setCurrentPage(page);
    } else if (pageNumber === 'anterior' && curretPage > 1) {
      page = curretPage - 1;
      setCurrentPage(page);
    } else if (typeof pageNumber === 'number') {
      setCurrentPage(pageNumber);
    }
  };

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
                    <NavLink to={`/search/${e.id}`}>
                      <Productos
                        id={e.id}
                        imagen={e.imagen}
                        nombre={e.nombre}
                        descripcion={e.descripcion}
                        categoria={e.categoria}
                        seccion={e.seccion}
                      />
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
          <Paginacion
            curretPage={curretPage}
            productosPorPagina={productosPorPagina}
            allProductos={allProductos.length}
            paginado={paginado}
          />
          <Footer />
        </div>)}

    </div>
  )
}