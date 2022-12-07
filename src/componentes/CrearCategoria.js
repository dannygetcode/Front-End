import React, { useState } from "react";
import crud from "../conexiones/crud";
import Header from "./Header";
import Sidebar from "./Sidebar";

const CrearCategorias = () => {
  const [categoria, setCategoria] = useState({
    nombre: "",
  });

  const { nombre } = categoria;

  const onChange = (e) => {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  };

  const crearCategoria = async() => {
    const data = {      
        nombre: categoria.nombre
    };
      
      const response = await crud.POST("/api/categoria", data);
      const mensaje = response.msg;
      console.log(mensaje);

  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearCategoria();
  };

  return (
    <div>
      <Header />
      <div className="md:flex md:min-h-screen">
        <Sidebar />
        <main className="flex-1">
          <h1
            className="inline bg-gradient-to-r from-indigo-200 via-violet-700
           to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent"
          >
            Crear Categoria
          </h1>
          <div className=" w-1/2 flex justify-center  ">
            <form
              className="my-10 bg-white shadow-orange-500 rounded-lg p-10"
              onSubmit={onSubmit}
            >
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Nombre Categoria:
                </label>
                <input
                  className="w-full mt-3 p-3 border rounded-lg bg-gray-50 "
                  type="text"
                  placeholder="Email..."
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={onChange}
                />
              </div>
              <input
                type="submit"
                value="Iniciar Sesión"
                className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
              />
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CrearCategorias;
