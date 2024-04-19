//import { children } from "react";
import { useContext } from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

interface DefaultLayoutProps {
    children: React.ReactNode;
}
function DefaultLayout({ children }: DefaultLayoutProps) {
    const { logOutUser } = useContext(AuthContext);

    return (
    <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/login" className="navbar__link" onClick={logOutUser}>Logout</Link>
                    </li>                    
                </ul>
            </nav>
        </header>

        <main>{children}</main>

    </>
    )
}

export default DefaultLayout