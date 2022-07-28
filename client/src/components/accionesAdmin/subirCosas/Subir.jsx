// import { useEffect, useState } from "react"
// import NavBar from "../../NavBar/Navbar"
// import logo from '../../../img/standarLogo.jpg'
// import s from '../../accionesAdmin/subirCosas/Subir.module.css'
// // import './AddImages.css'
// import { getAlbum, postImages } from "../../redux/Actions/Action";
// import { useDispatch, useSelector } from "react-redux/es/exports";
// import swal from "sweetalert";


// export default function Subir() {



//   return (
//     <div>
//       <NavBar />
//       <div className={s.contenedorGeneral}>

//       </div>

//       <div className={s.accionesAdmin}>
//         <img src={logo} alt="" />
//         <div className={s.formContainer}>
//           <form onSubmit={handleSubmit}>
//             <h1 className={s.titSubir}><i>Subir Producto</i></h1>
//             <div>
//               <input type="text" name="" id="" placeholder="Nombre del producto:" />
//             </div>

//             <div>
//               <textarea name="" id="" cols="100" rows="10" placeholder="Descripción del producto:"></textarea>
//             </div>

//             <div>
//               <label>Seccion a la que pertenezca el producto:</label>
//               <select>
//                 <option value="">Revestimiento texturado</option>
//                 <option value="">Látex color</option>
//                 <option value="">Membranas</option>
//                 <option value="">Preparación de la superficie</option>
//                 <option value="">Auxiliares</option>
//               </select>
//             </div>

//             <div>

//               <input type="text" placeholder="Categoría" />
//             </div>

//             <div>
//               <label>Subir imagen</label>
//               <input type="file" name="" id="" />
//             </div>

//             <button type="submit">Subir</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function AddImages() {
//   const dispatch = useDispatch()
//   // const {albumId} = useParams()
//   const album = useSelector(state => state.albums);
//   const [photo, setPhoto] = useState({
//     name: "",
//     image: "",
//     album: 0
//   })

//   console.log(photo)



//   const uploadImage = async e => {
//     const files = e.target.files;
//     const data = new FormData();
//     data.append('file', files[0]);
//     data.append('upload_preset', 'Galeria');
//     const res = await fetch(
//       // 'https://api.cloudinary.com/v1_1/proyectohenry/upload',
//       {
//         method: 'POST',
//         body: data,
//       }
//     );
//     const file = await res.json();
//     console.log(file.secure_url);
//     setPhoto({ ...photo, image: file.secure_url })
//     console.log('cloudinary', photo)

//   };


//   useEffect(() => {
//     dispatch(getAlbum());
//   }, [dispatch]);



//   const HandleChange = e => {
//     setPhoto({
//       ...photo,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSelect = e => {
//     setPhoto({
//       ...photo,
//       album: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     dispatch(postImages(photo))
//     setPhoto({
//       name: "",
//       image: "",
//       album: 0
//     })

//   }

//   return (
//     <div className="photo">
//       <h2 className="tituloAgregarFoto">Agrega una imagen a tu album</h2>
//       <form className="agregarphoto">
//         <select
//           className="select"
//           name="albumId"
//           id="albumId"
//           onChange={e => handleSelect(e)}
//         >
//           <option value="">Elegir album</option>
//           {
//             album.lenght !== 0
//               ? album?.map(e => (
//                 <option key={e.id} value={e.id}>
//                   {e.name}
//                 </option>
//               ))
//               : null
//           }
//         </select>
//         <input
//           name="name"
//           type="text"
//           placeholder="Nombre de la imagen"
//           onChange={HandleChange}
//           value={photo.name}
//           className='espacio'
//         />
//         <input
//           name="file"
//           type="file"
//           placeholder="Sube tu Imagen"
//           onChange={uploadImage}
//           value=""
//           className='espacio'
//         />
//         <img
//           src={
//             photo.image ||
//             'https://www.yiwubazaar.com/resources/assets/images/default-product.jpg'
//           }
//           alt='img not found'
//           className='imagen'
//         />
//         <button onClick={() => handleSubmit()} type="button">Ok</button>
//       </form>
//     </div>

//   )
// }