const Login = () => {
  return (
    <div className="w-full h-[550px]">
      <div className="w-full h-full">
        <div className="absolute w-full top-[200px] left-[25%]  p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-nsans-bold">
            Formulario de Ingreso
          </h1>
          <div className="mt-8 mb-4 text-xl">
            <form action="/">
              <label htmlFor="">Usuario</label>
              <br />
              <input type="text" />
              <br />
              <br />
              <label htmlFor="">Contraseña</label>
              <br />
              <input type="text" />
              <br />
              <br />
              <button
                className="border bg-gray-300 text-black py-2 px-5"
                type="submit"
              >
                Ingresar
              </button>
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
