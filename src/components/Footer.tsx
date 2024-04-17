import logoCrit from "../images/logoCrit.jpg"
function Footer() {

    return (

        <footer className="w-full text-orange-700 body-font bg-[#FE7235]">
        <div className="flex justify-between items-center container px-5 py-4 mx-auto">
            <div className=" flex items-center">
                <a className="flex items-center justify-center  md:justify-start w-14">
                    <img src={logoCrit} alt="360Crit"/>
                </a>
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a href="https://www.instagram.com/criteria_rrhh" className="ml-3  text-white -500 cursor-pointer">
                        <div className="bg-[#FA9062] rounded-full p-2 hover:bg-white transition-colors duration-200">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" className="w-3 h-3 text-white -500 hover:text-gray-500 transition-colors duration-200" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/company/criteria-recursos-humanos" className="ml-3 text-white -500 cursor-pointer">
                        <div className="bg-[#FA9062] rounded-full p-2 hover:bg-white transition-colors duration-200">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="0" className="w-3 h-3 text-white -500 hover:text-gray-500 transition-colors duration-200" viewBox="0 0 24 24">
                                <path stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                                </path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                            </div>
                        </a>
                        <a href="https://twitter.com/Criteria_RRHH" className="ml-3 text-white-500 cursor-pointer ">
                        <div className="bg-[#FA9062] rounded-full p-2 hover:bg-white transition-colors duration-200">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                className="w-3 h-3 text-white -500 hover:text-gray-500 transition-colors duration-200" viewBox="0 0 24 24">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                </path>
                            </svg>
                            </div>
                        </a>

                    </span>
            </div>
        
                <p className="text-sm text-white -700 capitalize xl:text-end">
                    <a href="https://www.criteria.es">Criteria</a> © 2024 todos los derechos reservados </p>
        
                
        </div>
    
    </footer>
    

            );
    }
    
    export default Footer;

