import bghome from "../images/bghome.jpg";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

function Signup() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [department, setDepartment] = useState("");
    const [password, setPassword] = useState("");
    //const [error, setError] = useState("");
    //const [loading, setLoading] = useState(false);
    //const [success, setSuccess] = useState(false);
    //const [message, setMessage] = useState("");
   
    const auth = useAuth();

    if (auth.isAuthenticated) {
        return <Navigate to="/dashboard" />
    }


    return (
        <DefaultLayout>
        <>
       
          <section className="flex h-screen  mt-0.3">
            <article className="flex w-full">
              {/* Sidebar */}
              <div className="bg-gray-100 p-8 md:w-1/3 lg:w-1/4 flex flex-col justify-center">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  {/* <img className="mx-auto h-20 w-auto" src={logo} alt="Criteria" /> */}
                  <h2 className="mt-10 text-left text-3xl  leading-9 tracking-widest text-black 700 sm:text-2xl sm:leading-900">
                   Registro
                  </h2>
                  <form className="space-y-6 mt-10">
                  <div>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          placeholder="Nombre"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          // {...register("email", {
                          //   required: true,
                          // })}
                          className="block w-full rounded-md border-0  bg-opacity-40 py-1.5 px-2 text-gray-700 shadow-sm ring-1 ring-inset outline-none  ring-gray-400 placeholder:text-gray-400 text-base focus:border-orange-500 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                     
                    </div>
                    <div>
                        <input
                          id="last_name"
                          name="last_name"
                          type="text"
                          autoComplete="last_name"
                          required
                          placeholder="Apellidos"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          // {...register("email", {
                          //   required: true,
                          // })}
                          className="block w-full rounded-md border-0  bg-opacity-40 py-1.5 px-2 text-gray-700 shadow-sm ring-1 ring-inset outline-none  ring-gray-400 placeholder:text-gray-400 text-base focus:border-orange-500 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                     
                    </div>

                    <select className="block w-full rounded-md border-0  bg-opacity-40 py-1.5 px-2 text-gray-700 shadow-sm ring-1 ring-inset outline-none  ring-gray-400 placeholder:text-gray-400 text-base focus:border-orange-500 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}>
    <option value="">
        Departamento
    </option>
    <option value="rrhh">
        RR.HH.
    </option>
    <option value="mkt">
        Marketing
    </option>
    <option value="finanzas">
        Finanzas
    </option>
    <option value="formacion">
        Formación
    </option>
   
</select>

                    <div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          // {...register("email", {
                          //   required: true,
                          // })}
                          className="block w-full rounded-md border-0  bg-opacity-40 py-1.5 px-2 text-gray-700 shadow-sm ring-1 ring-inset outline-none  ring-gray-400 placeholder:text-gray-400 text-base focus:border-orange-500 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                     
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          placeholder="Password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-400 shadow-sm ring-1 ring-inset outline-none ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      
                    </div>
                   
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                      >
                        Darse de alta
                      </button>
                    </div>
                  </form>
                </div>
              </div>
      
              <div
                className="flex-1 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bghome})` }}>
              </div>
            </article>
          </section>
        </>
        </DefaultLayout>
  )
}

export default Signup