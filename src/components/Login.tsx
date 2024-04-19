import { useContext, useState} from "react";
import bghome from "../assets/images/bghome.jpg"
import DefaultLayout from "../layout/DefaultLayout";
// import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { useForm } from "react-hook-form";
import { AuthUser } from "../interfaces/UsersInterface";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { register, handleSubmit } = useForm<AuthUser>();
    const { logInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogIn = async (data: AuthUser): Promise<void> => {
      const userData = await logInUser(data);
      if (!userData) {
        navigate("/login");
      } else {
        navigate("/protected")
      }
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
                    Acceder
                  </h2>
                  <form className="space-y-6 mt-10" onSubmit={handleSubmit(handleLogIn)}>
                    <div>
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder="Email"
                          {...register("email")} 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full rounded-md border-0  bg-opacity-40 py-1.5 px-2 text-gray-700 shadow-sm ring-1 ring-inset outline-none  ring-gray-400 placeholder:text-gray-400 text-base focus:border-orange-500 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                    
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          type="password"
                          autoComplete="current-password"
                          placeholder="Password"
                          {...register("password")}                           
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-700 shadow-sm ring-1 ring-inset outline-none ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-semibold text-orange-600 hover:text-orange-500"
                        >
                          Recordar contraseña
                        </a>
                      </div>
                    </div>
              
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                      >
                        Acceder
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


export default Login

