import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';


const Admin = () => {  
  const navigate = useNavigate();

  useEffect(() =>{
    const autenticarUsuario = async() =>{
      const token = localStorage.getItem("token")
      //console.log(token);
      if (!token) {
        navigate("/login");
      }
    }
    autenticarUsuario();
  },[navigate]); // []hacen que solo se ejecute una vez el useEffect
  
  //solo el useEffect se va ejecutar una vez, al inicio cuando el programa intente llamar el componenete de Admin




  return (
      /*<main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
         <div className='md:w-2/3 lg:w-2/5'>
            <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
              Panel de Adiministrador 4
            </h1>
            <input 
                type="submit"
                value="Cerrar Sesión"
                className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
                onClick={cerrarSesion}
            />
        </div>
      </main>*/

      <>
      <Header/>
      <div className='md:flex md:min-h-screen'>
        <Sidebar/>
        <main className='flex-1'>
        <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
              Listado de Categorias
            </h1>

        </main>
      </div>
      
      
      
      
      </>
    );
}

export default Admin;